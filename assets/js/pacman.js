window.onload = function () {
  var starttime = Date.now();
  window.requestAnimationFrame(draw);

  function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const context = canvas.getContext("2d");

      context.save();
      context.clearRect(0, 0, 300, 300);

      context.fillStyle = "#f2d648";
      context.beginPath();
      context.arc(100, 100, 50, 0, 360);
      context.fill();

      context.fillStyle = "black";
      context.beginPath();
      context.arc(110, 75, 5, 0, 360);
      context.fill();

      context.fillStyle = "black";
      context.beginPath();
      let nowtime = Date.now();
      let angle = ((nowtime - starttime) / 4) % 200;
      if (angle >= 100) {
        angle = 200 - angle;
      }

      angle = (angle / 100) * 0.15;
      context.arc(
        100,
        100,
        50,
        (1.85 + angle) * Math.PI,
        (0.15 - angle) * Math.PI
      );
      context.lineTo(100, 100);
      context.fill();

      context.beginPath();
      let left = ((nowtime - starttime) / 12) % 100;
      context.arc(200 - (left / 2 + 10), 100, 10, 0, 360);
      context.fillStyle =
        "rgba(255, 255, 255," +
        (1 - (((nowtime - starttime) / 12) % 100) / 100 / 2) +
        ")";
      context.fill();

      context.restore();
      window.requestAnimationFrame(draw);
    }
    // folosiți diferența nowtime - starttime pentru animație
  }
};
