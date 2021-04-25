import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  about: {
    height: "100vh",
  },
  container: {
    paddingTop: "15vh",
  },
  title: {
    padding: "0 0 40px 0",
  },
  aboutText: {
    paddingTop: "100px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "60px",
    },
  },
  aboutBtn: {
    margin: "30px 0",
  },
  myImg: {
    height: "300px",
    [theme.breakpoints.down("xs")]: {
      height: "200px",
    },
  },
}));

export default useStyles;
