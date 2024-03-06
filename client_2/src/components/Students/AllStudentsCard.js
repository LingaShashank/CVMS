import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { toast } from 'react-hot-toast';
import API from '../../Hooks/Api';

const AllStudentsCard = ({ allStudents, setAllStudents }) => {
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [editedStudent, setEditedStudent] = useState({});
    const [editedName, setEditedName] = useState('');
    const [editedCourse, setEditedCourse] = useState('');
    const [editedCGPA, setEditedCGPA] = useState('');
    const [editedMobileNumber, setEditedMobileNumber] = useState('');
    const [editedEmail, setEditedEmail] = useState('');

    const handleEditDialogOpen = (student) => {
        setEditedStudent(student);
        setEditedName(student.name);
        setEditedCourse(student.course);
        setEditedCGPA(student.cgpa);
        setEditedMobileNumber(student.mobilenumber);
        setEditedEmail(student.mail);
        setIsEditDialogOpen(true);
    };

    const handleEditDialogClose = () => {
        setIsEditDialogOpen(false);
    };

    const handleEditSubmit = async () => {
        try {
            // Send a PUT request to update the student details
            await API.put(`http://localhost:3500/students/${editedStudent.ID}`, {
                name: editedName,
                course: editedCourse,
                cgpa: editedCGPA,
                mobilenumber: editedMobileNumber,
                mail: editedEmail
            });
            // Update the list of students with the updated student details
            const updatedStudents = allStudents.map(student =>
                student.ID === editedStudent.ID ? { ...student, name: editedName, course: editedCourse, cgpa: editedCGPA, mobilenumber: editedMobileNumber, mail: editedEmail } : student
            );
            setAllStudents(updatedStudents);
            setIsEditDialogOpen(false);
            toast.success("Student details updated successfully!");
        } catch (error) {
            console.error('Error updating student:', error);
            toast.error("Error updating student details");
        }
    };

    const deleteById = async (id) => {
        try {
            // Send a DELETE request to the server to delete the student with the given ID
            await API.delete(`http://localhost:3500/students/${id}`);
            // If the request is successful, remove the student from the list
            setAllStudents(allStudents.filter(student => student.ID !== id));
        } catch (error) {
            console.error('Error deleting student:', error);
        }
    }

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', paddingLeft: '5%' }}>
            {allStudents.map((student, index) => (
                <Card key={index} sx={{ maxWidth: 345 }} style={{backgroundColor: "lightblue"}}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {student.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                ID: {student.ID}<br />
                                Course: {student.course}<br />
                                CGPA: {student.cgpa}<br />
                                Mobile Number: {student.mobilenumber}<br />
                                Email: {student.mail}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => deleteById(student.ID)}>
                            Delete
                        </Button>
                        <Button size="small" color="primary" onClick={() => handleEditDialogOpen(student)}>
                            Edit
                        </Button>
                    </CardActions>
                </Card>
            ))}
            <Dialog open={isEditDialogOpen} onClose={handleEditDialogClose}>
                <DialogTitle>Edit Student Details</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="normal"
                        label="Name"
                        fullWidth
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        label="Course"
                        fullWidth
                        value={editedCourse}
                        onChange={(e) => setEditedCourse(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        label="CGPA"
                        fullWidth
                        value={editedCGPA}
                        onChange={(e) => setEditedCGPA(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        label="Mobile Number"
                        fullWidth
                        value={editedMobileNumber}
                        onChange={(e) => setEditedMobileNumber(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        label="Email"
                        fullWidth
                        value={editedEmail}
                        onChange={(e) => setEditedEmail(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEditDialogClose}>Cancel</Button>
                    <Button onClick={handleEditSubmit} color="primary">Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AllStudentsCard;
