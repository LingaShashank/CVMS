import React, { useEffect, useState } from 'react';
import AllStudentsCard from './AllStudentsCard';
import API from '../../Hooks/Api';
import toast from 'react-hot-toast'

const AllStudents = () => {
  const [allStudents, setAllStudents] = useState([]);

  const updateAllStudents = (newStudents) => {
    setAllStudents(newStudents);
};

useEffect(() => {
  API.get("http://localhost:3500/students/")
    .then((response) => {
      console.log('Success!', response.data);
      setAllStudents(response.data);
    })
    .catch((error) => {
      console.error('Error fetching students:', error);
      if (error.response && error.response.status === 401) {
        toast.error("Unauthorized: Please login first");
      } else {
        toast.error("Error fetching students");
      }
    });
}, []);
  return (
    <div>
      <h2>Students Details</h2>
      <hr></hr>
      {allStudents.length > 0 ? (
        <AllStudentsCard  allStudents={allStudents} setAllStudents={updateAllStudents} />
      ):(
        <p>Loading.........</p>
      )}
    </div>
  )
}

export default AllStudents



/*

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function AddStudent() {
    const [studentDetails, setStudentDetails] = useState({
        ID: "",
        name: "",
        course: "",
        cgpa: 0.0,
        mobilenumber: "",
        mail: "",
      });
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        const { ID, name, course, cgpa, mobilenumber, mail } = studentDetails;
        try {
          const response = await axios.post("http://localhost:3500/students/",
            {
              ID: ID,
              name: name,
              course: course,
              cgpa: cgpa,
              mobilenumber: mobilenumber,
              mail: mail
            });
    
          console.log("Student created successfully:", response.data);
          //setStudentDetails({});
          const studentDetailsString = `
            ID: ${response.data.ID}
            Name: ${response.data.name}
            Course: ${response.data.course}
            CGPA: ${response.data.cgpa}
            Mobile Number: ${response.data.mobilenumber}
            Mail: ${response.data.mail}
            `;

          alert("Student created successfully:\n\n" + studentDetailsString);
    
          toast.success("Student created successfully");

          setStudentDetails({
            ID: "",
            name: "",
            course: "",
            cgpa: 0.0,
            mobilenumber: "",
            mail: ""
          });
        }
        catch (error) {
          console.log("Error Adding Student: ", error);
          toast.error("Error Adding Student");
        }
      }

  return (
    
  );
}
*/