window.onload = function () {
  const canvas = document.getElementById("canvas");
  draw();
  setInterval(draw, 1000);

  function draw() {
    /* puteți folosi fontul digital-clock-font astfel:
       ctx.font = '75pt digital-clock-font'; */
    const context = canvas.getContext("2d");
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let ampm = h < 12 ? "AM" : "PM";

    h = h % 12;
    h = h === 0 ? 12 : h;

    h = addLeadingZeros(h);
    m = addLeadingZeros(m);
    s = addLeadingZeros(s);

    const text = h + ":" + m + ":" + s + " " + ampm;
    console.log(text);
    context.fillStyle = "red";
    context.font = "75pt digital-clock-font";
    context.fillText(text, 20, 80);
    context.strokeText(text, 20, 80);
  }

  function addLeadingZeros(n) {
    return (n < 10 ? "0" : "") + n;
  }
};
