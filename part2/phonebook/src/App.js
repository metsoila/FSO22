import { useState } from 'react'
import Person from './components/Person'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if (persons.some(obj => obj.name === `${newName}`)) {
      return(alert(`${newName} is already added to phonebook`))
    }
    const nameObject = {
      name : newName
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    console.log('button clicked', event.target, 'persons:', persons)
  
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>


      <form onSubmit={addName}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person name={person.name}/>
        )}
      </ul>
    </div>
  )

}

export default App