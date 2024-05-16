import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  MH3: {
    margin: theme.spacing(3, 0),
  },

  mainContainer: {
    justifyContent: "center",
  },
  MB0: {
    marginBottom: "0px !important",
  },
  profileContainer: {
    padding: theme.spacing(3, 3),
    backgroundColor: theme.palette.common.white,
    borderRadius: 30,
  },
  textBold: {
    fontWeight: 700,
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
  },
  headerBar: {
    background:
      "linear-gradient(261.53deg, theme.palette.success.light -8.04%, theme.palette.primary.main 111.96%)",
    borderRadius: 30,
    height: 80,
    display: "flex",
    alignItems: "center",
  },
  titleText: {
    fontWeight: 600,
    marginLeft: 20,
    fontSize: "1.2rem",
  },
  fieldWrapper: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(3),
  },
  formMargin: {
    marginTop: 30,
  },
  btn: {
    borderRadius: "10px !important",
    height: "40px !important",
    background: theme.palette.primary.main,
    width: 120,
  },
  textField: {
    color: theme.palette.grey[600],
    padding: 10,
    fontSize: "1.2rem",
    width: "100%",
    borderRadius: 20,
    border: "none",
    backgroundColor: "#F3F4F8",
  },
}));

export default useStyles;
