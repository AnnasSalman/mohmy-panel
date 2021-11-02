// theme.js
// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react"
// 2. Add your color mode config
const config = {
    initialColorMode: "default",
    useSystemColorMode: false,
}
// 3. extend the theme
const theme = extendTheme({
    config,
    fonts: {
        heading: "Josefin Sans",
        body: "Roboto",
    },
})
export default theme
