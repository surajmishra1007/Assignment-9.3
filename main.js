var evens = [2, 4, 6, 8];       // variable arrays
var odds = [1, 3, 5, 7];
var primes = [2, 3, 5, 7, 11];

var numbersSpread = [...evens, ...odds, ...primes];     //merging arrays using spread operator

console.log("merging array using spread operator", numbersSpread);      //new array Output

var primeCopy = [...primes];        //Coping array using spread operator

console.log("coping array using spread operator", primeCopy);       // new array output

var jamesBond = {       //creating object
    first : 'James',
    last : 'Bond',
    country : 'United States',
    city : 'New York',
    twitter : '@jamesbond'
};

var {first, last, country, city, twitter} = jamesBond;      //Destructuring object

console.log("Destructured object varibles ->", first, last, country, city, twitter)            //Destructured object propertis Output

var players = [ 'pual', 'andy', 'darrell', 'jim'];          //Creating array

var [player1, player2, player3, player4] = players;         //Destructuring array

console.log("Destructured array varibles ->", player1, player2, player3, player4);            //Destructured variable output