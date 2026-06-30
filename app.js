"use strict";

window.addEventListener(
  "DOMContentLoaded",
  function () {
    const item = document.querySelectorAll(".app");

    item.forEach(function (element, index) {
      setTimeout(function () {
        element.classList.add("fade-in");
      }, 200 * index);
    });
  },
  false
);

const topPage = document.getElementById("topPage");
const omikujiPage = document.getElementById("omikujiPage");
const omikujiApp = document.getElementById("omikujiApp");
const backBtn = document.getElementById("backBtn");
const omikujiBox = document.querySelector(".omikuji-box");
const result = document.getElementById("result");

omikujiApp.addEventListener("click", function () {
  topPage.style.display = "none";
  omikujiPage.style.display = "block";
});

backBtn.addEventListener("click", function () {
  omikujiPage.style.display = "none";
  topPage.style.display = "block";
});

omikujiBox.addEventListener("click", function () {
  const fortunes = [
    "大吉！最高の一日！",
    "中吉！いいことがありそう！",
    "小吉！少しラッキー！",
    "吉！落ち着いていこう！",
    "末吉！これから良くなる！",
    "凶！気をつけてね！",
  ];

  const randomNumber = Math.floor(Math.random() * fortunes.length);
  result.textContent = fortunes[randomNumber];
});
