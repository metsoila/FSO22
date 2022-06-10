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

const Content = ({p1, p2, p3}) => {
  console.log(p1, p2, p3)
  return (
    <div>
      <Part name={p1.name} exercises={p1.exercises}/>
      <Part name={p2.name} exercises={p2.exercises}/>
      <Part name={p3.name} exercises={p3.exercises}/>
    </div>
    )
}


const Total = ({exercises}) => {
  console.log(exercises)
  const [p1,p2,p3] = exercises
  return (
    <p>
      Total number of exercises: {p1 + p2 + p3}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name={course} />
      <Content p1={part1} p2={part2} p3={part3} />
      <Total exercises={[part1.exercises, part2.exercises, part3.exercises]}/>
    </div>
  )
}

export default App
