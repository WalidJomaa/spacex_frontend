import { createTheme } from "@material-ui/core"
import { InterBold, InterLight, InterMedium, InterRegular, InterSemiBold } from "./theme"

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          { ...InterLight, fontDisplay: "swap" },
          { ...InterRegular, fontDisplay: "swap" },
          { ...InterMedium, fontDisplay: "swap" },
          { ...InterSemiBold, fontDisplay: "swap" },
          { ...InterBold, fontDisplay: "swap" },
        ],
      },
    },
  },
})

export default theme
