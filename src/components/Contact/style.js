import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contact: {
    minHeight: "70vh",
  },
  textField: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    width: "40%",
  },
  textFieldfull: {
    marginTop: theme.spacing(2),
    width: "83%",
  },
  btn: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
