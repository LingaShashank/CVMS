import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./styles.css";


export default function UserAsCardStu({ Name, Department, CGPA  }) {
  
  return (
    <Card sx={{ maxWidth: 300, backgroundColor: 'lightblue' }} className="card">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name: {Name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Department: {Department}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            CGPA: {CGPA}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}