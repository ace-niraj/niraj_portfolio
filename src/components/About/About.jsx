import { Button, Grid, Typography } from "@material-ui/core";

import React from "react";
import myImg from "../../assets/my-pic.jpg";
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
          <Typography class={classes.myName}>
            Niraj Khatri - a web developer
          </Typography>
          <Typography class={classes.myInfo}>
            I am a self-taught MERN Stack developer. I enjoy solving complex
            problems and the skills I have acquired over the years have led me
            to develop many web site and web applications along with few mobile
            application.
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
