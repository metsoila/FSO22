const Person = ({ name, number }) => {
    console.log('name:', name, ' number:', number)
    return (
        <p>
            {name} {number}
        </p>
    )
}

export default Person