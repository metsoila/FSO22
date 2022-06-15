const Header = (props) => {
  console.log(props)
  return (
    <h1>
      {props.name}
    </h1>
  )
}

const Part = ({name, exercises}) =>{
  console.log(name, exercises)
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Content = ({parts}) => {
  console.log(parts)
  const [p1,p2,p3] = parts
  return (
    <div>
      <Part name={p1.name} exercises={p1.exercises}/>
      <Part name={p2.name} exercises={p2.exercises}/>
      <Part name={p3.name} exercises={p3.exercises}/>
    </div>
    )
}


const Total = ({parts}) => {
  const total = parts.reduce((acc, obj) => {
    console.log('Reduce:', acc, obj)
    return acc + obj.exercises;
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
