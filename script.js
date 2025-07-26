var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for (tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
var sidemenu = document.getElementById("sidemenu");
var menuIcon = document.getElementById("menu-icon");

function openmenu(){
    sidemenu.style.right = "0";
    menuIcon.style.display = "none"; 
}

function closemenu(){
    sidemenu.style.right = "-200px";
    menuIcon.style.display = "block"; 
}
