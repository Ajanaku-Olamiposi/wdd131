const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `${today.getFullYear()}`;
const lastModified = document.querySelector("#lastmodified");
const date = new Date(document.lastModified);
lastModified.innerHTML = `Last Modified: <span>${new Intl.DateTimeFormat("en-US",).format(date)}</span>`;

const products = [
  {
    id: 'fc-1888',
    name: "Flux capacitor",
    avgRating: 4.5
  },
  {
    id: 'fc-2050',
    name: "Power laces",
    avgRating: 4.7
  },
  {
    id: 'fs-1987',
    name: "Time circuits",
    avgRating: 3.5
  },
  {
    id: 'ac-2000',
    name: "Low voltage reactor",
    avgRating: 3.9
  },
  {
    id: 'jj-1969',
    name: "Warp equalizer",
    avgRating: 5.0
  }
];

const selectElement = document.getElementById('product');

    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      selectElement.appendChild(option);
 });



 