const PersonForm = ({addName, newName, nameHandler, newNumber, numberHandler}) => {
    return (
        <form onSubmit={addName}>
            <div>
                name: 
            <input 
                name={newName}
                onChange={nameHandler}/>
            </div>
            <div>
                number:
            <input
                number={newNumber}
                onChange={numberHandler}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm