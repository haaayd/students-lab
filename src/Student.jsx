const Student = (props) => {
  return (
    <div>
      <h2>This is the student score and</h2>
        {props.numStudent.name}
        {props.numStudent.bio}

    </div>
    
  );
}

export default Student;