import { AppBar, Toolbar } from "@material-ui/core"
import useStyles from "../styles/components/navbar.style"
import HamburgerIcon from "./HamburgerIcon"
import SpaceXLogo from "../assets/images/spacex-logo.svg"

const Navbar = ({ onChangeSideMenu }: any) => {
  const classes = useStyles()

  // Handle open side menu
  const handleOpenSideMenu = () => {
    onChangeSideMenu(true)
  }

  return (
    <AppBar position="absolute" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <img className={classes.logo} src={SpaceXLogo} alt="spacex-logo" width={389} height={48} />
        <ul className={classes.ul}>
          <li>Falcon 9</li>
          <li>Falcon Heavy</li>
          <li>Starship</li>
          <li>Human Spaceflight</li>
          <li>Rideshare</li>
          <li>Starlink</li>
        </ul>
        <ul className={classes.ul} id="shop-main-menu-button">
          <li>Shop</li>
          <li id="main-menu-icon" onClick={handleOpenSideMenu}>
            <HamburgerIcon color="inherit" />
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
