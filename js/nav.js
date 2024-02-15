"use strict";

var htmlTag = document.querySelector("html");
var bodyTag = document.querySelector("body");
var myNav = document.querySelector("nav");
var buttonNav = document.querySelector("button");
// const myElem = document.querySelector('header nav li a');

var scrolled = () => {
  let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
  return Math.floor(dec * 100);
};

addEventListener("scroll", () => {
  myNav.style.setProperty(
    "background",
    scrolled() > 10 ? "rgba(0, 0, 0)" : "rgba(0, 0, 0, .7)"
  );
});

buttonNav.addEventListener("click", () => {
  console.log("vosh");
  myNav.style.setProperty(
    "background",
    buttonNav.getAttribute("aria-expanded") == "false"
      ? "rgba(0, 0, 0,.9)"
      : "rgba(0, 0, 0, .7)"
  );
});
