import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Cart } from '../Cart';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={10}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 500,
    width: '100%',
    marginTop: 70,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    position: 'absolute',
    top: 80,
    left: 0,
    fontSize: 60,
  },
  tabPanel: {
      position: 'absolute',
      left: 100,
      right: 0,
      top: 0,
  }
}));

export default function Profile() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel className={classes.tabPanel} value={value} index={0}>
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}