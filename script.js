'use strict'
let number = 4.6;

console.log(-4/0);
console.log('string' * 9);

const persone = 'Alex';

const bool = false;
 
//  console.log(something);

//  let und;  
// console.log(und);

const obj = {
  name:'Vlad',
  age: 20,
  isMarried: false
};

console.log(obj["name"]);

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, [] ];
console.log(arr[5]);

const people = {
 Vlad:10000
};

console.log(people.Vlad);

// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('Вам есть 18?', "");
// console.log(typeof(answer));

const answers = [];

// answers[0] = prompt('Как ваше имя?','a');
// answers[1] = prompt('Как ваша фамилия?','a');
// answers[2] = prompt('Сколько вам лет?','a');

console.log(typeof(answers));
 
const user = "Vlad";

console.log(`Hello, ${user}`);

console.log(4 + +"5");

let incr = 10,
    decr = 10;

// ++incr;
// --decr;

console.log(incr++);
console.log(decr--);
console.log(incr++);
console.log(decr--);

console.log(5%2);

console.log(2*4 === '8');

const isChecked = false,
      isClose = false;

console.log(isChecked || !isClose);

