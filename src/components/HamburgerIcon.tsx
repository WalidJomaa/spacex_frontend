import { SvgIcon, SvgIconProps } from "@material-ui/core"

const HamburgerIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4 13.5C4 12.6716 4.67157 12 5.5 12H42.5C43.3284 12 44 12.6716 44 13.5C44 14.3284 43.3284 15 42.5 15H5.5C4.67157 15 4 14.3284 4 13.5Z"
        fill="currentColor"
      />
      <path
        d="M4 23.5C4 22.6716 4.67157 22 5.5 22H42.5C43.3284 22 44 22.6716 44 23.5C44 24.3284 43.3284 25 42.5 25H5.5C4.67157 25 4 24.3284 4 23.5Z"
        fill="currentColor"
      />
      <path
        d="M5.5 32C4.67157 32 4 32.6716 4 33.5C4 34.3284 4.67157 35 5.5 35H42.5C43.3284 35 44 34.3284 44 33.5C44 32.6716 43.3284 32 42.5 32H5.5Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}

export default HamburgerIcon
