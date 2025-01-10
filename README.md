# tehnici-web
The project is from ubb bucharest university

## JS templates
Code examples from laboratories

### Event listener on keyboard pressed
```
function keyDownListener(event) {
    switch(event.key) {
        case 'ArrowDown':
            // code here
            break;
        case 'a':
            // code here
            break;
}
// In loc de 'keydown', putem avea si 'click'
window.onload = function(){
    document.body.addEventListener('keydown', keyDownListener);
}
```

### Clone node
```
function shot() {
    let container = document.getElementById("container");
    cloneImage = container.cloneNode(true);
    cloneImage.style.scale = 0.5;
    cloneImage.style.marginTop = -350;
    document.getElementById("gallery").appendChild(cloneImage);
}
```

### Get the width of an element
```
let width = parseInt(window.getComputedStyle(document.getElementById("img")).getPropertyValue('width'));
```

### Create an element with attribute
```
let h1 = document.createElement('h1');
h1.setAttribute('id', 'title');
```

### Adaugarea unei/unor clase pe un element
```
let patrat = document.createElement('div');
patrat.classList.add('r' + i, 'c' + j);
```

### Adaugarea unui copil intr-un elemet
```
/* HTML Code:
<tr>
    <td></td>
</tr>
*/
let tr = document.createElement('tr');
let td = document.createElement('td');
tr.appendChild(td);
```