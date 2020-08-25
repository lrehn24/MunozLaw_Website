// expand drop down menu for mobile
function expand() {
    var nav = document.getElementById("topNav");
    if(nav.style.display == "none") {
        nav.style.display = "block";
    }
    else if(nav.style.display == "block") {
        nav.style.display = "none";
    }
}
// change display for mobile devices
function dropMenu(x) {
    var nav = document.getElementById("topNav");
    if(!x.matches) {
        nav.style.display = "flex";
    }
    else {
        nav.style.display = "none";
        document.getElementById("menu").addEventListener("click", expand);
    }
}
var x = window.matchMedia("(max-width: 768px)" || "(max-width: 480px)")
dropMenu(x)
x.addListener(dropMenu)

// change display for types of law service
function showRightService(click_id) {
    var clicked = document.getElementById(click_id);
    // call list elements
    var services = document.querySelectorAll(".services li");
    for(i = 0; i <services.length; i++) {
        // change class"active" for clicked id
        if(services[i].hasAttribute("class")) {
            services[i].classList.remove("active")
        }
    }
    clicked.classList.add("active");
    // change display on click
    var getServ = document.querySelector("." + clicked.id);
    var displays = document.querySelectorAll('div[id^="law-"');
    for(i = 0; i < displays.length; i++) {
        if (displays[i].hasAttribute("class")) {
            displays[i].classList.remove("showService");
            displays[i].classList.add("hideService");
        }
    }

    getServ.classList.remove("hideService");
    getServ.classList.add("showService");
}