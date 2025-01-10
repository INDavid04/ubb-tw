function drawTable(nrows, ncols) {
    /* 
       1. Generați un tabel cu 'nrows' rânduri și 'ncols' coloane 
       și adăugați-l în div-ul cu id-ul 'container'. 
    */
    let container = document.querySelector('#container');
    let tbl = document.createElement('table');
    tbl.setAttribute('id', 'myTable');
    for (let i = 0; i < nrows; i++) {
        let tr = document.createElement('tr');
        tr.setAttribute('id', 'row' + i);
        for (let j = 0; j < ncols; j++) {
            let cell = document.createElement('td');
            cell.classList.add('r' + i, 'c' + j);
            cell.addEventListener('click', clickCellListener);
            tr.appendChild(cell);
        }
        tbl.appendChild(tr);
    }
    container.appendChild(tbl);
}
    
function colorCol(column, color) {
    /*
        2. Colorați coloana 'column' din tabla de desenat cu culoarea 'color'.
    */
    let elements = document.getElementsByClassName('c' + column) /* elements pentru ca avem un array */
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = color;
    }
}

function colorRow(row, color) {
    /*
        2. Colorați rândul 'row' din tabla de desenat cu culoarea 'color'.
    */
   let elements = document.getElementsByClassName('r' + row);
   for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = color;
   }
}

function rainbow(target) {
    let colors = ["rgb(255, 0, 0)", "rgb(255, 154, 0)", "rgb(240, 240, 0)", "rgb(79, 220, 74)", "rgb(63, 218, 216)", "rgb(47, 201, 226)", "rgb(28, 127, 238)", "rgb(95, 21, 242)", "rgb(186, 12, 248)", "rgb(251, 7, 217)"];
    /*
        3. Desenați un curcubeu pe verticală sau orizontală conform argumentului 'target' folosind culorile din 'colors' și funcțiile 'colorCol' și 'colorRow'.     
    */
    if (target === 'row') {
        let noRows = document.getElementsByTagName('tr').length;
        let noItems = Math.floor(noRows/colors.length);
        for (let i = 0; i < colors.length; i++) {
            for (let j = i * noItems; j < (i + 1) * noItems; j++) {
                colorRow(j, colors[i]);
            }
        }
    } else {
        let noCols = document.getElementsByTagName('td').length;
        let noItems = Math.floor(noCols/colors.length);
        for (let i = 0; i < colors.length; i++) {
            for (let j = i * noItems; j < (i + 1) * noItems; j++) {
                colorCol(j, colors[j]);
            }
        }
    }
}

function getNthChild(element, n) {
    /*
        4. Întoarceți al n-lea element copil al unui element dat ca argument.
    */
    let child = element.firstElementChild;
    for (i = 0; i < n - 1; i++) {
        child = child.firstElementChild;
    }
    return child; // sau return element.children[n];
}

function drawPixel(row, col, color) {	
    /*
        5. Colorați celula de la linia 'row' și coloana 'col' cu culoarea `color'.
    */
    // My solution
    // let pixelColorat = getNthChild(document.querySelector('table'))
    // pixelColorat = getNthChild(pixelColorat, col)
    // pixelColorat.style.backgroundColor = color;
    let cell_row = document.getElementsByClassName('r' + row);
    let cell = cell_row[col];
    cell.style.backgroundColor = color;
}

function drawLine(r1, c1, r2, c2, color) {
    /*
        6. Desenați o linie (orizontală sau verticală) de la celula aflată 
        pe linia 'r1', coloana 'c1' la celula de pe linia 'r2', coloana 'c2'
        folosind culoarea 'color'. 
        Hint: verificați mai întâi că punctele (r1, c1) și (r2, c2) definesc
        într-adevăr o linie paralelă cu una dintre axe.
    */
    // My solution    
    // if (r1 === r2) {
    //     let cell_row = document.getElementsByName('r'+r1);
    //     for (let i = c1; i < c2; i++) {
    //         drawPixel(r1, i);
    //     }
    // }
    if (r1 === r2) {
        for (let i = c1; i <= c2; i++) {
            drawPixel(r1, i, color);
        }
    }
    if (c1 == c2) {
        for (let i = r1; i <= r2; i++) {
            drawPixel(i, c1, color);
        }
    }
}

function drawRect(r1, c1, r2, c2, color) {
    /*
        7. Desenați, folosind culoarea 'color', un dreptunghi cu colțul din 
        stânga sus în celula de pe linia 'r1', coloana 'c1', și cu 
        colțul din dreapta jos în celula de pe linia 'r2', coloana 'c2'.
    */
   for (let i = r1; i <= r2; i++) {
        for (let j = c1; j <= c2; j++) {
            drawPixel(i, j, color);
        }
   }
}

function drawPixelExt(row, col, color, rows, cols) {
    /*
        8. Colorați celula de la linia 'row' și coloana 'col' cu culoarea 'color'.
        Dacă celula nu există, extindeți tabla de desenat în mod corespunzător.
    */
    if (row < rows && cols < 20) {
        drawPixel(row, col, color);
    } else {
        plus_row = row - rows;
        plus_col = col - cols;
        // console.log(`Extindem cu ${plus_row} randuri si ${plus_col} coloane!`);
        let tbl = document.querySelector('table');
        // Extindem in dreapta cu plus_col coloane
        for (let i = 0; i < rows; i++) {
            let tr = document.getElementById('row' + i);
            for (let j = cols; j < cols + plus_col; j++) {
                let cell = document.createElement('td');
                cell.classList.add('r' + i, 'c' + j);
                tr.appendChild(cell);
            }
        }
        // Extindem in jos cu plus_row randuri si 20+plus_col coloane
        for (let i = rows; i < rows + plus_row; i++) {
            let tr = document.createElement('tr');
            tr.classList.add('row' + i);
            for (let j = 0; j < cols + plus_col; j++) {
                let cell = document.createElement('td');
                cell.classList.add('r' + i, 'c' + j);
                tr.appendChild(cell);
            }
            tbl.appendChild(tr);
        }
        container.appendChild(tbl);
        drawPixel(row - 1, col - 1, color);
    }
}

function colorMixer(colorA, colorB, amount){
    let cA = colorA * (1 - amount);
    let cB = colorB * (amount);
    return parseInt(cA + cB);
}

function drawPixelAmount(row, col, color, amount) {
    /* 
        9. Colorați celula la linia 'row' și coloana 'col' cu culoarea 'color'
        în funcție de ponderea 'amount' primită ca argument (valoare între 0 și 1). 
        Dacă 'amount' are valoarea:
        1, atunci celula va fi colorată cu 'color'
        0, atunci celula își va păstra culoarea inițială
        pentru orice altă valoare, culoarea inițială și cea dată de argumentul 
        'color' vor fi amestecate. De exemplu, dacă ponderea este 0.5, atunci 
        culoarea inițială și cea nouă vor fi amestecate în proporții egale (50%). 
        */

        /*   
        Hint 1: folosiți funcția colorMixer de mai sus.

        Hint 2: pentru un argument 'color' de forma 'rgb(x,y,z)' puteți folosi
        let newColorArray = color.match(/\d+/g); 
        pentru a obține un Array cu trei elemente, corespunzătoare valorilor
        asociate celor trei culori - newColorArray = [x, y, z]
        
        Hint 3: pentru a afla culoarea de fundal a unui element puteți folosi
        metoda getComputedStyle(element). Accesând proprietatea backgroundColor 
        a obiectului întors, veți obține un string de forma 'rgb(x,y,z)'.
    */
}

function delRow(row) {
    /*
        10. Ștergeți linia cu numărul 'row' din tabla de desenat.
    */
}

function delCol(col) {
    /*
        10. Ștergeți coloana cu numărul 'col' din tabla de desenat.
    */
}

function shiftRow(row, pos) {
    /*
        11. Aplicați o permutare circulară la dreapta cu 'pos' poziții a
        elementelor de pe linia cu numărul 'row' din tabla de desenat. 
    */
}

function jumble() {
    /*
        12. Folosiți funcția 'shiftRow' pentru a aplica o permutare circulară
        cu un număr aleator de poziții fiecărei linii din tabla de desenat.
    */
}

function transpose() {
    /*
        13. Transformați tabla de desenat în transpusa ei.
    */
}

function flip(element) {
    /*
        14. Inversați ordinea copiilor obiectului DOM 'element' primit ca argument.
    */
}

function mirror() {
    /*
        15. Oglindiți pe orizontală tabla de desenat: luați jumătatea stângă a tablei, 
        aplicați-i o transformare flip și copiați-o în partea dreaptă a tablei.
    */
}

function smear(row, col, amount) {
    /*
        16. Întindeți culoarea unei celule de pe linia 'row' și coloana 'col' în celulele
        învecinate la dreapta, conform ponderii date de 'amount' (valoare între 0 și 1).
        Cu colorarea fiecărei celule la dreapta, valoarea ponderii se înjumătățește. 
        Hint: folosiți funcția 'drawPixelAmount'.
    */
}

function clickCellListener (event) {
    row = this.classList[0].slice(1);
    col = this.classList[1].slice(1);
    let color = document.getElementById('picker').value;
    // console.log(color);
    drawPixel(row, col, color);
}

window.onload = function(){
    const rows = 20;
    const cols = 20;	
    drawTable(rows, cols);
    colorCol(10, "red");
    colorRow(4, "brown");
    rainbow("col");
    let cont = document.getElementById('container');
    console.log(getNthChild(cont, 2));
    drawPixel(4, 7, 'yellow');
    drawLine(1, 4, 1, 7, 'blue');
    drawRect(1, 5, 4, 10, 'green');
    drawPixelExt(40, 50, 'magenta', rows, cols);
}