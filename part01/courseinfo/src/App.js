const Header = (props) => {
  console.log(props)
  return (
    <>
      {props.course}
    </>
  )
}
const Part = (props) => {
  console.log("propsisaac", props)
  return (
    <>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </>
  )
}
const Content = (props) => {
  return (
    <>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </>
  )
}
const Total = (props) => {
  console.log(props)
  return (
    <>
      <p>Number of exercise {props.sum}</p>
    </>

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
  let sum = part1.exercises + part2.exercises + part3.exercises
  return (
    <div>
      <h1><Header course={course} /></h1>
      <Content part1={part1} part2={part2} part3={part3} />
      <Total sum={sum} />
    </div>
  )
}
export default App