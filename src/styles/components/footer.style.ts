import { Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { EColorMaterial } from "../../utils/enums/color.enum"

export default makeStyles((theme: Theme) => ({
  root: {
    padding: "20px 100px",
    backgroundColor: EColorMaterial.BLACK,
    [theme.breakpoints.down(1280)]: {
      padding: "20px 50px",
    },
    [theme.breakpoints.down(770)]: {
      padding: "20px 16px",
    },
  },
  logo: {
    width: 389,
    height: 48,
    margin: "60px 0",
    [theme.breakpoints.down(770)]: {
      width: 200,
      height: 28,
    },
  },
  wrapperNavs: {
    display: "flex",
    color: EColorMaterial.LIGHT,
    gap: 32,
    marginBottom: 100,
    "& ul": {
      width: 180,
      margin: 0,
      padding: 0,
    },
    "& li": {
      margin: "20px 0",
      width: "fit-content",
      height: 22,
      listStyle: "none",
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 14,
      color: EColorMaterial.LIGHT,
      textTransform: "uppercase",
      transition: "400ms color",
      "&:hover": {
        cursor: "pointer",
        borderBottom: `2px solid ${EColorMaterial.PRIMARY}`,
        color: EColorMaterial.PRIMARY,
      },
    },
    [theme.breakpoints.down(770)]: {
      alignItems: "center",
      justifyContent: "space-between",
      "& li": {
        fontSize: 12,
      },
    },
  },
  wrapperSocialmedia: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: EColorMaterial.LIGHT,
    "& ul": {
      display: "flex",
      gap: 5,
      margin: 0,
      padding: 0,
    },
    "& li": {
      width: "100%",
      listStyle: "none",
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: 14,
      color: EColorMaterial.LIGHT,
      textTransform: "uppercase",
    },
    "& p": {
      margin: "30px 0",
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: 12,
      color: EColorMaterial.LIGHT,
      textTransform: "uppercase",
    },
    [theme.breakpoints.down(770)]: {
      "& p": {
        margin: "20px 0",
        fontSize: 10,
      },
    },
  },
  socialmediaButton: {
    padding: 2,
    opacity: 0.7,
    "& img": {
      width: 24,
      height: 24,
    },
    "&:hover": {
      opacity: 1,
    },
  },
}))
