import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Form, Formik } from 'formik';
import {
  ButtonSubmit,
  TitleBlock,
  WrapperForm,
  Input,
  Eror,
} from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'redux/contacts';

export const FormName = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const hendleSubmit = (values, { resetForm }) => {
    const newContact = {
      name: values.name,
      number: values.number,
      id: nanoid(),
    };
    contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    )
      ? alert(`${values.name} вже в контактах`)
      : dispatch(addContact(newContact));
    resetForm();
  };

  const nameValid =
    "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
  const numberValid =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  let schema = yup.object().shape({
    name: yup
      .string()
      .matches(
        nameValid,
        'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore dArtagnan'
      )
      .required(),
    number: yup
      .string()
      .matches(
        numberValid,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required(),
  });

  return (
    <WrapperForm>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={hendleSubmit}
      >
        <Form>
          <TitleBlock>Name</TitleBlock>
          <Input type="text" name="name" />
          <Eror name="name" component="div" />
          <TitleBlock>Number</TitleBlock>
          <Input type="tel" name="number" />
          <Eror name="number" component="div" />
          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        </Form>
      </Formik>
    </WrapperForm>
  );
};
