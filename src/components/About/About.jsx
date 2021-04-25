import { Button, Grid, Typography } from "@material-ui/core";
import { Toys } from "@material-ui/icons";
import React from "react";
import myImg from "../../assets/port.jpg";
import useStyles from "./style";
const About = () => {
  const classes = useStyles();
  return (
    <section className={classes.about}>
      <Grid justify='center' className={classes.container} container>
        <Grid xs={10} md={4} item>
          <Typography className={classes.title} variant='h3'>
            About me
          </Typography>
          <img className={classes.myImg} src={myImg} alt='my-photo' />
        </Grid>
        <Grid xs={0} md={1} item></Grid>
        <Grid xs={10} md={5} className={classes.aboutText} item>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            ipsam!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum, ipsam!Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptatum, ipsam!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum, ipsam!
          </Typography>

          <Button
            variant='outlined'
            color='primary'
            className={classes.aboutBtn}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
