// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    const target = this.getAttribute("href");

    if (target.startsWith("#")) {
      e.preventDefault();
      document.querySelector(target)?.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Welcome message
window.addEventListener("load", () => {
  console.log("Ram Narayan Ram Website Loaded Successfully");
});