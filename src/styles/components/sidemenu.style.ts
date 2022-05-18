import { Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { EColorMaterial } from "../../utils/enums/color.enum"

export default makeStyles((theme: Theme) => ({
  root: {
    "& .MuiBackdrop-root": {
      background: "rgba(37, 83, 123,0.25)",
      backdropFilter: "blur(4px)",
      WebkitBackdropFilter: "blur(4px)",
      MozBackdropFilter: "blur(4px)",
    },
    "& .MuiDrawer-paper": {
      width: 395,
      padding: 40,
      backgroundColor: EColorMaterial.BLACK,
      color: EColorMaterial.WHITE,
    },
    "& #mobile-navbar": {
      display: "none",
    },
    [theme.breakpoints.down(770)]: {
      "& #mobile-navbar": {
        display: "block",
      },
    },
    [theme.breakpoints.down(440)]: {
      "& .MuiDrawer-paper": {
        width: 295,
      },
    },
  },
  closeMenu: {
    width: 22,
    height: 22,
    cursor: "pointer",
    "& img": {
      width: 22,
      height: 22,
    },
  },
  ul: {
    margin: 0,
    marginTop: 20,
    padding: 0,
    listStyle: "none",
    "& li": {
      marginTop: 24,
      height: 22,
      textTransform: "uppercase",
      fontSize: 14,
      fontFamily: "Inter",
      fontWeight: 700,
      color: EColorMaterial.LIGHT,
      transition: "400ms color",
      "&:hover": {
        cursor: "pointer",
        borderBottom: `2px solid ${EColorMaterial.PRIMARY}`,
        color: EColorMaterial.PRIMARY,
      },
    },
  },
}))
