// Show welcome message when page loads
window.onload = function () {
    console.log("Website loaded successfully");
};

// Highlight active navigation link
let links = document.querySelectorAll(".navigation a");

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

// Example button function
function showMessage(){
    alert("Welcome to my website!");
}