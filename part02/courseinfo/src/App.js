const Course = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course.name}</h1>
      <div>
        {props.course.parts.map(note => <p key={note.id}>{note.name} {note.exercises}</p>)}
      </div>
    </>
  )
}
const App = () => {

  const course = {
    id: 1,
    name: 'Half Stack application development',
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

  return <Course course={course} />
}

export default App