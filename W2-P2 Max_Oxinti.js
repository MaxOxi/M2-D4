/* ESERCIZIO 1
  Fornito il seguente oggetto, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

const me = {
  name: 'Joh',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.skills.pop()      // utilizza il metodo "pop()" che rimuove l'ultimo elemento sull'arrey Skills

console.log(me)

/* ESERCIZIO 2
  Scrivi del codice per creare un array di soli valori DISPARI da 1 a 100.
 */

  const arrdispari = []

   for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      arrdispari.push(i) //il metodo "push()" per aggiungere il valore di "i" all'array "arrdispari" solo se "i" è dispari.

    }
  }
  console.log(arrdispari)



/* ESERCIZIO 3
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */

const randomNumbers = [];
for (let i = 0; i < 10; i++){
  const randomNumber = Math.round (Math.random()*100)
  randomNumbers.push (randomNumber)
 }
console.log(randomNumbers) // stampa numeri casuali la funzione

/* ESERCIZIO 4
  Scrivi del codice per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */

const even = [];
for (let i = 0; i < arr3.length; i++ ) {
  if (arr3[i] % 2 === 0) {
    even.push(arr3[i])
  }

}
console.log(even)

/* ESERCIZIO 5
  Scrivi del codice per sommare a catena i numeri contenuti in un array.
 */

  let cat = [1,2,3,4,5,6,7,8,9,10];

  let somma = 0; 

  for (var i = 0; i < cat.length; i++){
    somma = somma + cat [i];

  }
  console.log(somma) // ci darà la somma tra tutti i numeri  

/* ESERCIZIO 6
  Scrivi del codice per incrementare di 1 tutti i valori numerici in un array.
*/

const arr6 = [5, 68, 'john', 34, 85]

for (let i = 0; i < arr6.length; i++) {
  if (typeof arr6[i] === 'number') {
    arr6[i] = arr6[i] + 1
  }
}

console.log(arr6)


/* ESERCIZIO 7 (EXTRA)
  Scrivi del codice per eliminare solo i valori PARI da un array.
*/

const arr7 = [1,4,7,9,6,4,5];
for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] % 2 === 0) {
    arr7.splice(i--, 1) // "splice()" per rimuovere l'elemento pari dall'array. Il metodo splice prende come argomenti l'indice dell'elemento da rimuovere e il numero di elementi da rimuovere. 
  }                      //Utilizziamo anche l'operatore -- per decrementare l'indice "i" così l'indice successivo non salta quando un elemento viene rimosso dall'arra
} 

console.log(arr7)  // stampa [ 1, 7, 9, 5 ]


/* ESERCIZIO 8
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

const arr8 = [];
while ( arr8.length < 10){
  const rand = Math.floor(Math.random() * 101 + 1)
  if (!arr8.includes(rand)) { 
    arr8.push(rand)

  }
}

console.log(arr8)  
/* stampa [
  71, 43, 57, 31, 79,
  94, 68, 53, 35, 48
] */


/* ESERCIZIO 9
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/


const arr9 = ['EPICODE', 'is', 'great']
for (let i = 0; i < arr9.length; i++) {
  arr9[i] = arr9[i].length
}

console.log(arr9)   // risultato[7, 2, 5, 7]

/* ESERCIZIO 10
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

function RevArr (arr) {
  let arr10 = [];
  for (let i = arr.length -1; i >= 0; i--) {
    arr10.push(arr[i]);
  }
  return arr10;
}
let tmpArr = [1,3,55,];
let resArr = RevArr(tmpArr);
console.log(resArr); // stampa  [ 55, 3, 1 ]


/* ESERCIZIO 11
  Scrivi del codice per estrarre il massimo valore numerico da un array.
*/

const arr11 = [2, 4, 7, 12, -1, 5]
let max = arr11[0]
for (let i = 0; i < arr11.length; i++) {
  if (arr11[i] > max) {
    max = arr11[i]
  }
}
console.log(max)  // stampa 12


/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
  
]

console.log(movie.length)

/* ESERCIZIO 12
  Scrivi del codice per trovare il film più vecchio nell'array fornito.
*/

let olderFilm;
for (let movie of movies) {
  if (olderFilm === undefined) {
    olderFilm = movie;
    } else {
      if (parseInt (movie.Year) < parseInt(olderFilm.Year)) {
        olderFilm = movie;
      }
    }
  }
console.log(olderFilm)


/* ESERCIZIO 13
  Scrivi del codice per ottenere il numero di film contenuti nell'array fornito.
*/
console.log(movie.length)

/* ESERCIZIO 14
  Scrivi del codice per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
let titles =[];
for (let movie of movies){
  titles.push(movie.Title);
}
console.log (titles);


/* ESERCIZIO 15
  Scrivi del codice per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

let currentMovies = [];
for (let movie of movies) {
  if (parseInt(movie.Year) >= 2000){
    console.log(movie);
    break;
  }
}

console.log(currentMovies)

/* ESERCIZIO 16
  Scrivi del codice per ottenere dall'array fornito il film con il seguente id.
*/
const id = 'tt0355702'

let movieById
for (let i = 0; i < movies.length; i++) {
  if (movies[i].imdbID === id) {
    movieById = movies[i]
    break
  }
}

console.log(movieById)



/* ESERCIZIO 17
  Scrivi del codice per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

let yearsSomma = 0
for (let i = 0; i < movies.length; i++) {
  yearsSomma = yearsSomma + parseInt(movies[i].Year)
}
console.log(yearsSomma)

/* ESERCIZIO 18
  Scrivi del codice per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/


const query = 'Salem'
const result = []
for (let i = 0; i < movies.length; i++) {
  if (movies[i].Title.includes(query)) {
    result.push(movies[i])
  }
}

console.log(result)