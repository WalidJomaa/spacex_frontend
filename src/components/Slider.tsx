import useStyles from "../styles/components/slider.style"
import { ISliderProp } from "../interfaces/slider.interface"

const Slider = ({ title, subtitle, image }: ISliderProp) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <img className={classes.image} src={image} alt={title} />
      <div className={classes.wrapperContent}>
        <section className={classes.summary}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <button className={classes.rewatchBtn}>Rewatch</button>
        </section>
      </div>
    </div>
  )
}

export default Slider
