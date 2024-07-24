function updateTime() {
  let aucklandElement = document.querySelector("#auckland");
  if (aucklandElement) {
    let aucklandDateElement = aucklandElement.querySelector(".date");
    let aucklandTimeElement = aucklandElement.querySelector(".time");
    let aucklandTimeZone = moment().tz("Pacific/Auckland");

    aucklandDateElement.innerHTML = aucklandTimeZone.format("MMMM Do, YYYY");
    aucklandTimeElement.innerHTML = aucklandTimeZone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let bangkokElement = document.querySelector("#bangkok");
  if (bangkokElement) {
    let bangkokDateElement = bangkokElement.querySelector(".date");
    let bangkokTimeElement = bangkokElement.querySelector(".time");
    let bangkokTimeZone = moment().tz("Asia/Bangkok");

    bangkokDateElement.innerHTML = bangkokTimeZone.format("MMMM Do, YYYY");
    bangkokTimeElement.innerHTML = bangkokTimeZone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current-time-zone") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
   <div class="city-container">
          <div class="city">
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city-dropdown");
citySelectElement.addEventListener("change", updateCity);
