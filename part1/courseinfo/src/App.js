const Header = (props) => {
  return (
    <h1>
      {props.name}
    </h1>
  )
}

const Part = ({content, exercises}) =>{
  return (
    <p>
      {content} {exercises}
    </p>
  )
}

const Content = ({course}) => {
  const [p1, p2, p3] = course
  return (
    <div>
      <Part content={p1.content} exercises={p1.exercises}/>
      <Part content={p2.content} exercises={p2.exercises}/>
      <Part content={p3.content} exercises={p3.exercises}/>
    </div>
    )
}


const Total = ({course}) => {
  const [p1,p2,p3] = course
  return (
    <p>
      Total number of exercises: {p1.exercises + p2.exercises + p3.exercises}
    </p>
  )
}

const App = () => {
  const coursename = 'Half Stack application development'
  const course = [
      {
        content : 'Fundamentals of React',
        exercises : 10
      },
      {
        content : 'Using props to pass data',
        exercises : 7
      },
      {
        content : 'State of a component',
        exercises : 14
      }
    ]

  return (
    <div>
      <Header name={coursename} />
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App
