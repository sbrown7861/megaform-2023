const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const linkList = document.querySelectorAll(".nav-links li");
const currentPage = location.pathname.split("/")[1];

// Nav toggle
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  linkListItem.forEach((item) => {
    item.classList.toggle("fade");
  });

  hamburger.classList.toggle("toggle");
});

// Active page
linkList.forEach((item) => {
  let link = item.firstChild;
  link.getAttribute("href") === "#" ? link.classList.add("active") : "";
});
