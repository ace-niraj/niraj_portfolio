import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import logo from "../../assets/logo-1.png";
import useStyles from "./style";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = () => {
  const classes = useStyles();
  const [active, setActive] = useState(0);
  const [openDrawer, setDrawer] = useState(false);

  const handleChange = (e, value) => {
    setActive(value);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const tabs = (
    <Tabs
      value={active}
      onChange={handleChange}
      className={classes.tabContainer}
      indicatorColor='primary'
    >
      <Tab
        className={`${classes.tab} ${
          active === 0 ? `${classes.tabActive}` : ""
        }`}
        label='Home'
      />
      <Tab
        className={`${classes.tab} ${
          active === 1 ? `${classes.tabActive}` : ""
        }`}
        label='About'
      />
      <Tab
        className={`${classes.tab} ${
          active === 2 ? `${classes.tabActive}` : ""
        }`}
        label='Services'
      />
      <Tab
        className={`${classes.tab} ${
          active === 3 ? `${classes.tabActive}` : ""
        }`}
        label='Portfolio'
      />
      <Tab
        className={`${classes.tab} ${
          active === 4 ? `${classes.tabActive}` : ""
        }`}
        label='Contact'
      />
    </Tabs>
  );
  const drawer = (
    <>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setDrawer(false)}
        onOpen={() => setDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List className={classes.list}>
          <ListItem
            className={classes.listItem}
            onClick={() => {
              setDrawer(false);
              setActive(0);
            }}
            divider
            button
          >
            <ListItemText
              disableTypography
              arial-type='centered'
              className={`${
                active === 0
                  ? `${classes.drawerActive}`
                  : `${classes.drawerText}`
              }`}
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setDrawer(false);
              setActive(1);
            }}
            divider
            button
          >
            <ListItemText
              disableTypography
              className={` ${
                active === 1
                  ? `${classes.drawerActive}`
                  : `${classes.drawerText}`
              }`}
            >
              About
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setDrawer(false);
              setActive(2);
            }}
            divider
            button
          >
            <ListItemText
              disableTypography
              className={` ${
                active === 2
                  ? `${classes.drawerActive}`
                  : `${classes.drawerText}`
              }`}
            >
              Services
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setDrawer(false);
              setActive(3);
            }}
            divider
            button
          >
            <ListItemText
              disableTypography
              className={` ${
                active === 3
                  ? `${classes.drawerActive}`
                  : `${classes.drawerText}`
              }`}
            >
              Portfolio
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setDrawer(false);
              setActive(4);
            }}
            divider
            button
          >
            <ListItemText
              disableTypography
              className={` ${
                active === 4
                  ? `${classes.drawerActive}`
                  : `${classes.drawerText}`
              }`}
            >
              Contact
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>

      <IconButton
        className={classes.drawerIcon}
        onClick={() => setDrawer(!openDrawer)}
        disableRipple
      >
        {openDrawer === false ? (
          <MenuIcon className={classes.menuIcon} />
        ) : null}
      </IconButton>
    </>
  );
  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <img className={classes.logo} src={logo} alt='logo' />
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </>
  );
};

export default Header;
