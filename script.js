function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
  
  // Optional: close menu when clicking outside
  document.addEventListener("click", function(event) {
    const menu = document.getElementById("dropdownMenu");
    const toggle = document.querySelector(".menu-toggle");
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
      menu.style.display = "none";
    }
  });
  