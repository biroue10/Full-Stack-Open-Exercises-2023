import { useState } from 'react'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Arto Hellas' },
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  const addNote = (event) => {
    event.preventDefault()
    // Check if newName already exists in persons array
    const exists = persons.map(person => person.name).includes(newName);
    if (exists) {
      alert('Name already exists!');
      return;
    }
    const noteObject = {
      name: newName
    }
    setPersons(persons.concat(noteObject))
    setNewName('')
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    < div >
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit" onClick={addNote}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((nom, index) => (<div key={index}> {nom.name}</div>))}
    </div >
  )
}
export default App