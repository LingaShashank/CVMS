import React, {useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {toast} from 'react-hot-toast';
import API from '../../Hooks/Api';
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
          const response = await API.post("http://localhost:3500/students/",
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
          if (error.response && error.response.status === 401) {
              toast.error("Unauthorized: Please login first");
          } else {
              toast.error("Error Adding Student");
          }
      }
      }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Add Student 
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="ID"
                    label="Student ID"
                    value={studentDetails.ID}
                    onChange={(event) => {
                        setStudentDetails({...studentDetails,ID:  event.target.value})
                    }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    value={studentDetails.name}
                    onChange={(event) => {
                        setStudentDetails({...studentDetails,name:  event.target.value})
                    }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="course"
                    label="Course"
                    value={studentDetails.course}
                    onChange={(event) => {
                        setStudentDetails({...studentDetails,course:  event.target.value})
                    }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="cgpa"
                        label="CGPA"
                        type="number" // Set input type to "number"
                        value={studentDetails.cgpa}
                        onChange={(event) => {
                            setStudentDetails({...studentDetails, cgpa: event.target.value});
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="mobilenumber"
                        label="Mobile Number"
                        value={studentDetails.mobilenumber}
                        onChange={(event) => {
                            setStudentDetails({...studentDetails, mobilenumber: event.target.value})
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="mail"
                        label="Mail"
                        value={studentDetails.mail}
                        onChange={(event) => {
                            setStudentDetails({...studentDetails, mail: event.target.value})
                        }}
                    />
                </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Student
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}