import { useState } from 'react'
import Person from './components/Person'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if (persons.some(obj => obj.name === `${newName}`)) {
      return(alert(`${newName} is already added to phonebook`))
    }
    else if (persons.some(obj => obj.number === `${newNumber}`)) {
      return(alert(`${newNumber} is already added to phonebook`))
    }
    const nameObject = {
      name : newName,
      number : newNumber
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    console.log('button clicked', event.target, 'persons:', persons)
  
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter shown with
        <input
          filter={newFilter}
          onChange={handleFilterChange}/>
      </div>

      <h2>Add new</h2>

      <form onSubmit={addName}>
        <div>
          name: 
          <input 
            name={newName}
            onChange={handleNameChange}/>
        </div>
        <div>
        number:
          <input
            number={newNumber}
            onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
          <Person name={person.name} number={person.number} filter={newFilter}/>
        )}
      </div>
    </div>
  )

}

export default App