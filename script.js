"use strict"

// let hello = 'Hello World!';
// console.log(typeof hello);

// hello = 5;
// const hello = 'Hello World!';
//  hello = 'dfgdfg'

// var hello = 'Hello World!';

// console.log(typeof hello);

// let age = prompt('Сколько вам лет?');

// console.log(typeof age)

// if(age == 18){
//   alert('Вы совершеннолетний')
// }
// else {
//   alert('Вы не совершеннолетний')
// }
// else{
//   alert('Вы взрослый!!')
// }

// const isAdult = age >=18 ? true: false;
// const isAdult = age >= 18 ;

// const message = isAdult ? 'Вы совершеннолетний': 'Вы не совершеннолетний';

// alert(message);


// let catKind = 'Манул';

// switch(catKind) {
//   case 'Гепард':
//     console.log('Быстрый хищник')
//     break;
//      case 'Манул':
//     console.log('Милый и пушистый зверь')
//     break;
//      case 'Лев':
//     console.log('Ленивый хищник')
//     break;
//     default:
//     console.log('Неизвестный хищник')
//     break;
// }

// const numbers = [1,2,3,4,5];
// let i = 0;

// while (i < numbers.length){
//   console.log(numbers[i]*numbers[i])
//   i++;
// }

// do {
//   console.log(numbers[i]*numbers[i])
//   i++;
// } while (i < numbers.length)

// for(let i = numbers.length-1; i >= 0; i--){
//   console.log(numbers[i]*numbers[i])
// }


// numbers.forEach((number, i) => {
//  return number*number;
// });

//   console.log('forEach', numbers);

// numbers.map((number, i) => {
//  return number*number;
// })
//   console.log('map', numbers)

// sayHiDeclaration('Anna')

// Function Declaration
// function sayHiDeclaration (name) {
//   console.log(`Hi ${name}`)
// }

// sayHiDeclaration('Anna')


// // Function Expression
const sayHiExpression = function(name){
  console.log(`Hi ${name}`)
}

sayHiExpression('Anna')

