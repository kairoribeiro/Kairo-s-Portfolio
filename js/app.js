
// Work Buttons

document.getElementById("work1Btn").onclick = function () {
    location.href = "";
};

document.getElementById("work2Btn").onclick = function () {
    location.href = "https://kairo1.netlify.app/"; 
};

document.getElementById("work3Btn").onclick = function () {
    location.href = "";
};




// Dark mode

const lightDarkBtn = document.querySelector("#light-dark-button")
const body = document.querySelector("body")

lightDarkBtn.addEventListener("click", toggleLightDark)

function toggleLightDark() {
    body.className = body.className === "dark" ? "" : "dark"
  }

function checkDarkPref() {
    if (
      window.matchMedia("(prefers-color-scheme:dark)").matches &&
      body.className !== "dark"
    ) {
      toggleLightDark()
    }
  }

checkDarkPref()