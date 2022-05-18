import { useState } from "react"
import { CssBaseline } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import theme from "./styles"
import { LoadableFooter, LoadableNavbar, LoadableSideMenu, LoadableSlideCarousel } from "./components"

function App() {
  const [openSideMenu, setOpenSideMenu] = useState(false)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoadableNavbar onChangeSideMenu={setOpenSideMenu} />
      <LoadableSlideCarousel />
      <LoadableFooter />
      <LoadableSideMenu onOpenSideMenu={openSideMenu} onChangeSideMenu={setOpenSideMenu} />
    </ThemeProvider>
  )
}

export default App
