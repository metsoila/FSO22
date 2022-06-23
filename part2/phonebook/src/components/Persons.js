
const Person = ({ name, number, filter }) => {
    console.log('name:', name, ' number:', number)
    filter = filter.toLowerCase()
    if (name.toLowerCase().includes(filter) || number.includes(filter)) {
        console.log('Filtered and filter:', name, filter)
        //If number or text has filter inside ofit, person is shown
        return (
            <p>
                {name} {number}
            </p>
        )
    }
}

const Persons = ({persons, newFilter}) => {
   
   return (
        <div>
            {persons.map(person =>
            <Person name={person.name} number={person.number} filter={newFilter}/>
            )}
        </div>
   )
}

export default Persons