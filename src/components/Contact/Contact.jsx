import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
const Contact = () => {
  const classes = useStyles();
  return (
    <section id='#contact' className={classes.contact}>
      <Grid container>
        <Grid xs={1}></Grid>
        <Grid item>
          <Typography className={classes.contactText} variant='h3'>
            Contact Me
          </Typography>
        </Grid>
        <Grid xs={1}></Grid>
      </Grid>
      <Grid container>
        <Grid xs={1} item></Grid>
        <Grid xs={10} container>
          <Grid xs={12} sm={6} item>
            <Typography variant='h6'>Get in touch</Typography>
            <Typography>
              If you have any query related to work, fill this form and reach me
            </Typography>
            <Typography>
              <span>Name</span> <br /> Niraj khatri
            </Typography>
            <Typography>
              <span>Address</span> <br /> Maitidevi, Kathmandu
            </Typography>
            <Typography>
              <span>Email</span> <br /> nirajkhatri384@gmail.com
            </Typography>
          </Grid>
          <Grid xs={12} sm={6} item>
            <Typography variant='h6'>Message Me</Typography>

            <form>
              <TextField
                className={classes.textField}
                size='normal'
                id='standard-basic'
                label='Name'
              />

              <TextField
                className={classes.textField}
                id='standard-basic'
                label='Email'
              />

              <TextField
                className={classes.textFieldfull}
                fullwidth
                id='standard-basic'
                label='Subject'
              />
              <TextField
                className={classes.textFieldfull}
                fullwidth
                id='standard-basic'
                label='Message'
              />
              <Button
                color='primary'
                variant='contained'
                className={classes.btn}
              >
                Send Message
              </Button>
            </form>
          </Grid>
        </Grid>
        <Grid xs={1} item></Grid>
      </Grid>
    </section>
  );
};

export default Contact;
