import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function Items(props) {

  return (
    <Grid>
    <Paper elevation={3} style={{margin: 1}} >
    <Card style={{height: 410, width: 300}}>
      <img src={props.img} alt="tv" height={208} width={240} style={{margin: 5}}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Add To Cart</Button>
      </CardActions>
    </Card></Paper>
</Grid>
  
  );
}
