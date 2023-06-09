import React, { useState } from "react";
import { AppBar, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";
const useStyles = makeStyles((theme) => ({
  logoSm: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  logoLg: {
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  search: {
    width: "50vw",
    margin: "0px 180px",
  },
  icons: {
    display: "flex",
    alignItems: "center",
  },
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const showSearch = () => {};
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" sx={{ position: "fixed", top: 0 }}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.logoLg}>
            Shivam Dixit
          </Typography>
          <Typography variant="h6" className={classes.logoSm}>
            SHIVAM
          </Typography>
          <div className={classes.search}>
            <Search
              sx={{
                display: { xs: "none", lg: "block", md: "block" },
                ...(open === true && {
                  display: "block",
                  position: "relative",
                  left: { xs: "-160px", lg: "-27px" },
                  width: "300px",
                }),
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" />
              <CancelIcon
                onClick={() => setOpen(false)}
                sx={{
                  position: "relative",
                  top: "5px",
                  left: "36px",
                  ...(open === false && {
                    display: "none",
                  }),
                  display: { lg: "none", md: "none" },
                }}
              />
            </Search>
            <Button
              variant="contained"
              size="medium"
              sx={{
                position: "relative",
                left: "-148px",
                display: { xs: "block", lg: "none", md: "none" },
                cursor: "pointer",
                ...(open === true && {
                  display: "none",
                }),
              }}
              onClick={() => setOpen(true)}
            >
              Click to Search...
            </Button>
          </div>
          <div
            className={classes.icons}
            style={
              (open ? { display: "none" } : { display: "block",position: "relative", left: "42px"  }
              )
            }
          >
            <Badge
              badgeContent={4}
              color="success"
              sx={{
                position: "relative",
                top: "21px",
                left: { xs: "-388px", lg: "-14px" },
                cursor: "pointer",
                padding: "2px",
              }}
            >
              <MailIcon />
            </Badge>
            <Badge
              badgeContent={4}
              color="success"
              sx={{
                position: "relative",
                top:"22px",
                left: { xs: "-385px", lg: "-12px", padding: "2px" },
                cursor: "pointer",
              }}
            >
              <Notifications />
            </Badge>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{
                position: "relative",
                top: "-12px",
                left: { xs: "-322px", lg: "51px" },
                cursor: "pointer",
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
