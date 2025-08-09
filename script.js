var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
var menuIcon = document.getElementById("menu-icon");
var closeIcon = document.getElementById("close-icon");

function openmenu() {
    sidemenu.style.right = "0";
    menuIcon.style.display = "none";
}

function closemenu() {
    sidemenu.style.right = "-200px";
    menuIcon.style.display = "block";
}

function showMoreMessage() {
    const msgSpan = document.getElementById("more-msg");
    msgSpan.innerText = "Stay tuned. More projects coming soon.";
    msgSpan.style.display = "inline";

    setTimeout(() => {
        msgSpan.style.display = "none";
    }, 3000);
}

function gitMessage() {
    alert("Check out my Github profile for more information.");
}

// Hover effect for right zone
const header = document.getElementById("header");
const rightZone = document.querySelector(".right-hover-zone");

if (rightZone) {
    rightZone.addEventListener("mouseenter", () => {
        header.classList.add("hover-right");
    });

    rightZone.addEventListener("mouseleave", () => {
        header.classList.remove("hover-right");
    });
}

// Mobile tap effect
document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 768 && header) {
        let toggled = false;
        const iamText = document.getElementById("iam-text");
        const originalBg = "images/background-phone.jpg";  // original
        const newBg = "images/download.jpeg";              // new

        if (iamText) {
            iamText.style.color = "white";
        }

        header.addEventListener("click", function () {
            header.style.backgroundImage = toggled
                ? `url('${originalBg}')`
                : `url('${newBg}')`;

            // Keep color white both times (your code toggled between white and white)
            if (iamText) {
                iamText.style.color = "white";
            }

            toggled = !toggled;
        });
    }
});

if (menuIcon) {
    menuIcon.addEventListener("click", (e) => {
        e.stopPropagation();
    });
}

if (closeIcon) {
    closeIcon.addEventListener("click", (e) => {
        e.stopPropagation();
    });
}
const headerText = document.querySelector(".header-text");

if (headerText) {
    headerText.addEventListener("mouseenter", () => {
        header.classList.add("hover-right");
    });

    headerText.addEventListener("mouseleave", () => {
        header.classList.remove("hover-right");
    });
}