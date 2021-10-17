import React from "react";
// import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Test from "./pages/Test";
import Tester from "./pages/Tester";

// import TabPanel from "@material-ui/lab/TabPanel";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  console.log("Children: ", children);
  console.log("Value: ", value);
  console.log("Index: ", index);
  console.log("Other: ", other);
  return (
    <div
      // role="tabpanel"
      hidden={value !== index}
      // id={`simple-tabpanel-${index}`}
      // aria-labelledby={`simple-tab-${index}`}
      // {...other}
    >
      {value === index && (
        <Box>
          {/* <Typography> */}
          {children}
          {/* </Typography> */}
        </Box>
      )}
    </div>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

const useStyles = makeStyles((theme) => ({}));

const App = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <AppBar position="static">
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
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
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
