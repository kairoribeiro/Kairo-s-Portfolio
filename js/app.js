//External JS File

//import

import { projectData } from "./preject-data.js"

const cardContainer = document.getElementById('card-container')



let projectMarkup = projectData.map(project =>
  `
  <div class="project-container project-card">
    <img src=${project.image} alt="future-project" loading="lazy" class="project-pic"/>
    <h3 class="project-title">${project.title}</h3>
    <button id="work1Btn"><a href="${project.deployment}" target="_blank">Check Here</a></button>
    <button id="work1Btn"><a href="${project.github}" target="_blank">GitHub</a></button>
  </div>
  `
  ).join('')

cardContainer.innerHTML = projectMarkup




// Work Buttons

// document.getElementById("work1Btn").onclick = function () {
//     location.href = "";
// };

// document.getElementById("work2Btn").onclick = function () {
//     location.href = "https://kairo1.netlify.app/"; 
// };

// document.getElementById("work3Btn").onclick = function () {
//     location.href = "";
// };




// // Dark mode

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






//Button back to top

const topBtn = document.getElementById("to-top")
const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'})

topBtn.addEventListener('click', toTop)


















// 

// function toTop() {
//   window.scrollTo({top: 0, behavior: 'smooth'});
// }


// document.documentElement.scrollTop = 0;
