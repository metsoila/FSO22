import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'



const App = () => {
  const [persons, setPersons] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  useEffect(hook, [])

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

      <Filter filter={newFilter} handler={handleFilterChange}/>

      <h2>Add new</h2>

      <PersonForm addName={addName} newName={newName} nameHandler={handleNameChange}
        newNumber={newNumber} numberHandler={handleNumberChange}/>
      
      <h2>Numbers</h2>

      <Persons persons={persons} newFilter={newFilter}/>

    </div>
  )

}
//npx json-server --port=3001 --watch db.json

export default App