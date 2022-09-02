import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { TitleBlock } from 'components/ContactsForm/ContactsForm.styled';
import { changeFilter, getFilter } from 'redux/phoneBookApi';

let schema = yup.object().shape({
  name: yup.string().required(),
});

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div>
      <TitleBlock>Find contacts by name</TitleBlock>
      <input
        value={filter}
        type="text"
        name="filter"
        pattern={schema}
        title="only sting"
        onChange={onChangeFilter}
      />
    </div>
  );
};
