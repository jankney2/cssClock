function updateCss() {
  let d = new Date();
  console.log(d)
  seconds = ((d.getSeconds()/60)*360)+90;
  minutes = d.getMinutes()/60*360+90;
  hours = d.getHours()/12*360+90 ;



  console.log(seconds, minutes, hours)
  //update position of hands to match

  document.getElementsByClassName(
    "secondHand"
  )[0].style.transform = `rotate(${seconds}deg)`;
  document.getElementsByClassName(
    "minuteHand"
  )[0].style.transform = `rotate(${minutes}deg)`;
  document.getElementsByClassName(
    "hourHand"
  )[0].style.transform = `rotate(${hours}deg)`;
}

setInterval(() => {
  updateCss();
}, 1000);
