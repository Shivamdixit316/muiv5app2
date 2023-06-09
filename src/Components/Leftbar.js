import React from "react";
import Container from "@mui/material/Container";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import PersonIcon from "@mui/icons-material/Person";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import StoreIcon from "@mui/icons-material/Store";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import ListIcon from "@mui/icons-material/List";
import $ from 'jquery'; 

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    backgroundColor: "white",
    height: "100vh",
    color: "white",
    position: "sticky",
    top: "64px",
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(3),
  },
  text: {
    [theme.breakpoints.down("md")]: {
      display: "none",
      fontWeight: 500,
    },
    color: "black",
  },
  icon: {
    marginRight: theme.spacing(1),
    color: "black",
  },
}));
$(window).scroll(function () {
  if ($(window).scrollTop() + $(window).height() == $(document).height()) {
    $('.container').css({'overflow':'hidden'});

  }
});
const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} sx={{ cursor: "pointer" }} />
        <Typography className={classes.text} sx={{ cursor: "pointer" }}>
          HomePage
        </Typography>
      </div>
      <div className={classes.item}>
        <PersonIcon className={classes.icon} sx={{ cursor: "pointer" }} />
        <Typography className={classes.text} sx={{ cursor: "pointer" }}>
          Friends
        </Typography>
      </div>
      <div className={classes.item}>
        <ListIcon className={classes.icon} sx={{ cursor: "pointer" }} />
        <Typography className={classes.text} sx={{ cursor: "pointer" }}>
          {" "}
          Lists
        </Typography>
      </div>
      <div className={classes.item}>
        <CameraAltIcon className={classes.icon} sx={{ cursor: "pointer" }} />
        <Typography className={classes.text} sx={{ cursor: "pointer" }}>
          Camera
        </Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleIcon className={classes.icon} sx={{ cursor: "pointer" }} />
        <Typography className={classes.text} sx={{ cursor: "pointer" }}>
          Vidoes
        </Typography>
      </div>
      <div className={classes.item}>
        <PhoneIphoneIcon className={classes.icon} sx={{ cursor: "pointer" }} />
        <Typography className={classes.text} sx={{ cursor: "pointer" }}>
          Apps
        </Typography>
      </div>
      <div className={classes.item}>
        <CollectionsBookmarkIcon
          className={classes.icon}
          sx={{ cursor: "pointer" }}
        />
        <Typography className={classes.text} sx={{ cursor: "pointer" }}>
          Collections
        </Typography>
      </div>
      <div className={classes.item}>
        <StoreIcon className={classes.icon} sx={{ cursor: "pointer" }} />
        <Typography className={classes.text} sx={{ cursor: "pointer" }}>
          Market Place
        </Typography>
      </div>
      <div className={classes.item}>
        <SettingsIcon className={classes.icon} sx={{ cursor: "pointer" }} />
        <Typography className={classes.text} sx={{ cursor: "pointer" }}>
          Settings{" "}
        </Typography>
      </div>
      <div className={classes.item}>
        <LogoutIcon className={classes.icon} sx={{ cursor: "pointer" }} />
        <Typography className={classes.text} sx={{ cursor: "pointer" }}>
          Logout{" "}
        </Typography>
      </div>
    </Container>
  );
};

export default Leftbar;
