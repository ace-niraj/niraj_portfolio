import { makeStyles } from "@material-ui/core/styles";

import landingBg from "../../assets/bg.jpg";

const useStyles = makeStyles((theme) => ({
  landing: {
    marginTop: "-11vh",
    height: "100vh",
    background: `url(${landingBg}) no-repeat center`,
    backgroundSize: "cover",
  },
  gridItem: {
    padding: "5px 0",
  },
  gridText: {
    fontFamily: "Opens Sans",
  },
  name: {
    color: theme.palette.common.blue,
    fontFamily: "Open Sans",
    fontWeight: 700,
  },
  landingBtn: {
    fontFamily: "Open Sans",
    "&:hover": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.common.blue,
      border: `1px solid ${theme.palette.common.blue}`,
    },
  },
}));

export default useStyles;
