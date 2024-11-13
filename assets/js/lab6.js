//2/ Folosind prompt, afișați mesajul "Hai să jucăm X și 0. Cum te cheamă?" și salvați răspunsul într-o variabilă.
let nume = prompt("Hai să jucăm X și 0. Cum te cheamă?")
console.log(nume)

//3/Afișați mesajul "Bună, < nume >. Cu ce vrei să joci? X sau 0? X începe primul." și salvați răspunsul într-o variabilă.
let semn = prompt(`Buna ${nume}! Cu ce vrei să joci? X sau 0? X începe primul.`)
console.log(`Ai ales sa joci cu ${semn}`)

//4/ Folosiți un Array pentru a reprezenta tabla de joc. Arrayul constă din 9 Stringuri: primele 3 elemente reprezintă prima linie a tablei de joc, următoarele 3, a doua linie, iar ultimele 3, linia 3. Inițializați fiecare element cu Stringul "?", indicând faptul că toate cele 9 celule sunt goale. Hint: folosiți o instrucțiune de tip for.
var tabla = ['?', '?', '?', '?', '?', '?', '?', '?', '?']
console.log(tabla)

/*5/ Scrieți o funcție printtt care să returneze o reprezentare ASCII a tablei de joc. De exemplu, pentru tabla ["?", "?", "X", "?", "0", "?", "?", "?", "?"], ar putea returna
| 1 | 2 | X |
| 4 | 0 | 6 |
| 7 | 8 | 9 |.
În reprezentarea de mai sus, în fiecare celulă scriem X dacă Array-ul conține stringul "X" la acea poziție, 0 dacă conține stringul "0", sau poziția ei, dacă celula este goală (adică Array-ul conține "?" la acea poziție).*/
function printtt() {
    var result = "|";
    for (let i = 0; i < tabla.length; i++) {
        if (tabla[i] === '?') {
            result += i + 1;
            result += '|';
        } else {
            result += tabla[i];
            result += "|"
        }
        if ((i + 1) % 3 === 0 && i !== tabla.length - 1) {
            result += '\n';
            result += '|'
        }
    }
    return result;
}
console.log(printtt());

//6/ Începem să jucăm X și 0 singuri, fără adversar. Folosind prompt, afișați tabla de joc și mesajul "Unde vrei să pui următorul semn?". Salvați într-o variabilă poziția din tablă.
let pozitie;
function puneSemnPeTabla() {
    pozitie = prompt("Unde vrei să pui următorul semn?\n" + printtt())
}
puneSemnPeTabla();

//7/ Scrieți o funcție valid care verifică dacă poziția dată de jucător este validă: dacă este o poziție din tablă (un număr cuprins între 1 și 9) și dacă celula de la poziția respectivă este goală. Funcția trebuie să returneze o valoare booleană
function valid() {
    return (pozitie > 0 && pozitie < 10);
}
// alert(valid());

//8/ Dacă poziția introdusă de jucător nu este validă, trebuie să afișați un mesaj de atenționare și să repetați pasul 6. Dacă poziția este validă, adăugați semnul jucătorului în tabla de joc și repetați pasul 6.
while (valid()) {
    if (valid() === true) {
        tabla[pozitie - 1] = semn;
        puneSemnPeTabla();
    } else {
        alert("Ati introdus o valoare gresita pentru semn! Te rog sa alegi un numar cuprins intre 1 si 9");
        puneSemnPeTabla();
    }
}

//9/ Scrieți o funcție win care verifică dacă tabla este într-o configurație de câștig (dacă există 3 simboluri de X sau 0 identice pe același rând, pe aceeași coloană, ori pe o diagonală) și care returnează simbolul câștigător.
   