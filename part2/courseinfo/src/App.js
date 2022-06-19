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
      Total number of exercises: {total}
    </h4>
  )
}

const Course = ({course}) => {
  const name = course.name
  const id = course.id
  const parts = course.parts

  return (
    <>
      <Header name={name}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App
