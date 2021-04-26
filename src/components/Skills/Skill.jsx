import { Button, Grid, LinearProgress, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

const Skill = () => {
  const classes = useStyles();

  const skillData = [
    {
      name: "HTML",
      color: "primary",
      variant: "contained",
    },
    {
      name: "CSS",
      color: "primary",
      variant: "contained",
    },
    {
      name: "JAVASCRIPT(ES6)",
      color: "primary",
      variant: "contained",
    },
    {
      name: "REACT",
      color: "primary",
      variant: "outlined",
    },
    {
      name: "REDUX",
      color: "primary",
      variant: "outlined",
    },
    {
      name: "REACT NATIVE",
      color: "primary",
      variant: "outlined",
    },
    {
      name: "PHP",
      color: "secondary",
      variant: "contained",
    },
    {
      name: "LARAVEL",
      color: "secondary",
      variant: "contained",
    },
    {
      name: "NODE",
      color: "secondary",
      variant: "contained",
    },
  ];

  return (
    <section id='#skills' className={classes.skill}>
      <Grid container>
        <Grid xs={1} item></Grid>
        <Grid item>
          <Typography className={classes.title} variant='h3'>
            My Skills
          </Typography>
        </Grid>
        <Grid xs={1} item></Grid>
      </Grid>
      <Grid container>
        <Grid xs={1} item />
        <Grid xs={10}>
          <Grid spacing={4} container>
            <Grid xs={12} md={6} item>
              <Typography className={classes.Myskills} variant='h5'>
                My creative skills & experiences.
              </Typography>
              <Typography className={classes.skillPara}>
                I am a professional MEAN and MEARN stack developer having
                hand-on experience in the mentioned technologies. I have proven
                track of working on projects from start to deployment.
              </Typography>
            </Grid>
            <Grid xs={12} md={6} item>
              <Grid spacing={2} container>
                {skillData.map((el) => {
                  return (
                    <Grid xs={6} md={4} item>
                      <Button
                        color={el.color}
                        variant={el.variant}
                        fullWidth
                        size='large'
                      >
                        {el.name}
                      </Button>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid xs={1} item></Grid>
      </Grid>
    </section>
  );
};

export default Skill;
