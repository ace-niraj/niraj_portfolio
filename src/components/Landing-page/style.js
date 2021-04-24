import { makeStyles } from "@material-ui/core/styles";

import landingBg from "../../assets/bg.jpg";

const useStyles = makeStyles((theme) => ({
  landing: {
    height: "90vh",
    background: `url(${landingBg}) no-repeat`,
    backgroundSize: "cover",
    padding: "0 200px",
  },
  name: {
    color: theme.palette.common.blue,
  },
}));

export default useStyles;
