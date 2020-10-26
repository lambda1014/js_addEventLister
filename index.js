import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];


const title = document.querySelector("h2");

const superEventHandler = {
  handleMouseEnter: function () {
    title.style.color = colors[0];
    title.innerHTML = "The mouse is here!";
  },

  handleMouseLeave: function () {
    title.style.color = colors[1];
    title.innerHTML = "The mouse is gone!";
  },

  handleResize: function () {
    title.style.color = colors[2];
    title.innerHTML = "You just resized!";
  },

  handleRightClick: function () {
    title.style.color = colors[4];
    title.innerHTML = "That was a right click!";
  }
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleRightClick);
