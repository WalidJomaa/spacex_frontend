import Carousel from "react-material-ui-carousel"
import useStyles from "../styles/components/slideCarousel.style"
import NextIcon from "./NextIcon"
import PrevIcon from "./PrevIcon"
import Slider from "./Slider"
import Image1 from "../assets/images/image-1.webp"
import Image2 from "../assets/images/image-2.webp"
import Image3 from "../assets/images/image-3.webp"
import Image4 from "../assets/images/image-4.webp"

const SlideCarousel = () => {
  const classes = useStyles()

  return (
    <div>
      <Carousel
        className={classes.rootCarousel}
        navButtonsAlwaysVisible
        PrevIcon={<PrevIcon style={{ color: "inhert" }} />}
        NextIcon={<NextIcon style={{ color: "inhert" }} />}
        navButtonsProps={{ className: classes.carousel }}
      >
        <Slider title="Completed mission" subtitle="Crew-3 returns to earth" image={Image1} />
        <Slider title="Recent launch" subtitle="Starlink mission" image={Image2} />
        <Slider title="" subtitle="Starship update" image={Image3} />
        <Slider title="" subtitle="Starship to land nasa astronauts on the moon" image={Image4} />
      </Carousel>
    </div>
  )
}

export default SlideCarousel
