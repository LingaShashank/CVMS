import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



export default function ActionAreaCard({ EmpId, EmpName, Designation  }) {
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
    <Card sx={{ maxWidth: '100%' }} class="card" style={{ backgroundColor: 'lightblue' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ID:{EmpId}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Name:{EmpName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Designation:{Designation}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    
  );
}