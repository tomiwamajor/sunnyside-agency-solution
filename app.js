"strict";
const hamburger = document.querySelector(".ham-icon");
const toggle = document.querySelector(".toggle");
const links = document.querySelector(".links");

hamburger.addEventListener("click", () => links.classList.toggle("toggle"));
