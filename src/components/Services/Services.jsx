import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import cardImg from "../../assets/port.jpg";
const Services = () => {
  const classes = useStyles();
  return (
    <section id='#services' className={classes.services}>
      <Grid container>
        <Grid xs={1} item />
        <Grid item>
          <Typography className={classes.serviceText} variant='h3'>
            Services
          </Typography>
        </Grid>
        <Grid xs={1} item />
      </Grid>
      <Grid container>
        <Grid xs={1} item />
        <Grid xs={10} item>
          <Grid spacing={4} container>
            <Grid xs={12} md={4} item>
              <Card variant='outlined'>
                <CardActionArea>
                  <CardMedia
                    classname={classes.cardImg}
                    component='img'
                    image={cardImg}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5'>
                      Web Development
                    </Typography>
                    <Typography className={classes.cardPara}>
                      Develop Website Using programming language specified by
                      customer, according to their needs.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid xs={12} md={4} item>
              <Card variant='outlined'>
                <CardActionArea>
                  <CardMedia
                    classname={classes.cardImg}
                    component='img'
                    image={cardImg}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5'>
                      Web Design
                    </Typography>
                    <Typography className={classes.cardPara}>
                      Advertising application over social media sites, such as
                      twitter facebook and instagram
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid xs={12} md={4} item>
              <Card variant='outlined'>
                <CardActionArea>
                  <CardMedia
                    classname={classes.cardImg}
                    component='img'
                    image={cardImg}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5'>
                      Mobile Development
                    </Typography>
                    <Typography className={classes.cardPara}>
                      Can make new mobile app, also convert existing web app
                      into mobile application
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid xs={1} item />
      </Grid>
    </section>
  );
};

export default Services;
