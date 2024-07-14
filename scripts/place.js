const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `${today.getFullYear()}`;
const lastModified = document.querySelector("#lastmodified");
const date = new Date(document.lastModified);
lastModified.innerHTML = `Last Modified: <span>${new Intl.DateTimeFormat("en-US",).format(date)}</span>`;

const calculateWindChill = (temperature, windSpeed) => {
    const windChill =  13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
    return windChill;
  };
  const temperatureInCelsius = 10;
  const windSpeedInKmph = 5;
  const result = calculateWindChill(temperatureInCelsius, windSpeedInKmph);
  
  const listItem = document.createElement('li');
  listItem.textContent = `Wind chill: ${result.toFixed(2)}°C`;
  
  const listContainer = document.getElementById('windChillList');
  listContainer.appendChild(listItem);
