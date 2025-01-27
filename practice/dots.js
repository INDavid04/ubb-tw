const body = document.getElementsByClassName("SectionBody")[0];

function keyDownListener(event) {
    const div = document.createElement('div');

    switch(event.key) {
        case 'r':
            div.style.backgroundColor = "red";
            break;
        case 'g':
            div.style.backgroundColor = "green";
            break;
        case 'y':
            div.style.backgroundColor = "yellow";
            break;
        case 'b':
            div.style.backgroundColor = "blue";
            break;
        default:
            return ;
    }
    
    const size = document.getElementById("size");
    let bodyWidth = parseInt(window.getComputedStyle(body).getPropertyValue('width'));
    let bodyHeight = parseInt(window.getComputedStyle(body).getPropertyValue('height'));
    bodyWidth -= 150;
    bodyHeight -= 150;
    let top = Math.floor(Math.random()*bodyHeight);
    let left = Math.floor(Math.random()*bodyWidth);
    top = top.toString();
    left = left.toString();

    body.style.position = "relative";
    body.style.display = "block";
    body.style.height = "50vh";
    div.style.display = "inline-block";
    div.style.position = "absolute";
    div.style.borderRadius = "50%";
    div.style.top = top + "px";
    div.style.left = left + "px";
    div.style.width = size.value + "px";
    div.style.height = size.value + "px";

    div.addEventListener('click', clickListener);

    body.appendChild(div);

    // Saving number of dots to local storage
    let numberOfDots = parseInt(localStorage.getItem("numberOfDots"));
    if (numberOfDots) {
        localStorage.setItem("numberOfDots", numberOfDots + 1);
    } else {
        localStorage.setItem("numberofDots", 1);
    }
    const numberHolder = document.getElementById("number_holder");
    numberHolder.setAttribute('id', 'number_holder');
    numberHolder.innerHTML = localStorage.getItem("numberOfDots");
}

function clickListener(event) {
    const div = document.createElement("div");
    let bodyWidth = parseInt(window.getComputedStyle(body).getPropertyValue('width'));
    let bodyHeight = parseInt(window.getComputedStyle(body).getPropertyValue('height'));
    bodyWidth -= 150;
    bodyHeight -= 150;
    let top = Math.floor(Math.random()*bodyHeight);
    let left = Math.floor(Math.random()*bodyWidth);
    top = top.toString();
    left = left.toString();

    div.style.backgroundColor = event.target.style.backgroundColor;
    div.style.width = event.target.style.width;
    div.style.height = event.target.style.height;
    div.style.display = "inline-block";
    div.style.position = "absolute";
    div.style.borderRadius = "50%";
    div.style.top = top + "px";
    div.style.left = left + "px";

    div.addEventListener('click', clickListener);

    body.appendChild(div);

    // Saving number of dots to local storage
    let numberOfDots = parseInt(localStorage.getItem("numberOfDots"));
    if (numberOfDots) {
        localStorage.setItem("numberOfDots", numberOfDots + 1);
    } else {
        localStorage.setItem("numberofDots", 1);
    }
    const numberHolder = document.getElementById("number_holder");
    numberHolder.setAttribute('id', 'number_holder');
    numberHolder.innerHTML = localStorage.getItem("numberOfDots");
}

window.onload = function(){
    // Size of the dot
    const sizeContainer = document.createElement("div");
    const size = document.createElement('input');
    const sizeText = document.createElement("span");
    
    sizeText.innerHTML = "Size of the dot";
    size.setAttribute('type', 'range');
    size.setAttribute('id', 'size');
    size.setAttribute('min', '20');
    size.setAttribute('max', '150');
    size.setAttribute('value', '20')
    sizeContainer.style.display = "flex";
    sizeContainer.style.gap = "1rem";
    
    sizeContainer.appendChild(sizeText);
    sizeContainer.appendChild(size);
    body.appendChild(sizeContainer);

    // Number of the dots
    const numberContainer = document.createElement("div");
    const numberText = document.createElement("span");
    const numberHolder = document.createElement("span");
    
    numberText.innerHTML = "Number of the dots:"
    numberHolder.setAttribute('id', 'number_holder');
    numberHolder.innerHTML = localStorage.getItem("numberOfDots");
    numberContainer.style.display = "flex";
    numberContainer.style.gap = "1rem";

    numberContainer.appendChild(numberText);
    numberContainer.appendChild(numberHolder);
    body.appendChild(numberContainer);
    
    document.body.addEventListener('keydown', keyDownListener);
}
