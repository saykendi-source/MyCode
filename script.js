function updateClock() {
  const now = new Date();
  const time = new Intl.DateTimeFormat("id-ID", {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(now).replace(".", ":");

  const clock = document.getElementById("clock");
  if (clock) clock.textContent = time;
}
updateClock();
setInterval(updateClock, 1000);
