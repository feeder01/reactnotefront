import { useState, useEffect } from "react";
import ShortUniqueId from "short-unique-id";
import PersonForm from "./components/PersonForm";
import FilterPersons from "./components/FilterPersons";
import FilteredPersonsList from "./components/FilteredPersonsList";
import phoneBookSvc from "./services/phonebooksvc";
import ShowPersons from "./components/ShowPersons";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const uid = new ShortUniqueId({ length: 5 });
  const [filteredPerson, setFilteredPerson] = useState([]);

  useEffect(() => {
    phoneBookSvc.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    if (newName === undefined || !newName.trim().length) {
      alert("Please provide name");
      return;
    }

    if (newNumber === undefined || !newNumber.trim().length) {
      alert("Please provide number");
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber,
    };

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    phoneBookSvc.post(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
    });
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handlePersonFilter = (event) => {
    const filter = event.target.value;
    const filteredPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(filter.toLowerCase()),
    );
    console.log(filteredPersons);
    setFilteredPerson(filteredPersons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterPersons handlePersonFilter={handlePersonFilter} />
      <FilteredPersonsList filteredPerson={filteredPerson} uid={uid} />
      <h2>add a new</h2>

      <PersonForm
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        onSubmit={onSubmit}
      />
      <h2>Numbers</h2>
      <div>
        <ShowPersons uid={uid} persons={persons} setPersons={setPersons} />
      </div>
    </div>
  );
};

export default App;
