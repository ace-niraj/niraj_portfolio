import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  services: {
    minHeight: "100vh",
  },
  serviceText: {
    padding: "50px 0",
  },
  cardPara: {
    letterSpacing: 1,
  },
  cardImg: {
    height: "100px",
    width: "1px",
  },
}));

export default useStyles;
