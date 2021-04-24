import React from "react";
import useStyles from "./style";
import logo from "../../assets/logo-1.png";
import { useTheme } from "@material-ui/styles";
import { Grid, useMediaQuery } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";

const Footer = () => {
  const theme = useTheme();
  const classes = useStyles();
  const match = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <>
      <footer className={classes.footer}>
        <Grid
          container
          direction={match ? "column" : "row"}
          justify={match ? "center" : "space-between"}
          alignItems='center'
        >
          <Grid className={match ? `${classes.gridItem}` : ""} item>
            <img className={classes.logo} src={logo} alt='footer logo' />
          </Grid>
          <Grid
            className={
              match
                ? `${classes.gridItem} ${classes.copyright}`
                : `${classes.copyright}`
            }
            item
          >
            Copyright &copy; 2021
          </Grid>
          <Grid
            className={match ? `${classes.gridItem}` : `${classes.socialIcons}`}
            item
          >
            <Grid container spacing={3}>
              <Grid className={classes.socialIcon} item>
                <FacebookIcon />
              </Grid>
              <Grid className={classes.socialIcon} item>
                <LinkedInIcon />
              </Grid>
              <Grid className={classes.socialIcon} item>
                <TelegramIcon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </footer>
    </>
  );
};

export default Footer;
