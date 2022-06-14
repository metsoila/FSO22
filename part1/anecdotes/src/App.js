import { useState } from 'react'

const Button =({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

//function from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//Example: if 'max' is 4, then returned int will be 0, 1, 2 or 3. 
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  console.log(anecdotes)
   
  const [selected, setSelected] = useState(0)

  //Random integer called between {0, list length - 1)} as index. 
  const handleNextClick = () => {
    setSelected(getRandomInt(anecdotes.length))
  }

  console.log('Index: ', selected)
  return (
    <div>
      <p>{anecdotes[selected]}</p>

      <Button handleClick={handleNextClick} text='next anecdote'/>

    </div>
  )
}

export default App