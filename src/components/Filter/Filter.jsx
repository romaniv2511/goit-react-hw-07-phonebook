export const Filter = ({ onChange, value }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        name="filterByName"
        type="text"
        onChange={onChange}
        value={value}
      />
    </>
  );
};
