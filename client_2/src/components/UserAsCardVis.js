import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



export default function UserAsCardVis({ Id, Name, Date  }) {
  
  return (
    <Card sx={{ maxWidth: 300, backgroundColor: 'lightblue' }} className="card">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name: {Name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Id: {Id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Date: {Date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}