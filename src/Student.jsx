import Score from "./Score"

const Student = ({numStudent}) => {
  return (
    <div>
      <h2>This is the student score and</h2>
      {numStudent.name}
      {numStudent.bio}
      {numStudent.scores.map(score => 
        <Score numScore={score} />

        )}

    </div>
    
  )
}

export default Student;