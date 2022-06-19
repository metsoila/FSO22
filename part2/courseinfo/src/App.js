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
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}


const App = () => {
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(course=>
        <>
          <Header name={course.name}/>
          <Course course={course}/>
        </>
      )}
    </div>
  )
}

export default App
