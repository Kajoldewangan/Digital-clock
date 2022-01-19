setInterval(() => {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");

  let date = new Date();
  let htime = date.getHours();
  let mtime = date.getMinutes();
  let stime = date.getSeconds();

  let hrotation = 30 * htime + mtime / 2;
  let mrotation = 6 * mtime;
  let srotation = 6 * stime;

  hours.style.transform = `rotate(${hrotation}deg)`;
  minutes.style.transform = `rotate(${mrotation}deg)`;
  seconds.style.transform = `rotate(${srotation}deg)`;
}, 1000);
