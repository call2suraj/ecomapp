import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "../styles/items.scss";

export default function Items(props) {
    // console.log(props.data)

    return (
        <Grid>
            <Paper elevation={3} style={{ margin: 1 }} >
                <Card className='card'>
                    <img src={props.img} alt="tv" height={208} width={240} className='margin' />
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
