import { useState } from 'react'

const Statistics = ({Stats}) => {
  console.log(Stats)
  const [good, neutral, bad, all] = Stats

  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
  <div>

    <div>
      <p> good {good}</p>
      <p> neutral {neutral}</p>
      <p> bad {bad}</p>
      <p> all {all} </p>
      <p> average {(good - bad)/all}</p>
      <p> positive {100*good/all} %</p>
    </div>
  </div>

  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const statistics = [good, neutral, bad, all]

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h1> give feedback </h1>

      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>

      <h1> statistics </h1>
      <Statistics Stats={statistics}/>
    </div>
  )
}

export default App