const FilteredPersonsList = ({ filteredPerson, uid }) => {
  if (filteredPerson.length === 0) {
    return;
  }
  return filteredPerson.map((person) => (
    <div key={uid.rnd()}>
      <p>
        {person.name} {person.number}
      </p>
    </div>
  ));
};
export default FilteredPersonsList;
