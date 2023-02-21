const hourEl = document.getElementById("hour")
const minutesEl =document.getElementById("minutes")
const secoundEl = document.getElementById("secounds")
const ampmEl = document.getElementById("ampm")


function updateClock() {
 let ho = new Date().getHours();
 
 let m = new Date().getMinutes();
 let s = new Date().getSeconds();
 let ampm = "AM"

  if(ho > 12){
    ho = ho - 12
    ampm = "PM";
  }

  ho = ho < 10 ? "0" + ho : ho;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = ho;
  minutesEl.innerText = m;
  secoundEl.innerText = s
  ampmEl.innerText = ampm;
  setTimeout(() =>{
    updateClock()

  },1000)
  
}
updateClock()