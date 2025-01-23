import phoneBookSvc from "../services/phoneBookSvc";

const ShowPersons = ({ uid, persons, setPersons }) => {
  return persons.map((person) => (
    <div key={uid.rnd()}>
      <p>
        {person.name} {person.number}{" "}
        <button
          onClick={() => {
            if (window.confirm(`Delete ${person.name}?`)) {
              phoneBookSvc.deleteEntry(person.id).then(() => {
                setPersons(persons.filter((p) => p.id !== person.id));
              });
            }
          }}
        >
          Delete
        </button>
      </p>
    </div>
  ));
};

export default ShowPersons;
