import React from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/styles";
import Post from "./Post";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
  },
}));
const Feed = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>

    </Container>
  );
};

export default Feed;
