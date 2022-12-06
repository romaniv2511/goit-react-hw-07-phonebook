import PropTypes from 'prop-types';

export const Filter = ({ onChange, value }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        name="filterByName"
        type="text"
        onChange={e => onChange(e.target.value)}
        value={value}
      />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
