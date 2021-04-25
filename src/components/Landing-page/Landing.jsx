import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";

import useStyles from "./style";
const Landing = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.landing} alignItems='center' container>
        <Grid xs={1} item></Grid>
        <Grid item>
          <Grid
            direction='column'
            justify='center'
            alignItems='flex-start'
            container
            spacing={1}
          >
            <Grid item>
              <Typography
                className={classes.gridText}
                color='secondary'
                variant='h3'
              >
                Hello
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                className={classes.gridText}
                className={classes.name}
                variant='h3'
              >
                I'm Niraj Khatri
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                className={classes.gridText}
                color='secondary'
                variant='h3'
              >
                A web developer
              </Typography>
            </Grid>
            <Grid item>
              <Button
                className={classes.landingBtn}
                color='secondary'
                variant='outlined'
                size='large'
              >
                Watch More
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={1} item></Grid>
      </Grid>
    </>
  );
};

export default Landing;
