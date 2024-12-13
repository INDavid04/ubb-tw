function keyDownListener(event) {
    let image = document.getElementById("img");
    let container = document.getElementById("container");
    let height = parseInt(window.getComputedStyle(image).getPropertyValue('height'));
    let vizorHeight = parseInt(window.getComputedStyle(document.getElementById("vizor")).getPropertyValue('height'));
    let width = parseInt(window.getComputedStyle(image).getPropertyValue('width'));
    let vizorWidth = parseInt(window.getComputedStyle(document.getElementById("vizor")).getPropertyValue('width'));

    switch(event.key) {
        case 'ArrowDown':
            let currentMarginDown = parseInt(window.getComputedStyle(image).getPropertyValue('margin-top'));
            if (currentMarginDown - 10 > vizorHeight - height) {
                image.style.marginTop = currentMarginDown - 10 + 'px';
            }
            break;
        case 'ArrowUp':
            let currentMarginUp = parseInt(window.getComputedStyle(image).getPropertyValue('margin-bottom'));
            if (currentMarginUp - 10 > vizorHeight - height) {
                image.style.marginTop = currentMarginUp - 10 + 'px';
            }
            break;
        case 'ArrowLeft':
            let currentMarginLeft = parseInt(window.getComputedStyle(image).getPropertyValue('margin-right'));
            if (currentMarginLeft - 10 > vizorWidth - height) {
                image.style.marginTop = currentMarginLeft - 10 + 'px';
            }
            break;
        case 'ArrowRight':
            let currentMarginRight = parseInt(window.getComputedStyle(image).getPropertyValue('margin-left'));
            if (currentMarginRight - 10 > vizorWidth - height) {
                image.style.marginTop = currentMarginRight - 10 + 'px';
            }
            break;
        case '=':
            currentScale = Number(window.getComputedStyle(image).getPropertyValue('scale'));
            if (isNaN(currentScale)) {
                currentScale = 1;
            }
            image.style.scale = currentScale + 0.05;
            break;
        case 's':
            shot();
            break;
        case 't':
            setTimeout(() => { console.log("Timeout: 5s"); shot(); }, 5000);
            timer = document.getElementById("timer");
            timer.style.fontSize = '40px';
            timer.style.color = "white";
            timer.innerHTML = "Timer";
            for (let i = 5; i > 0; i--) {
                setTimeout(() => {}, 1000);
                timer.innerHTML += i;
            }
    }
}

function shot() {
    let container = document.getElementById("container");
    cloneImage = container.cloneNode(true);
    cloneImage.style.scale = 0.5;
    cloneImage.style.marginTop = -350;
    document.getElementById("gallery").appendChild(cloneImage);
}

window.onload = function(){
    document.body.addEventListener('keydown', keyDownListener);
}