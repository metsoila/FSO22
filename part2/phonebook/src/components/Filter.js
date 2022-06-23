const Filter = ({filter, handler}) => {
    return (
        <div>
            filter shown with
            <input
            filter={filter}
            onChange={handler}/>
        </div>

    )
}

export default Filter