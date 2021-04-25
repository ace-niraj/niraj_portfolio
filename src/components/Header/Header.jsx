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
import { useTheme } from "@material-ui/styles";
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
const navList = [
  { key: 1, name: "home", value: 0 },
  { key: 2, name: "about", value: 1 },
  { key: 3, name: "services", value: 2 },
  { key: 4, name: "portfolio", value: 3 },
  { key: 5, name: "contact", value: 4 },
];
const Header = () => {
  const classes = useStyles();
  const [active, setActive] = useState(0);
  const [openDrawer, setDrawer] = useState(false);
  const [appbar, setAppbar] = useState(false);

  const handleChange = (e, value) => {
    setActive(value);
  };
  const changeAppbar = () => {
    if (window.scrollY > 0) {
      setAppbar(true);
    } else {
      setAppbar(false);
    }
  };

  window.addEventListener("scroll", changeAppbar);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const tabs = (
    <Tabs
      value={active}
      onChange={handleChange}
      className={classes.tabContainer}
      indicatorColor=''
    >
      {navList.map(({ name, value, key }) => (
        <Tab
          key={key}
          className={`${classes.tab} ${
            active === value ? `${classes.tabActive}` : ""
          }`}
          label={name}
        />
      ))}
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
          {navList.map(({ name, value, key }) => (
            <ListItem
              key={key}
              className={classes.listItem}
              onClick={() => {
                setDrawer(false);
                setActive(value);
              }}
              divider
              button
            >
              <ListItemText
                disableTypography
                arial-type='centered'
                className={`${
                  active === value
                    ? `${classes.drawerActive}`
                    : `${classes.drawerText}`
                }`}
              >
                {name}
              </ListItemText>
            </ListItem>
          ))}
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
        <AppBar
          className={appbar ? `${classes.appbar}` : `${classes.appbarActive}`}
        >
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
