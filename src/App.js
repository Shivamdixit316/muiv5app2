import "./App.css";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";
import { green, purple } from "@mui/material/colors";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import CreateBtn from "./CreateBtn";
import Navbar from "./Components/Navbar";
import Grid from "@mui/material/Grid";
import Leftbar from "./Components/Leftbar";
import Rightbar from "./Components/Rightbar";
import Feed from "./Components/Feed";
import Add from "./Components/Add";
import { useEffect } from "react";
const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#edf2ff",
    },
    purple: {
      main: "#9c27b0",
    },
  },
});

function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </ThemeProvider>
  );
}

export default App;
