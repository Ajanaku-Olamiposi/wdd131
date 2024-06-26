const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;