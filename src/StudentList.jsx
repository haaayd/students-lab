import Student from "./Student"

const StudentList = ({numStudents})=> {
  console.log(numStudents)
  return ( 
    <div>
        <h1>Students!!</h1>
          {numStudents.map( student => 
            <Student numStudent = {student} />

        )}

    </div>

  )
}

export default StudentList;