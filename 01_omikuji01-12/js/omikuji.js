"use strict";
let n = null; // 01-12 add ランダムな数値を格納する変数
let prevN = null; // 01-12 add 前回のランダムな数値を格納する変数
let currentAudio = null;

let omikuji_sound1 = new Audio("sound/omikuji_sound1.mp3");
let omikuji_sound2 = new Audio("sound/omikuji_sound2.mp3");
let omikuji_sound3 = new Audio("sound/omikuji_sound3.mp3");
let omikuji_sound4 = new Audio("sound/omikuji_sound4.mp3");
let omikuji_sound5 = new Audio("sound/omikuji_sound5.mp3");
let omikuji_sound6 = new Audio("sound/omikuji_sound6.mp3");

let resultSound = [
  omikuji_sound1,
  omikuji_sound2,
  omikuji_sound3,
  omikuji_sound4,
  omikuji_sound5,
  omikuji_sound6,
];

window.addEventListener(
  "DOMContentLoaded",
  function () {
    // header animation
    $("header").textillate({
      loop: false,
      minDisplayTime: 900,
      initialDelay: 1000,
      autoStart: true,

      in: {
        effect: "fadeInLeftBig",
        delayScale: 1.5,
        delay: 50,
        sync: false,
        shuffle: true,
      },
    });

    // button effect
    $(function () {
      ScrollReveal().reveal("#btn1", { duration: 9000 });
    });

    // popup
    this.setTimeout(function () {
      let popMessage = "いらっしゃい！ おみくじ引いてって！";
      window.alert(popMessage);
    }, 3000);
  },
  false
);

const btn1 = document.getElementById("btn1");
const omikujiText = document.getElementById("omikujiText");
const omikujiTextImage = document.getElementById("omikujiTextImage");

btn1.addEventListener(
  "click",
  function () {
    // 01-09 add Array => 01-11 chg image
    let resultTextImage = [
      "./img/omikuji_daikichi.png",
      "./img/omikuji_kichi.png",
      "./img/omikuji_chuukichi.png",
      "./img/omikuji_syoukichi.png",
      "./img/omikuji_suekichi.png",
      "./img/omikuji_kyou.png",
    ];

    // let resultColor = [ // 01-11 del
    //   "#ff0000",
    //   "#c71585",
    //   "#ff1493",
    //   "#ff69b4",
    //   "#ff8c00",
    //   "#1e90ff",
    // ];

    // let resultFontSize = ["80px","70px","60px","50px","40px","30px"]; // 01-11 del

    let resultMaxSpeed = [20, 15, 10, 10, 5, 5];
    let resultMaxSize = [35, 30, 30, 20, 30, 30];
    let resultMinSize = [20, 15, 20, 10, 10, 15];

    let resultImage = [
      "img/star.png",
      "img/sakura_hanabira.png",
      "img/redLeaves4.png",
      "img/water1.png",
      "img/leaf.png",
      "img/snowflakes.png",
    ];

    // 01-12 add-str
    while (n === prevN) {
      n = Math.floor(Math.random() * resultTextImage.length);
    }

    prevN = n;

    // 01-12 add-end

    // 01-11 add-str
    omikujiTextImage.src = resultTextImage[n];
    omikujiTextImage.classList.add("omikujiPaper");

    // アニメーション終了時にクラスを削除
    omikujiTextImage.addEventListener(
      "animationend",
      function () {
        omikujiTextImage.classList.remove("omikujiPaper");
      },
      false
    );
    // 01-11 add-end

    soundControl(resultSound[n]);
    soundControl(resultSound[n]);
    // clear old effect
    $(document).snowfall("clear");

    // snowfall effect
    $(document).ready(function () {
      $(document).snowfall({
        maxSpeed: resultMaxSpeed[n],
        minSpeed: 1,

        maxSize: resultMaxSize[n],
        minSize: resultMinSize[n],

        image: resultImage[n],
      });
    });
  },
  false
);
// 01-10 add sound control
function soundControl(w_sound) {
  // Nếu âm thanh trước đang phát thì dừng
  if (currentAudio) {
    currentAudio.pause(); // B
    currentAudio.currentTime = 0; // C
  }

  // Phát âm thanh mới
  w_sound.play(); // D

  // Lưu âm thanh đang phát
  currentAudio = w_sound;
}
