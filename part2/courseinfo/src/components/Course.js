const Header = (props) => {
    console.log(props)
    return (
      <h1>
        {props.name}
      </h1>
    )
  }
  
  
  const Content = ({parts}) => {
    
    return (
      <div>
        {parts.map(part=>
          <p>
            {part.name} {part.exercises}
          </p>
        )}
      </div>
      )
  }
  
  
  const Total = ({parts}) => {
    
    const total = parts.reduce((prev, current) => {
      console.log('Reduce:', prev, current)
      return prev + current.exercises;
    }, 0);
  
    return (
      <h4>
        total of exercises: {total}
      </h4>
    )
  }
  
  const Course = ({course}) => {
    const parts = course.parts
    return (
      <div>
        <Header name={course.name}/>
        <Content parts={parts}/>
        <Total parts={parts}/>
      </div>
    )
  }
  
export default Course