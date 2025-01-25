//2/ Folosind prompt, afișați mesajul "Hai să jucăm X și 0. Cum te cheamă?" și salvați răspunsul într-o variabilă.
let nume = prompt("Hai să jucăm X și 0. Cum te cheamă?")
console.log("Te cheama " + nume + "!")

//3/Afișați mesajul "Bună, < nume >. Cu ce vrei să joci? X sau 0? X începe primul." și salvați răspunsul într-o variabilă.
let semn = prompt(`Buna ${nume}! Cu ce vrei să joci? X sau 0? X începe primul.`)
if (semn == 'x') {
    semn = 'X';
}
console.log(`Ai ales sa joci cu ${semn}.`)

//4/ Folosiți un Array pentru a reprezenta tabla de joc. Arrayul constă din 9 Stringuri: primele 3 elemente reprezintă prima linie a tablei de joc, următoarele 3, a doua linie, iar ultimele 3, linia 3. Inițializați fiecare element cu Stringul "?", indicând faptul că toate cele 9 celule sunt goale. Hint: folosiți o instrucțiune de tip for.
var tabla = ['?', '?', '?', '?', '?', '?', '?', '?', '?']
console.log("Array cu 9 de semnul intrebarii:");
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
console.log("Tabla X si 0:")
console.log(printtt());

//6/ Începem să jucăm X și 0 singuri, fără adversar. Folosind prompt, afișați tabla de joc și mesajul "Unde vrei să pui următorul semn?". Salvați într-o variabilă poziția din tablă.
let pozitie;
function puneSemnPeTabla() {
    pozitie = prompt("Unde vrei să pui următorul semn?\n" + printtt())
}
puneSemnPeTabla();

///////////////////////////////////////////////////////////////
// TODO: contiune from here with the correction of the code; //
///////////////////////////////////////////////////////////////

//7/ Scrieți o funcție valid care verifică dacă poziția dată de jucător este validă: dacă este o poziție din tablă (un număr cuprins între 1 și 9) și dacă celula de la poziția respectivă este goală. Funcția trebuie să returneze o valoare booleană
function valid(tabla, pozitie) {
    return (pozitie > 0 && pozitie < 10 && tabla[pozitie] != '?');
    alert("Nu exista sau este deja luata pozitia! Alege intre 1 si 9 si pozitia sa fie goala!");
}
// alert(valid());

// 8/ Dacă poziția introdusă de jucător nu este validă, trebuie să afișați un mesaj de atenționare și să repetați pasul 6. Dacă poziția este validă, adăugați semnul jucătorului în tabla de joc și repetați pasul 6.
while (valid(tabla, pozitie - 1)) {
    if (valid(tabla, pozitie) === true) {
        tabla[pozitie - 1] = semn;
        puneSemnPeTabla();
    } else {
        alert("Ati introdus o valoare gresita pentru semn! Te rog sa alegi un numar cuprins intre 1 si 9");
        puneSemnPeTabla();
    }
}

//9/ Scrieți o funcție win care verifică dacă tabla este într-o configurație de câștig (dacă există 3 simboluri de X sau 0 identice pe același rând, pe aceeași coloană, ori pe o diagonală) și care returnează simbolul câștigător.
   
///////////////////
// FMI Materials //
///////////////////

// function get_value(table, index)
// {
//     return (table[index] == '?' ? index + 1 : table[index]);
// }

// function convert(number)
// {
//     var coord = {};
//     coord.x = Math.floor(number / 3);
//     coord.y = number % 3;
//     return coord;
// }

// class Table
// {
//     constructor()
//     {
//         this.table = [];
//         for (let i = 0; i < 9; ++i)
//         {
//             this.table[i] = '?';
//         }
//     }

//     set_value(number, value)
//     {
//         this.table[number] = value;
//     }

//     printtt(player_name, player_symbol)
//     {
//         var ascii_table = "";
//         for (let i = 0; i < 3; ++i)
//         {
//             ascii_table += " | " + get_value(this.table, 3 * i) + 
//                            " | " + get_value(this.table, 3 * i + 1) +
//                            " | " + get_value(this.table, 3 * i + 2) + " |";
//             if (i == 1)
//             {
//                 ascii_table += "           ";
//                 if (player_symbol == "X")
//                 {
//                     ascii_table += player_name + " (X) - Computer (0)\n";
//                 }
//                 else
//                 {
//                     ascii_table += "Computer (X) - " + player_name + " (0)\n";
//                 }
//             }
//             else
//             {
//                 ascii_table += "\n";
//             }
//         }
//         return ascii_table;
//     }

//     valid(number)
//     {
//         return (number > 0 && this.table[number - 1] == '?');
//     }

//     check_row(number)
//     {
//         var coord = convert(number);
//         var symbol = this.table[number];
//         for (let i = 0; i < 3; ++i)
//         {
//             if (this.table[3 * coord.x + i] != symbol)
//             {
//                 return false;
//             }
//         }
//         return true;
//     }

//     check_column(number)
//     {
//         var coord = convert(number);
//         var symbol = this.table[number];
//         for (let i = 0; i < 3; ++i)
//         {
//             if (this.table[3 * i + coord.y] != symbol)
//             {
//                 return false;
//             }
//         }
//         return true;
//     }

//     check_diagonal(number)
//     {
//         var coord = convert(number);
//         var symbol = this.table[number];
//         if (coord.x == coord.y)
//         {
//             for (let i = 0; i < 3; ++i)
//             {
//                 if (this.table[3 * i + i] != symbol)
//                 {
//                     return false;
//                 }
//             }
//             return true;
//         }
//         else if (coord.x + coord.y == 2)
//         {
//             for (let i = 0; i < 3; ++i)
//             {
//                 if (this.table[3 * i + 2 - i] != symbol)
//                 {
//                     return false;
//                 }
//             }
//             return true;
//         }
//         return false;
//     }

//     win(number)
//     {
//         return (this.check_row(number) || this.check_column(number) || this.check_diagonal(number) ? this.table[number] : '?');
//     }

//     draw()
//     {
//         for (let i = 0; i < 9; ++i)
//         {
//             if (this.table[i] == '?')
//             {
//                 return false;
//             }
//         }
//         return true;
//     }

//     computer_move()
//     {
//         return Math.floor(Math.random() * 10);
//     }
// }

// class Joc
// {
//     constructor(player_symbol, player_name)
//     {
//         this.table = new Table();
//         this.symbol = 'X';
//         this.player_symbol = player_symbol;
//         this.player_name = player_name;
//         this.end = false;
//         this.winner = '?';
//     }

//     printtt()
//     {
//         return this.table.printtt(this.player_name, this.player_symbol) + '\n';
//     }

//     valid(number)
//     {
//         return this.table.valid(number);
//     }

//     premove()
//     {
//         if (this.player_symbol == '0')
//         {
//             this.table.set_value(this.table.computer_move() - 1, 'X');
//             this.symbol = '0';
//         }
//     }

//     set_value(number)
//     {
//         this.table.set_value(number - 1, this.symbol);
//         var winner = this.table.win(number - 1);
//         if (winner != '?')
//         {
//             this.end = true;
//             this.winner = winner;
//         }
//         else if (this.table.draw())
//         {
//             this.end = true;
//             this.winner = 'draw';
//         }
//     }

//     player_move(table_nr, printtt)
//     {
//         var number = 0;
//         while (!this.valid(number))
//         {
//             number = prompt(printtt + "\nUnde vrei să pui următorul semn pe tabla " + table_nr + "?");
//             if (!this.valid(number))
//             {
//                 alert("Pozitia " + number + " este ocupata!");
//             }
//         }
//         this.set_value(number);
//     }

//     computer_move()
//     {
//         var number = 0;
//         while (!this.valid(number))
//         {
//             number = this.table.computer_move();
//         }
//         this.set_value(number);
//     }

//     switch_symbol()
//     {
//         if (this.symbol == 'X')
//         {
//             this.symbol = '0';
//         }
//         else
//         {
//             this.symbol = 'X';
//         }
//     }

//     win(number)
//     {
//         return this.table.win(number);
//     }

//     draw()
//     {
//         return this.table.draw();
//     }
// }

// class Paralel
// {
//     constructor(player_symbol1, player_symbol2, name)
//     {
//         this.games = [new Joc(player_symbol1, name), new Joc(player_symbol2, name)];
//     }

//     printtt()
//     {
//         return this.games[0].printtt() + this.games[1].printtt();
//     }

//     find_winner()
//     {
//         var points_player = 0, points_computer = 0;
//         for (let i = 0; i < 2; ++i)
//         {
//             if (this.games[i].winner == this.games[i].player_symbol)
//             {
//                 ++points_player;
//             }
//             else if (this.games[i].winner != 'draw')
//             {
//                 ++points_computer;
//             }
//         }
//         if (points_player > points_computer)
//         {
//             return "Bravo, " + this.games[0].player_name + " ai câștigat!";
//         }
//         else if (points_player < points_computer)
//         {
//             return "Ai pierdut :(";
//         }
//         else
//         {
//             return "Remiză!";
//         }
//     }

//     player_turn()
//     {
//         return this.games[0].symbol == this.games[0].player_symbol;
//     }

//     player_moves()
//     {
//         var number1 = 0, number2 = 0;
//         while (!this.games[0].valid(number1) || !this.games[1].valid(number2))
//         {
//             let number_string = prompt(this.printtt() + "\nUnde vrei să pui următoarele semne?");
//             number1 = parseInt(number_string[0]);
//             number2 = parseInt(number_string[2]);
//             if (!this.games[0].valid(number1))
//             {
//                 alert("Pozitia " + number1 + "din tabla 1 este ocupata!");
//             }
//             else if (!this.games[1].valid(number2))
//             {
//                 alert("Pozitia " + number2 + "din tabla 2 este ocupata!");
//             }
//         }
//         this.games[0].set_value(number1);
//         this.games[1].set_value(number2);
//     }

//     computer_move()
//     {
//         var number;
//         while (!this.games[0].valid(number))
//         {
//             number = this.games[0].table.computer_move();
//         }
//         this.games[0].set_value(number);
//         while (!this.games[1].valid(number))
//         {
//             number = this.games[1].table.computer_move();
//         }
//         this.games[1].set_value(number);
//     }

//     premove()
//     {
//         this.games[0].premove();
//         this.games[1].premove();
//     }

//     play()
//     {
//         this.premove();
//         while (!this.games[0].end || !this.games[1].end)
//         {
//             if (this.player_turn())
//             {
//                 if (this.games[0].end)
//                 {
//                     this.games[1].player_move(2, this.printtt());
//                 }
//                 else if (this.games[1].end)
//                 {
//                     this.games[0].player_move(1, this.printtt());
//                 }
//                 else
//                 {
//                     this.player_moves();
//                 }
//             }
//             else
//             {
//                 if (this.games[0].end)
//                 {
//                     this.games[1].computer_move();
//                 }
//                 else if (this.games[1].end)
//                 {
//                     this.games[0].computer_move();
//                 }
//                 else
//                 {
//                     this.computer_move();
//                 }
//             }
//             this.games[0].switch_symbol();
//             this.games[1].switch_symbol();
//         }
//         alert(this.printtt() + this.find_winner());
//     }
// }

// function ex_13(player_name)
// {
//     var player_symbol = prompt("Bună, " + player_name + ". Cu ce vrei să joci? X sau 0? X începe primul.");
//     var TTT = new Table();
//     var symbol = 'X';
//     var end = false;
//     while (!end)
//     {
//         var number = 0;
//         if (symbol == player_symbol)
//         {
//             while (!TTT.valid(number))
//             {
//                 number = prompt(TTT.printtt(player_name, symbol) + "\nUnde vrei să pui următorul semn?");
//                 if (!TTT.valid(number))
//                 {
//                     alert("Pozitia " + number + " este ocupata!");
//                 }
//             }
//         }
//         else
//         {
//             while (!TTT.valid(number))
//             {
//                 number = TTT.computer_move();
//             }
//         }
//         TTT.set_value(number - 1, symbol);
//         var winner = TTT.win(number - 1);
//         if (winner != '?')
//         {
//             if (winner == player_symbol)
//             {
//                 alert(TTT.printtt(player_name, symbol) + "Bravo, " + player_name + " ai câștigat!");
//             }
//             else
//             {
//                 alert(TTT.printtt(player_name, symbol) + "Ai pierdut :(");
//             }
//             end = true;
//         }
//         else if (TTT.draw())
//         {
//             alert(TTT.printtt(player_name, symbol) + "Remiza!");
//             end = true;
//         }
//         else if (symbol == 'X')
//         {
//             symbol = '0';
//         }
//         else
//         {
//             symbol = 'X';
//         }
//     }
//     return 0;
// }

// function ex_14(player_name)
// {
//     var player_symbol = prompt("Bună, " + player_name + ". Cu ce vrei să joci? X sau 0? X începe primul. Selecteaza doua simboluri").toString();
//     var PTTT2 = new Paralel(player_symbol[0], player_symbol[2], player_name);
//     PTTT2.play();
// }

// function main()
// {
//     var player_name = prompt("Hai să jucăm X și 0. Cum te cheamă?");
//     var x = prompt("Selecteaza tipul de joc: \n 1. X si 0 \n 2. X si 0 paralel");
//     if (x == 1)
//     {
//         ex_13(player_name);
//     }
//     else
//     {
//         ex_14(player_name);
//     }
// }

// main();

