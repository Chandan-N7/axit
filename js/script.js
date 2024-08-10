

const navbutton= document.getElementById("nbutton");
const dropdown= document.getElementById("menu")
navbutton.addEventListener('click',function(){
    navbutton.classList.toggle("change");
    dropdown.classList.toggle("hide");
})

function menuBtn() {
    let x = dropdown;
    x.style.display = (x.style.display === "block") ? "none" : "block";
  }


function openTab(event, tabName) {
    let i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove 'active' class from all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the selected tab content and mark the button as 'active'
    document.getElementById(tabName).style.display = "block";
    tabName.currentTarget.class = "active";
}

// Set the default tab to be displayed (e.g., Tab 1)
document.getElementById("tab1").style.display = "block";
document.getElementById("tab3").style.display = "none";
document.getElementById("tab2").style.display = "none";
document.querySelector(".tablinks").classList.add("active");

function openTab(event, tabName) {
    let i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove 'active' class from all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the selected tab content and mark the button as 'active'
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

// Set the default tab to be displayed (e.g., Tab 1)
document.getElementById("tab1").style.display = "block";
document.querySelector(".tablinks").classList.add("active");

