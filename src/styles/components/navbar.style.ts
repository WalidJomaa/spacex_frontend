import { Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { EColorMaterial } from "../../utils/enums/color.enum"

export default makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: 100,
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  toolbar: {
    padding: "0 100px",
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down(1280)]: {
      padding: "0 50px",
    },
    [theme.breakpoints.down(770)]: {
      padding: "0 16px",
    },
  },
  logo: {
    maxWidth: 180,
    maxHeight: 22,
    [theme.breakpoints.down(1280)]: {
      maxWidth: 150,
    },
    [theme.breakpoints.down(770)]: {
      maxWidth: 180,
    },
  },
  ul: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 0,
    "& li": {
      height: 22,
      margin: "0 12px",
      listStyle: "none",
      textTransform: "uppercase",
      fontSize: 14,
      fontFamily: "Inter",
      fontWeight: 700,
      color: EColorMaterial.LIGHT,
      transition: "400ms color",
      "& svg": {
        height: 22,
        width: 22,
      },
      "&:not(#main-menu-icon):hover": {
        cursor: "pointer",
        borderBottom: `2px solid ${EColorMaterial.PRIMARY}`,
        color: EColorMaterial.PRIMARY,
      },
      "&#main-menu-icon": {
        cursor: "pointer",
        color: EColorMaterial.WHITE,
      },
    },
    [theme.breakpoints.down(1280)]: {
      "& li": {
        margin: "0 6px",
        fontSize: "min(14px, 1.2vw)",
        lineHeight: "22px",
      },
    },
    [theme.breakpoints.down(770)]: {
      "& li": {
        fontSize: 14,
      },
      "&:not(#shop-main-menu-button)": {
        display: "none",
      },
    },
  },
}))
