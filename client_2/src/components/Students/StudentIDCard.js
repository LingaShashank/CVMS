import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';

const StudentIDCard = ({student}) => {
    
  return (
    <Card sx={{ maxWidth: 345 }}>
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
    </Card>
  )
}

export default StudentIDCard