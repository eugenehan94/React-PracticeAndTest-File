import React from "react";
// import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Slide from "@material-ui/core/Slide";
import Test from "./pages/Test";
import Tester from "./pages/Tester";
import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
// import TabPanel from "@material-ui/lab/TabPanel";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  console.log("Children: ", children);
  console.log("Value: ", value);
  console.log("Index: ", index);
  console.log("Other: ", other);
  return <div>{value === index && <Box>{children}</Box>}</div>;
}

const useStyles = makeStyles((theme) => ({
  tabWrapper: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  linkSmallWrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100%",
    backgroundColor: "#212121",
    zIndex: "999",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(true);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <AppBar position="static">
        <Typography> Hello</Typography>
        <div className={classes.tabWrapper}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab
              label="Item One"
              // {...a11yProps(0)}
            />
            <Tab
              label="Tester"
              //  {...a11yProps(1)}
            />
            <Tab
              label="Test"
              //  {...a11yProps(2)}
            />
          </Tabs>
        </div>
      </AppBar>

      <Slide direction="right" in={open} mountOnEnter unmountOnExit>
        <div className={classes.linkSmallWrapper}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab
              label="Item One"
              onClick={() => setOpen(false)}
              // {...a11yProps(0)}
            />
            <Tab
              label="Tester"
              onClick={() => setOpen(false)}
              //  {...a11yProps(1)}
            />
            <Tab
              label="Test"
              onClick={() => setOpen(false)}
              //  {...a11yProps(2)}
            />
          </Tabs>
        </div>
      </Slide>

      <TabPanel value={value} index={0}>
        Item One
        <h1>Random Stuff</h1>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Tester />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Test />
      </TabPanel>
    </div>
  );
};

export default App;
