window.onload = function () {
  const canvas = document.getElementById("canvdoor");
  canvas.addEventListener("click", colorBlack);

  draw();

  function draw() {
    // desenăm ușa roșie
    if (canvas.getContext) {
      const context = canvas.getContext("2d");
      context.fillStyle = "red";
      context.fillRect(25, 25, 140, 200);
      context.clearRect(35, 35, 120, 200);

      context.beginPath();
      context.moveTo(40, 40);
      context.lineTo(125, 15);
      context.lineTo(125, 250);
      context.lineTo(40, 225);
      context.fillStyle = "red";
      context.fill();

      context.beginPath();
      context.ellipse(108, 150, 5, 7, 0, 0, 360);
      context.fillStyle = "white";
      context.fill();

      context.beginPath();
      context.moveTo(40, 39);
      context.lineTo(125, 12);
      context.lineTo(125, 250);
      context.strokeStyle = "white";
      context.lineWidth = 4;
      context.stroke();
    }
  }

  function colorBlack() {
    // colorăm ușa în negru
    if (canvas.getContext) {
      const context = canvas.getContext("2d");
      context.fillStyle = "red";
      context.fillRect(25, 25, 140, 200);
      context.clearRect(35, 35, 120, 200);

      context.beginPath();
      context.moveTo(40, 40);
      context.lineTo(125, 15);
      context.lineTo(125, 250);
      context.lineTo(40, 225);
      context.fillStyle = "black";
      context.fill();

      context.beginPath();
      context.ellipse(108, 150, 5, 7, 0, 0, 360);
      context.fillStyle = "white";
      context.fill();

      context.beginPath();
      context.moveTo(40, 39);
      context.lineTo(125, 12);
      context.lineTo(125, 250);
      context.strokeStyle = "white";
      context.lineWidth = 4;
      context.stroke();
    }
  }
};
