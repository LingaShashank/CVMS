import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const Appointment = () => {
  const [appointmentDetails, setAppointmentDetails] = useState({
    nameOfParent:'',
    gender:'',
    age:'',
    email:'',
    mobile:'',
    studentId:'',
    studentName:'',
    studentDepartment:'',
    purposeOfVisit:'',
    date:'',
    time:'',
    proof:''
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission
  };

  const handleInputChange = (e) => {
    setAppointmentDetails({
      ...appointmentDetails,
      [e.target.name]: e.target.value,
    });
  };

  const list_num = [40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,
                    68,69,70,71,72,73,74,75,76,77,78,79,80]

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto', backgroundColor: 'white' }}>
      <Typography variant="h5" gutterBottom style={{ color: '' }}>
        Appointment Form
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Parent Information */}
        <TextField 
          id="nameOfParent"
          label="Name of Parent"
          name="nameOfParent"
          autoComplete="nameOfParent"
          autoFocus
          onChange={handleInputChange}
          
        />
        
        {/* Gender Dropdown */}
        <FormControl fullWidth margin="normal" required>
          <InputLabel>Gender</InputLabel>
          <Select 
            label="Gender"
            name="gender"
            autoComplete="gender"
            id="gender"
            autoFocus
            onChange={handleInputChange}
          >
            <MenuItem value="male" style={{ color: 'black' }}>Male</MenuItem>
            <MenuItem value="female" style={{ color: 'black' }}>Female</MenuItem>
          </Select>
        </FormControl>
        
        <FormControl fullWidth margin="normal" required>
            <InputLabel label="Age"
            >Age</InputLabel><br></br><br></br>
            <select label="Age" name="age"
            autoComplete="age"
            id="age"
            autoFocus
            onChange={handleInputChange}>
                {list_num.map((list) => (
                    <option key={list}>{list}</option>
                ))}
            </select>
        </FormControl>

        
        <TextField label="Email" type="mail" fullWidth margin="normal"
        name="email"
        autoComplete="email"
        id="email"
        autoFocus
        onChange={handleInputChange}
        />

        <TextField label="Mobile" type="tel" fullWidth margin="normal" required 
        name="mobile"
        autoComplete="mobile"
        id="mobile"
        autoFocus
        onChange={handleInputChange}
        />

        {/* Student Information */}
        <TextField label="Student ID" fullWidth margin="normal" required 
        name="studentId"
        autoComplete="studentId"
        id="studentId"
        autoFocus
        onChange={handleInputChange}
        />
        <TextField label="Student Name" fullWidth margin="normal" required 
        name="studentName"
        autoComplete="studentName"
        id="studentName"
        autoFocus
        onChange={handleInputChange}
        />
        
        {/* Department Dropdown */}
        <FormControl fullWidth margin="normal" required>
          <InputLabel>Department</InputLabel>
          <Select label="Department" name="studentDepartment"
        autoComplete="studentDepartment"
        id="studentDepartment"
        autoFocus
        onChange={handleInputChange}>
            <MenuItem value="CSE-R" style={{ color: 'red' }}>CSE-R</MenuItem>
            <MenuItem value="CSE-H" style={{ color: 'green' }}>CSE-H</MenuItem>
            <MenuItem value="CS&IT" style={{ color: 'purple' }}>CS&IT</MenuItem>
            <MenuItem value="AIDS" style={{ color: 'orange' }}>AIDS</MenuItem>
            <MenuItem value="ECE" style={{ color: 'brown' }}>ECE</MenuItem>
            <MenuItem value="MECH" style={{ color: 'teal' }}>MECH</MenuItem>
            <MenuItem value="CIVIL" style={{ color: 'indigo' }}>CIVIL</MenuItem>
            <MenuItem value="EEE" style={{ color: 'cyan' }}>EEE</MenuItem>
            <MenuItem value="IOT" style={{ color: 'maroon' }}>IOT</MenuItem>
          </Select>
        </FormControl>
        
        {/* Visit Details */}
        <TextField label="Purpose of Visit" fullWidth margin="normal" required 
        name="purposeOfVisit"
        autoComplete="purposeOfVisit"
        id="purposeOfVisit"
        autoFocus
        onChange={handleInputChange}
        />
        <TextField type="date" fullWidth margin="normal" required 
        name="date"
        autoComplete="date"
        id="date"
        autoFocus
        onChange={handleInputChange}
        />
        <TextField type="time" fullWidth margin="normal" required
        name="time"
        autoComplete="time"
        id="time"
        autoFocus
        onChange={handleInputChange} 
        />

        {/* Proof */}
        <input
          type="file"
          accept=".pdf,image/gif, image/jpeg, image/jpg"
          style={{ marginTop: '16px', padding: '8px', backgroundColor: '#ccc', border: 'none', borderRadius: '4px' }}
          name="proof"
            autoComplete="proof"
            id="proof"
            autoFocus
            onChange={handleInputChange}
        />

        {/* Submit Button */}
        <Box mt={2}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Appointment;