import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import QRCode from 'qrcode.react'; // Import QRCode component
import API from '../../Hooks/Api';

export default function StudentsQRCard() {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await API.get('http://localhost:3500/students/');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <Grid container spacing={3}>
      {students.map((student) => (
        <Grid item key={student._id} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {student.name}
              </Typography>
              <QRCode value={JSON.stringify(student)} />
              <Typography variant="body2" color="text.secondary">
                Job: {student.course}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Salary: {student.cgpa}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
