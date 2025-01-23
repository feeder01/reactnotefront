const PersonForm = ({ onSubmit, handleNameChange, handleNumberChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name:{" "}
        <input
          id="name"
          autoComplete="given-name"
          onChange={handleNameChange}
        />
        <br />
        number:{" "}
        <input id="number" autoComplete="tel" onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
