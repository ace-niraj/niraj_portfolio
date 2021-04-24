import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";

import useStyles from "./style";
const Landing = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        className={classes.landing}
        direction='column'
        justify='center'
        alignItems='flex-start'
        container
      >
        <Grid item>
          <Typography color='secondary' variant='h3'>
            Hello
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.name} variant='h2'>
            I'm Ace
          </Typography>
        </Grid>
        <Grid item>
          <Typography color='secondary' variant='h3'>
            A web developer
          </Typography>
        </Grid>
        <Grid item>
          <Button variant='contained'>Continue</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Landing;
