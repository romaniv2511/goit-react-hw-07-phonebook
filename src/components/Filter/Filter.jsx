import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);

  return (
    <>
      <p>Find contacts by name</p>
      <input
        name="filterByName"
        type="text"
        onChange={e => dispatch(changeFilter(e.target.value))}
        value={filterValue}
      />
    </>
  );
};
