import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
export default function MediaCard({title,subtitle,img}) {
  return (
    <Card sx={{ maxWidth: 250,border:"none",boxShadow:"none"}}>
      <CardMedia
        sx={{ height: 130 }}
        image={img}
        title="green iguana"
      />
      <CardContent  sx={{ height: 110 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "1.2rem" }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {subtitle}
        </Typography>
      </CardContent>
      <CardActions>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Typography  sx={{ fontSize: "0.8rem" }} variant="body2" color="text.secondary">
         4.9(120 Reviews)
        </Typography>
      </CardActions>
    </Card>
  );
}
