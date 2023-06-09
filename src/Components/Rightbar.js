import React from "react";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  avatar: {
    cursor: "pointer",
  },
  onlineText: {
    color: "blue",
    fontSize: "20px"
  },
  galleryText:{
    color:"blue",
    marginTop: "20px",
    fontSize: "25px"
  },
  link:{
    marginTop:theme.spacing(5),
    padding:'10px',
    
  }
}));
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className="onlineText">Online Friends</Typography>
      <Stack direction="row" spacing={2}>
        <AvatarGroup max={4}>
          <Avatar
            className={classes.avatar}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
          <Avatar
            className={classes.avatar}
            alt="Travis Howard"
            src="/static/images/avatar/2.jpg"
          />
          <Avatar
            className={classes.avatar}
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
          />
          <Avatar
            className={classes.avatar}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
          <Avatar
            className={classes.avatar}
            alt="Travis Howard"
            src="/static/images/avatar/2.jpg"
          />
          <Avatar
            className={classes.avatar}
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
          />
        </AvatarGroup>
      </Stack>
      <Typography className="galleryText">Gallery</Typography>
      <div className="gallaryContainer">
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
      </div>
      <Typography className="categoryText">Categories</Typography>
      <Link href="#" className={classes.link}>Sports</Link>
      <Link href="#" className={classes.link}>Food</Link>
      <Link href="#" className={classes.link}>Movies</Link>
      <Link href="#" className={classes.link}>Science</Link>
    </Container>
  );
};

export default Rightbar;
