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

    body.appendChild(div);
}

window.onload = function(){
    const size = document.createElement('input');
    size.setAttribute('type', 'range');
    size.setAttribute('id', 'size');
    size.setAttribute('min', '20');
    size.setAttribute('max', '150');
    size.setAttribute('value', '20')
    body.appendChild(size);

    document.body.addEventListener('keydown', keyDownListener);
}
