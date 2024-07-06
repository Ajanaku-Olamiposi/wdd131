const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `${today.getFullYear()}`;
const lastModified = document.querySelector("#lastmodified");
const date = new Date(document.lastModified);
lastModified.innerHTML = `Last Modified: <span>${new Intl.DateTimeFormat("en-US",).format(date)}</span>`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
});