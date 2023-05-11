import { useState } from 'react'
const StaticticLine = (props) => {
  return (
    <>
      <h1>give feedback</h1>
      <table>
        <tbody>
          <tr><td>{props.bien}</td><td>{props.good}</td></tr>
          <tr><td>{props.neutre}</td><td>{props.neutral}</td></tr>
          <tr><td>{props.mauvais}</td><td>{props.bad}</td></tr>
          <tr><td>{props.tous}</td><td>{(props.good + props.bad + props.neutral)}</td></tr>
          <tr><td>{props.moyenne}</td><td>{(props.good + props.bad + props.neutral) / 3}</td></tr>
          <tr><td>{props.positif}</td><td>{(props.good * 10) / 100}%</td></tr>
        </tbody>
      </table>
    </>
  )
}
const Button = (props) => {
  return (
    <>
      <button onClick={props.fonction}>{props.text}</button>
    </>
  )
}
const Statictics = (props) => {
  if (props.bad > 0 || props.neutral > 0 || props.good > 0) {
    return (
      <>
        <StaticticLine
          bien="Good"
          good={props.good}
          neutre="Neutral"
          neutral={props.neutral}
          mauvais="Bad" bad={props.bad}
          tous="All"
          moyenne="Average"
          positif="Positive"
        />
      </>
    )
  }
  return (
    <>
      <h1>give feedback</h1>
      <p>No feedback given</p>
    </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <Button text="Good" fonction={() => setGood(good + 1)} />
      <Button text="Neutral" fonction={() => setNeutral(neutral + 1)} />
      <Button text="Bad" fonction={() => setBad(bad + 1)} />
      <h2>Statistics</h2>
      <Statictics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
export default App