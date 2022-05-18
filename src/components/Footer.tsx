import { IconButton, Link, Tooltip } from "@material-ui/core"
import useStyles from "../styles/components/footer.style"
import SpaceXLogo from "../assets/images/spacex-logo.svg"
import FacebookIcon from "../assets/images/icons/facebook-icon.svg"
import FlickrIcon from "../assets/images/icons/flickr-icon.svg"
import InstagramIcon from "../assets/images/icons/instagram-icon.svg"
import LinkedinIcon from "../assets/images/icons/linkedin-icon.svg"
import TwitterIcon from "../assets/images/icons/twitter-icon.svg"

const Footer = () => {
  const classes = useStyles()
  return (
    <section className={classes.root}>
      <img className={classes.logo} src={SpaceXLogo} alt="spacex-logo" width={389} height={48} />
      <div className={classes.wrapperNavs}>
        <ul>
          <li>
            <Link href="#" color="inherit">
              Falcon 9
            </Link>
          </li>
          <li>
            <Link href="#" color="inherit">
              Falcon Heavy
            </Link>
          </li>
          <li>
            <Link href="#" color="inherit">
              Dragon
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="#" color="inherit">
              Starship
            </Link>
          </li>
          <li>
            <Link href="#" color="inherit">
              Human Spaceflight
            </Link>
          </li>
          <li>
            <Link href="#" color="inherit">
              Rideshare
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="#" color="inherit">
              Starlink
            </Link>
          </li>
          <li>
            <Link href="#" color="inherit">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="#" color="inherit">
              Suppliers
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.wrapperSocialmedia}>
        <ul>
          <li>
            <Tooltip title="Facebook">
              <IconButton aria-label="facebook" className={classes.socialmediaButton}>
                <img src={FacebookIcon} alt="Facebook-icon" />
              </IconButton>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Flickr">
              <IconButton aria-label="flickr" className={classes.socialmediaButton}>
                <img src={FlickrIcon} alt="Flickr-icon" />
              </IconButton>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Instagram">
              <IconButton aria-label="instagram" className={classes.socialmediaButton}>
                <img src={InstagramIcon} alt="Instagram-icon" />
              </IconButton>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Linkedin">
              <IconButton aria-label="linkedin" className={classes.socialmediaButton}>
                <img src={LinkedinIcon} alt="Linkedin-icon" />
              </IconButton>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Twitter">
              <IconButton aria-label="twitter" className={classes.socialmediaButton}>
                <img src={TwitterIcon} alt="Twitter-icon" />
              </IconButton>
            </Tooltip>
          </li>
        </ul>
        <p>Copyright © 2022 spacex, all rights reserved</p>
      </div>
    </section>
  )
}

export default Footer
