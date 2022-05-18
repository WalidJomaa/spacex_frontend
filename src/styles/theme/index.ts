import InterLightFont from "./fonts/inter/Inter-Light.ttf"
import InterRegularFont from "./fonts/inter/Inter-Regular.ttf"
import InterMediumFont from "./fonts/inter/Inter-Medium.ttf"
import InterSemiBoldFont from "./fonts/inter/Inter-SemiBold.ttf"
import InterBoldFont from "./fonts/inter/Inter-Bold.ttf"

const InterLight = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 300,
  src: `
    local("Inter Light"),
    local("Inter-Light"),
    url(${InterLightFont}) format("truetype")`,
}

const InterRegular = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 400,
  src: `
    local("Inter Regular"),
    local("Inter-Regular"),
    url(${InterRegularFont}) format("truetype")`,
}

const InterMedium = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 500,
  src: `
    local("Inter Medium"),
    local("Inter-Medium"),
    url(${InterMediumFont}) format("truetype")`,
}

const InterSemiBold = {
  fontFamily: "Inter",
  fontStyle: "bold",
  fontWeight: 600,
  src: `
    local("Inter SemiBold"),
    local("Inter-SemiBold"),
    url(${InterSemiBoldFont}) format("truetype")`,
}

const InterBold = {
  fontFamily: "Inter",
  fontStyle: "bold",
  fontWeight: 700,
  src: `
    local("Inter Bold"),
    local("Inter-Bold"),
    url(${InterBoldFont}) format("truetype")`,
}

export { InterLight, InterRegular, InterMedium, InterSemiBold, InterBold }
