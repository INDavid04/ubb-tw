# tehnici-web
The project is from ubb bucharest university

## JS templates

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
}
window.onload = function(){
    document.body.addEventListener('keydown', keyDownListener); // In loc de 'keydown', putem avea si 'click'
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

### Add class to an element
```
let patrat = document.createElement('div');
patrat.classList.add('r' + i, 'c' + j);
```

### Append child to an element
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

### Start a server with python3
```
// Trebuie sa fim in acelasi folder cu fisierul json
$ cd ./unde-am-fisierul-json
$ python3 -m http.server
```
### Run code after some time or at some interval
```
setTimeout(() => { 
    // code here
}, 5000); // after 5 seconds

setInterval(() => { 
    // code here
}, 5000); // every 5 seconds
```

### Get style, property with getComputedSyle and getPropertyValue
```
let vizorWidth = parseInt(window.getComputedStyle(document.getElementById("vizor")).getPropertyValue('width'));
```

### Save something to local storage
```
localStorage.setItem("bgcolor", document.getElementById("culoare").value);
```

### Get something from local storage
```
const currentColor = localStorage.getItem("bgcolor");
```

### Parse and Stringify
```
window.onload = function() {
    const parser = new DOMParser();
    const xmlString = `<cinemateca>
    <film gen="drama">
        <titlu limba="ro">The war within</titlu>
        <regizor>Brett Varvel</regizor>
    </film>
</cinemateca>`;
    const xmlDoc = parser.parseFromString(xmlString, "application/xml");
    console.log(xmlDoc);

    const json = parseNode(xmlDoc.documentElement);
    console.log(json);

    console.log(JSON.stringify(json, null, 2));
}
```