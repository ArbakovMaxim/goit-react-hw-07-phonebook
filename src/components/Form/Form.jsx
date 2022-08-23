import * as yup from 'yup';
import { Form, Formik } from 'formik';
import {
  ButtonSubmit,
  TitleBlock,
  WrapperForm,
  Input,
  Eror,
} from './Form.styled';
import { useCreateContactsMutation } from 'redux/phoneBookApi';

export const FormName = () => {
  const [createContact] = useCreateContactsMutation();
  const hendleSubmit = (values, { resetForm }) => {
    const newContact = {
      name: values.name,
      phone: values.phone,
    };
    createContact(newContact);
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
        initialValues={{ name: '', phone: '' }}
        validationSchema={schema}
        onSubmit={hendleSubmit}
      >
        <Form>
          <TitleBlock>Name</TitleBlock>
          <Input type="text" name="name" />
          <Eror name="name" component="div" />
          <TitleBlock>Number</TitleBlock>
          <Input type="tel" name="phone" />
          <Eror name="phone" component="div" />
          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        </Form>
      </Formik>
    </WrapperForm>
  );
};
