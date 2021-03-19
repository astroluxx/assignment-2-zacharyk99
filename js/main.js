document.getElementById('hamburger-icon').addEventListener("click", function (evt){
    var menuItems = document.getElementById("dropdown");
    if (menuItems.style.display ==="none") {
        menuItems.style.display = "block";
    } else {
        menuItems.style.display = "none";
    }
});
