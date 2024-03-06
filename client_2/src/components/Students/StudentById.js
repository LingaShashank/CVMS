import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StudentIDCard from './StudentIDCard';
import API from '../../Hooks/Api';

const StudentById = () => {
  const [student, setStudent] = useState({});
  const [id, setId] = useState(''); // State to store the ID value

  const handleIdSubmit = async () => { // Remove id parameter from the function declaration
    try {
      const response = await API.get(`http://localhost:3500/students/${id}`);
      setStudent(response.data);
      console.log(response.data);
      toast.success("Id is Found");
    } catch (error) {
      console.log(error);
      toast.error("Error in ID");
    }
  }

  return (
    <div>
      <Typography component="h1" variant="h5">
        Get Student By ID:
      </Typography>
      <hr></hr>
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <TextField
            autoComplete="given-id"
            name="ID"
            required
            id="id"
            label="Student ID"
            autoFocus
            value={id}
            onChange={(e) => setId(e.target.value)}
            sx={{ textAlign: 'center' }} // Add sx prop to center-align the input field
          />
          </Grid>
        </Grid>
        <Button
          type="button" // Change the type to "button" to prevent form submission
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleIdSubmit} // Pass the handleIdSubmit function to onClick event
        >
          Submit
        </Button>
      </Box>
      {/* Display the student data if an ID has been submitted */}
      { !id ? (
        <p>Please provide Student ID</p>
      ):(
        <StudentIDCard student={student} />
      )}
    </div>
  )
}

export default StudentById;
