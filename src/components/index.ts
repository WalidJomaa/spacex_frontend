import loadable from "@loadable/component"

// Load a component before the render proccess
const LoadableNavbar = loadable(() => import("./Navbar"))
const LoadableSlideCarousel = loadable(() => import("./SlideCarousel"))
const LoadableFooter = loadable(() => import("./Footer"))
const LoadableSideMenu = loadable(() => import("./SideMenu"))

export { LoadableNavbar, LoadableSlideCarousel, LoadableFooter, LoadableSideMenu }
