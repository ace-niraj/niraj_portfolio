import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  logo: {
    height: "4rem",
    marginLeft: "25px",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    fontFamily: "Open Sans",
    fontWeight: 700,
    minWidth: 10,
    marginRight: "25px",
  },
  tabActive: {
    color: theme.palette.common.blue,
  },
  drawerIcon: {
    color: theme.palette.common.white,
    marginLeft: "auto",
    marginRight: "20px",
    "&:hover": {
      color: theme.palette.common.blue,
    },
  },

  drawer: {
    backgroundColor: theme.palette.common.black,
    width: "50%",
  },
  list: {
    margin: "auto 0",
  },
  drawerActive: {
    color: theme.palette.common.blue,
    fontFamily: "Open Sans",
    fontWeight: 700,
    textTransform: "uppercase",
    textAlign: "center",
    margin: "5vh auto",
  },
  drawerText: {
    color: theme.palette.common.white,
    fontFamily: "Open Sans",
    fontWeight: 700,
    textTransform: "uppercase",
    textAlign: "center",
    margin: "5vh auto",
  },
  menuIcon: {
    fontSize: "30px",
  },
}));

export default useStyles;
