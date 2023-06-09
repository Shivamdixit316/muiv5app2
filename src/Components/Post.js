import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  card:{
    marginBottom:theme.spacing(5)
  },
  media: {
    height: 250,
  },
}));
const Post = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          title="My post"
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5">My firts Post</Typography>
          <Typography gutterBottom
            variant="body1
          "
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga enim
            debitis maxime nesciunt, odit eveniet? Voluptates maiores nemo
            aliquid! Voluptatem praesentium aspernatur veniam architecto,
            possimus repudiandae dolor placeat expedita recusandae!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">Share</Button>
          <Button size="small" color="primary">Learn more</Button>

        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
