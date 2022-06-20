const Person = ({ name }) => {
    console.log('name:', name)
    return (
        <p>
            {name}
        </p>
    )
}

export default Person