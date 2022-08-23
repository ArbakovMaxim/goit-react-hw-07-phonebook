import * as yup from 'yup';
import { TitleBlock } from 'components/Form/Form.styled';

let schema = yup.object().shape({
  name: yup.string().required(),
});

export const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      <TitleBlock>Find contacts by name</TitleBlock>
      <input
        value={filter}
        type="text"
        name="filter"
        pattern={schema}
        title="only sting"
        onChange={e => setFilter(e.target.value)}
      />
    </div>
  );
};
