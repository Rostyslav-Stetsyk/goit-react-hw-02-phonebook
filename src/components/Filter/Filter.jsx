export const Filter = ({ onChange }) => {
  return (
    <form>
      <label htmlFor="find">Find contacts by name:</label>
      <input type="text" name="find" onChange={e => onChange(e.target.value)} />
    </form>
  );
};
