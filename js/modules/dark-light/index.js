'use strict'

let setLightMode = () => {
    console.log("setting light mode")
    mode = "light"
    style.href = "css/light.css"
    button.innerText = "Dark Mode"
}

let setDarkMode = () => {
    console.log("setting dark mode")
    mode = "dark"
    style.href = "css/dark.css"
    button.innerText = "Light Mode"
}


let mode = "dark"
let button 
let style

let init = (initialMode, buttonSelectorId, styleSelectorId) => {
    // initialise the module variables 
    mode = initialMode
    button = document.getElementById(buttonSelectorId)
    style = document.getElementById(styleSelectorId)

    button.addEventListener("click", () => {

        if(mode === "light") {
            setDarkMode()
        } else {
            setLightMode()
        }
    
    })
    

}

export {
    init
}












