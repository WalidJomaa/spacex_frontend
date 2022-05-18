import { Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { EColorMaterial } from "../../utils/enums/color.enum"

export default makeStyles((theme: Theme) => ({
  root: {
    width: "auto",
    height: 800,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    [theme.breakpoints.down(1280)]: {
      width: "auto",
    },
  },
  wrapperContent: {
    padding: "0 100px",
    width: "100%",
    height: "100%",
    background: "rgba(37,83,123,0.1)",
    position: "relative",
    "& h1": {
      margin: 0,
      color: "white",
    },
    [theme.breakpoints.down(1280)]: {
      padding: "0 50px",
    },
    [theme.breakpoints.down(770)]: {
      padding: "0 16px",
    },
    [theme.breakpoints.down(460)]: {
      padding: 0,
    },
  },
  summary: {
    width: "100%",
    maxWidth: 350,
    position: "absolute",
    bottom: 150,
    "& h1, h2": {
      width: "100%",
      margin: 0,
      textTransform: "uppercase",
      lineHeight: 1,
    },
    "& h1": {
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: 22,
      color: EColorMaterial.PRIMARY,
    },
    "& h2": {
      marginTop: "15px",
      marginBottom: "40px",
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 32,
      lineHeight: 1.25,
      color: EColorMaterial.WHITE,
    },
    [theme.breakpoints.down(460)]: {
      textAlign: "center",
      "& h1": {
        fontSize: 14,
      },
      "& h2": {
        fontSize: 24,
      },
    },
  },
  rewatchBtn: {
    width: 179,
    height: 60,
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: 14,
    color: EColorMaterial.WHITE,
    textTransform: "uppercase",
    border: "2px solid",
    borderColor: EColorMaterial.WHITE,
    backgroundColor: "transparent",
    transition: "400ms",
    "&:focus-visible": {
      outline: "none",
    },
    "&:hover": {
      cursor: "pointer",
      color: EColorMaterial.DARK_BLUE,
      borderColor: EColorMaterial.LIGHT,
      backgroundColor: EColorMaterial.LIGHT,
    },
  },
}))
