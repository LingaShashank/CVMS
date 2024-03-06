import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./styles.css";


export default function ActionAreaCard({name,purpose,type,dateofvisit }) {
  
  return (
    <Card sx={{ maxWidth: '25%' }} class="card" style={{backgroundColor:'blueviolet'}}>
      <CardActionArea>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Type:{type}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Name:{name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Purpose:{purpose}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Date:{dateofvisit}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}