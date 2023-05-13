import axios from 'axios'
import { useState, useEffect } from 'react'
//Create a useEffect and fetch data from our Json Server
//create our main header component
const Header = ({ text }) => {
  return (
    <>
      <h1><u>{text}</u></h1>
    </>
  )
}
//Create our second header component
const SubHeader = ({ text }) => {
  return (
    <>
      <h2><u>{text}</u></h2>
    </>
  )
}
//Create the filter component
const Filter = ({ newSearchName, handleSearchName }) => {
  return (
    <>
      Filter Shown With: <input value={newSearchName} onChange={handleSearchName} />
    </>
  )
}
//Create a component responsible for rendering form element use to perform input action
const PersonForm = ({ addName, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (
    <form onSubmit={addName}>
      <div>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td> <input value={newName} onChange={handleNameChange} placeholder="Name..." /></td>
            </tr>
            <tr>
              <td>Number:</td>
              <td><input value={newNumber} onChange={handleNumberChange} placeholder="Number..." /></td>
            </tr>
            <tr>
              <td style={{ textAlign: 'center', verticalAlign: 'middle' }} colSpan={2}><button type="submit" onClick={addName}>add</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  )
}
const Persons = ({ personsToShow }) => (
  <>
    {personsToShow.map(person => (
      <div key={person.name}>
        {person.name} {person.number}{" "}
      </div>
    ))}
  </>
)
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newSearchName, setNewSearchName] = useState("")
  const [newNumber, setNewNumber] = useState('')
  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promises fullfiled')
        setPersons(response.data)
      })
  }
  useEffect(hook, [])
  const addName = (event) => {
    event.preventDefault()
    // Check if newName already exists in persons array
    const exists = persons.map(person => person.name).includes(newName);
    if (exists) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const noteObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(noteObject))
    setNewName('')
    setNewNumber('')
    //we are going to add element to our json server using axios with post method
    axios
      .post('http://localhost:3001/persons', noteObject)
      .then(response => {
        console.log('element has been sent succeffuly to the json server')
      })

  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchName = event => {
    setNewSearchName(event.target.value)
  }
  const personsToShow =
    !newSearchName || newSearchName === ""
      ? persons
      : persons.filter(person =>
        person.name.toLowerCase().includes(newSearchName.toLowerCase())
      )
  return (
    < div >
      <Header text='PhoneBook Service' />
      <Filter
        newSearchName={newSearchName}
        handleSearchName={handleSearchName}
      />
      <SubHeader text="New Entry" />
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        personsToShow={personsToShow}
        persons={persons}
        setPersons={setPersons}
      />
    </div >
  )
}
export default App