function updateTime() {
  let aucklandElement = document.querySelector("#auckland");
  let aucklandDateElement = aucklandElement.querySelector(".date");
  let aucklandTimeElement = aucklandElement.querySelector(".time");
  let aucklandTimeZone = moment().tz("Pacific/Auckland");

  aucklandDateElement.innerHTML = aucklandTimeZone.format("MMMM Do, YYYY");
  aucklandTimeElement.innerHTML = aucklandTimeZone.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let bangkokElement = document.querySelector("#bangkok");
  let bangkokDateElement = bangkokElement.querySelector(".date");
  let bangkokTimeElement = bangkokElement.querySelector(".time");
  let bangkokTimeZone = moment().tz("Asia/Bangkok");

  bangkokDateElement.innerHTML = bangkokTimeZone.format("MMMM Do, YYYY");
  bangkokTimeElement.innerHTML = bangkokTimeZone.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
