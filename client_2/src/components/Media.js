import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StudentImage from './1.jpg'

export default function ImgMediaCard() {
  return (
    <center>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Image 1.jpg"
        height="100%"
        image= { StudentImage }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Linga Shashank
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Student of KL University 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ID: 2200090053 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><a href='https://www.linkedin.com/in/shashank-linga-6249a0252/'>Linkedin</a></Button>
        <Button size="small"><a href='https://www.stopstalk.com/user/profile/klu_2200090053'>Stop Stalk</a></Button>
      </CardActions>
    </Card>
    </center>

  );
}