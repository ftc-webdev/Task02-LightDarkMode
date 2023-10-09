'use strict'

import { init } from "./js/modules/dark-light/index.js"

document.addEventListener("DOMContentLoaded", () => {

    let darkStyleSheets = ["/js/modules/dark-light/css/dark/index.css, /css/dark/index.css"]
    let lightStyleSheets = ["/css/ligth/index.css"]

    init("dark", "mode", "style-mode", darkStyleSheets, lightStyleSheets)

})