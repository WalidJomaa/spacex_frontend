import { Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { EColorMaterial } from "../../utils/enums/color.enum"

export default makeStyles((theme: Theme) => ({
  rootCarousel: {
    backgroundColor: EColorMaterial.BLACK,
  },
  carousel: {
    backgroundColor: "transparent",
    color: EColorMaterial.LIGHT,
    "&.MuiIconButton-root:hover": {
      color: EColorMaterial.PRIMARY,
      backgroundColor: EColorMaterial.DARK,
    },
  },
}))
