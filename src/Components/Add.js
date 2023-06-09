import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    top: "10px",
    left: "1305px",
  },
  container: {
    width: 10,
    height: 10,
    backgroundColor: "white",
  },
  item1: {
    marginRight: "-15px",
    marginLeft: "18px",
  },
  item3: {
    position: "relative",
    top: "49px",
  },
  item4: {
    margin: "52px auto",
  },
  item5: {
    position: "relative",
    top: -"42px",
  },
}));

const Add = () => {
  const [open2, setOpen2] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClick = () => {
    setOpen2(true);
  };
  const handleClose2 = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen2(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    height: "510px",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    p: 4,
  };

  const action = (
    <React.Fragment>
      <Button color="primary" size="small" onClick={handleClose2}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose2}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      {" "}
      <Tooltip title="Add">
        <IconButton size="large" className={classes.fab}>
          <AddCircleOutlinedIcon
            color="primary"
            fontSize="large"
            onClick={handleOpen}
          />
        </IconButton>
      </Tooltip>{" "}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={classes.item1}>
            <TextField
              id="standard-basic"
              label="Title"
              variant="standard"
              sx={{ width: "100%", margin: "-17px" }}
            />
          </div>
          <div className={classes.item2}>
            <TextField
              sx={{ marginTop: "20px", width: "100%", height: "70px" }}
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              defaultValue="Enter Description"
            />
          </div>
          <div className={classes.item3}>
            <TextField
              id="outlined-select-currency"
              select
              label="Visiblity"
              helperText="Please select your Visiblity"
              sx={{ marginTop: "10px" }}
            >
              <MenuItem value="Public">Public</MenuItem>
              <MenuItem value="Private">Private</MenuItem>
              <MenuItem value="Unlisted">Unlisted</MenuItem>
            </TextField>
          </div>

          <div className={classes.item4}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Who can comment
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Everybody"
                  control={<Radio />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="No body"
                  control={<Radio />}
                  label="No body"
                />
                <FormControlLabel
                  value="Custom"
                  control={<Radio />}
                  label="Custom(Premium)"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className={classes.item5}>
            <Button
              variant="outlined"
              onClick={handleClick}
             
            >
              Create
            </Button>
            <Button variant="outlined" sx={{ margin: "1px 11px" }} onClick={handleClose}>
              Cancel
            </Button>
            <Snackbar
              open={open2}
              autoHideDuration={6000}
              onClose={handleClose2}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              message="Created success"
              action={action}
            />
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Add;
