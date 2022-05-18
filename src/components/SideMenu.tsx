import { Drawer, IconButton } from "@material-ui/core"
import useStyles from "../styles/components/sidemenu.style"
import CloseIcon from "../assets/images/icons/x-icon.svg"

const SideMenu = ({ onOpenSideMenu, onChangeSideMenu }: any) => {
  const classes = useStyles()

  // Handle close side menu
  const handleCloseSideMenu = () => {
    onChangeSideMenu(false)
  }
  return (
    <Drawer className={classes.root} open={onOpenSideMenu} anchor="right" onClose={handleCloseSideMenu}>
      <IconButton className={classes.closeMenu} onClick={handleCloseSideMenu}>
        <img src={CloseIcon} alt="close-menu" />
      </IconButton>
      <ul className={classes.ul}>
        <li>Mission</li>
        <li>Launches</li>
        <li>Careers</li>
        <li>Updates</li>
        <li>Shop</li>
      </ul>
      <ul id="mobile-navbar" className={classes.ul}>
        <li>Falcon 9</li>
        <li>Falcon Heavy</li>
        <li>Dragon</li>
        <li>Starship</li>
        <li>Human Spaceflight</li>
        <li>Rideshare</li>
        <li>Starlink</li>
      </ul>
    </Drawer>
  )
}

export default SideMenu
