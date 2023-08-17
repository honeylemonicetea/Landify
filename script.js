// dropdown

const moreBtn = document.getElementById("more")
const dropdown = document.querySelector(".dropdown")
moreBtn.onclick = () => {
    console.log("heya")
    dropdown.classList.toggle("dropdown-hidden")
}

// YEAR

let date = new Date;
document.getElementById("year").innerHTML = date.getFullYear()



// the up button
let up =document.getElementById("up") 
document.onscroll = () => {
    if (window.scrollY > 100) {
        up.style.display = "inline-block"
    } else {
        up.style.display = "none"
    }
}



// hamburger menu button

const burgerBTN = document.querySelector(".burger-menu");
const menuWrapper = document.querySelector(".menu-wrapper")

burgerBTN.onclick = () => {
    let menuHeight = menuWrapper.offsetHeight
    let interval    

    if (menuWrapper.classList.contains("closed")) {
        interval = setInterval(() => {
            menuHeight+=5
            menuWrapper.style.height = `${menuHeight}px`
            console.log("hey")
            if (menuHeight > 350) {
                menuWrapper.classList.remove("closed")
                clearInterval(interval)
            }
        }, 5)
    } else {
        interval = setInterval(() => {
            menuHeight-=5
            menuWrapper.style.height = `${menuHeight}px`
            console.log("hey")
            if (menuHeight < 0) {
                menuWrapper.classList.add("closed")
                clearInterval(interval)
            }
        }, 5)
    }


}