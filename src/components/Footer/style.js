import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.black,
    width: "100%",

    color: theme.palette.common.white,
  },
  logo: {
    height: "4rem",
    marginLeft: "25px",
  },
  copyright: {
    fontFamily: "Open Sans",
  },
  gridItem: {
    margin: "15px auto",
  },
  socialIcons: {
    marginRight: "25px",
  },
  socialIcon: {
    "&:hover": {
      color: theme.palette.common.blue,
      cursor: "pointer",
    },
  },
}));

export default useStyles;
