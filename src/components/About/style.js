import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  about: {
    minheight: "100vh",
  },
  container: {
    paddingTop: "15vh",
    marginBottom: "15vh",
  },
  title: {
    padding: "0 0 40px 0",
    fontWeight: 500,
    fontFamily: "Open sans",
  },
  aboutText: {
    paddingTop: "180px",

    [theme.breakpoints.down("sm")]: {
      paddingTop: "60px",
    },
  },
  aboutBtn: {
    margin: "30px 0",
    fontFamily: "Open sans",
  },
  myImg: {
    height: "400px",
    paddingLeft: "100px",
    [theme.breakpoints.down("xs")]: {
      height: "200px",
      paddingLeft: "0",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0",
    },
  },
  myName: {
    fontSize: "1.5rem",
    fontWeight: 700,
    fontStyle: "italic",
    fontFamily: "Open sans",
  },
  myInfo: {
    fontFamily: "Open sans",
    letterSpacing: 1,
  },
}));

export default useStyles;
