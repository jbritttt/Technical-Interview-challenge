// value of 1 means menu is closed. value of 0 means it is opened
let openOrClosed = 1;

// opens menu and rotates hamburger bars
function openMenu() {
  let hamburgerBarOne = document.querySelector(".bar-1");
  let hamburgerBarTwo = document.querySelector(".bar-2");
  let menu = document.querySelector(".menu");

  if (openOrClosed == 1) {
    menu.style.marginTop = "0px";
    hamburgerBarOne.style.transform = "rotate(45deg)";
    hamburgerBarTwo.style.transform = "rotate(-45deg)";
    hamburgerBarOne.style.marginBottom = "-11px";

    openOrClosed = 0;
  } else if (openOrClosed == 0) {
    menu.style.marginTop = "-265px";
    hamburgerBarOne.style.transform = "rotate(0deg)";
    hamburgerBarOne.style.marginBottom = "0px";
    hamburgerBarTwo.style.transform = "rotate(0deg)";

    openOrClosed = 1;
  } else;
}

// checks value passed in then calls another function based on that value
function rightOrWrongFunc(val) {
  let rightOrWrongModal = document.querySelector(".rightOrWrongModal");
  val === 1 ? correctFunc() : wrongFunc();
}

let possibleCount = " / 4";
let counter = 0;
let count = document.querySelector("#count");

let correctModal = document.querySelector(".correct-modal");
let wrongModal = document.querySelector(".wrong-modal");

// if you guessed correct this function is called
function correctFunc() {
  counter += 1;
  count.textContent = `${counter} ${possibleCount}`;
  if (counter == 4) {
    counter = 0;
  }
  wrongModal.style.display = "none";
  correctModal.style.display = "flex";

  count.style.color = "green";
  count.style.borderRadius = "10px";
  // hides modal after 1.5 seconds
  setTimeout(function () {
    correctModal.style.display = "none";

    count.style.color = "inherit";
  }, 1500);
}

// if you guessed wrong this function is called
function wrongFunc() {
  correctModal.style.display = "none";
  wrongModal.style.display = "flex";
  count.style.color = "red";
  count.style.borderRadius = "10px";

  // hides modal after 1.5 seconds
  setTimeout(function () {
    wrongModal.style.display = "none";
    count.style.color = "inherit";
  }, 1500);
}
