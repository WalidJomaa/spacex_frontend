import { SvgIcon, SvgIconProps } from "@material-ui/core"

const PrevIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M32.6111 40.932L16.3863 24.7072C15.9958 24.3167 15.9958 23.6835 16.3863 23.293L32.6111 7.06817"
        stroke="currentColor"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIcon>
  )
}

export default PrevIcon
