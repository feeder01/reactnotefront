const FilterPersons = ({ handlePersonFilter }) => {
  return (
    <div>
      filter shown with:{" "}
      <input id="filter" autoComplete="off" onChange={handlePersonFilter} />
    </div>
  );
};

export default FilterPersons;
