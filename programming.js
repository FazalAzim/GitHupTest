// const array = [1, 2, -4, 5, -7, 8];
// const handleNegativeNumber = (array) => {
//   let filter = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] >= 0) {
//       filter.push(array[i]);
//     }
//   }
//   return filter;
// };
// let result = handleNegativeNumber(array);
// console.log(result);

// **********************************************

// let str = 'hello welcome';
// const handleVowel = (str) => {
//   let vowel = 'aeiou';
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < vowel.length; j++) {
//       if (str[i] === vowel[j]) {
//         console.log(str[i]);
//         count += 1;
//       }
//     }
//   }
//   return count;
// };
// let vowel = handleVowel(str);
// console.log('Number of Vowel in string :' + vowel);

// ***********************************************

// const handleRemoveSpace = (str) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== ' ') {
//       str[count++] = str[i];
//     }
//   }
//   return count;
// };

// let str = 'my name is jones'.split('');
// let count = handleRemoveSpace(str);
// console.log(str.join('').substring(0, count));

// let complect = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j + 1];
//         arr[j + 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// };
// let result = complect(arr);
// document.write(result);

// let arr = [5, 6, 1, 11, 9, 4];
// let insert = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let loc = i;
//     for (let j = i; j < arr.length; j++) {
//       if (arr[loc] > arr[j + 1]) {
//         loc = j + 1;
//       }
//       let temp = arr[j];
//       arr[j] = arr[loc];
//       arr[loc] = temp;
//     }
//   }
//   return arr;
// };
// let result = insert(arr);
// document.write(result);

// ************************************************************

// async function displayValuesWithWait(value) {
//   // use the alternative wait to explain concurrent
//   const wait = Math.floor(Math.random() * 2) * 1000;

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('The current value is: ', value);
//       resolve();
//     }, wait);
//   });
// }

// async function valueLogger() {
//   const values = [1, 2, 3, 4, 5, 6];

//   console.log('Starting to display values');

//   await Promise.all(
//     values.map(async (value) => {
//       console.log('About to run displayValuesWithWait() process for value ', value);

//       await displayValuesWithWait(value);
//       console.log('Hello');
//       console.log('Finished displayValuesWithWait() for value ', value);
//     })
//   );

//   console.log('Finished displaying values');
// }

// valueLogger();

// *************************************************************

// let input = prompt('Enter Name:', name);
// let object = {
//   [input]: 'swat',
//   [input]: 'lahore',
// };
// if (input === 'khan') {
//   console.log(object.khan);
// } else {
//   console.log(object.John);
// }

// ***********************************************************

// let handleObj = (name, age) => {
//   return {
//     name,
//     age,
//   };
// };
// let result = handleObj('khan', 30);
// console.log(result.name);
// console.log(result.age);

// **********************************************************

// let obj1 = {
//   name: 'John',
//   ['father Name']: 'Dean',
// };
// let obj2 = {
//   sibling: 'Roy',
//   ['mother Name']: 'Jason',
// };
// let obj3 = obj1;
// obj3.name = 'swat';
// for (let key in obj2) {
//   obj1[key] = obj2[key];
// }
// console.log(obj1);
// console.log(obj1.name);
// console.log(obj1['father Name']);

// **********************************************************

// let data1 = {
//   name1: 'Abdul',
//   class1: '8th',
// };
// let data2 = {
//   name2: 'sami',
//   class3: '4th',
// };
// let data3 = Object.assign({},data1,data2)
// Object.assign(data3, data1, data2);
// let data3 = { ...data1, ...data2 };
// console.log(data3);

// *********************************************************

// const calculator = {
//   read: () => {
//     this.num1 = +prompt('Enter Number 1');
//     this.num2 = +prompt('Enter Number 2');
//   },
//   sum: () => {
//     return this.num1 + this.num2;
//   },
//   product: () => {
//     return this.num1 * this.num2;
//   },
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.product());

// **********************************************************

// let sum = (num1, num2) => {
//   return num1 + num2;
// };

// let display = (show) => {
//   document.getElementById('demo').innerHTML = show;
// };
// let result = sum(2, 3) * sum(2, 3) * sum(2, 3);
// display(result);

// *********************************************************

// const select = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     let mini = i;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[mini]) {
//         mini = j;
//       }
//     }
//     let temp = array[mini];
//     array[mini] = array[i];
//     array[i] = temp;
//   }
//   console.log(array);
// };
// const array = [9, 3, 5, 6, -2, 1, 7];
// select(array);

// *****************************************************

// const small = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {

//     }
//   }
// };
// const array = [9, 3, -5, 6, 2, 1, 7];
// small(array);

// ******************************************************************

// const summation = (Num1, Num2, callBack) => {
//   let result = Num1 + Num2;
//   callBack(result);
// };

// let Num1 = +prompt('Enter Number1');
// let Num2 = +prompt('Enter Number2');
// summation(Num1, Num2, (result) => {
//   document.getElementById('demo').innerHTML = result;
// });

// ******************************************************************

// const insert = (array) => {
//   for (let i = 1; i < array.length; i++) {
//     let min = array[i];
//     let j = i - 1;
//     while (j >= 0 && array[j] > min) {
//       array[j + 1] = array[j];
//       j = j - 1;
//     }
//     array[j + 1] = min;
//   }
//   return array;
// };
// const array = [3, 5, 1, 2, 4];
// console.log(insert(array));

// ******************************************************************

// let func = (a) => {
//   let sum = () => {
//     return 2 * a;
//   };

//   let product = () => {
//     return sum() * a;
//   };

//   return product();
// };
// console.log(func(10));

// *****************************************************************

// let display = () => {
//   document.getElementById('demo').innerHTML += '*';
// };
// setInterval(display, 1000);

// *****************************************************************

// let student = {
//   name: 'John',
//   RollNo: 123,
//   Num1: +prompt('Enter1'),
//   Num2: +prompt('Enter2'),
// };

// let teacher = {
//   name: 'Bob',
//   subject: 'IT',
//   Num1: +prompt('Enter1'),
//   Num2: +prompt('Enter2'),
// };

// function common() {
//   let arrow = () => {
//     console.log(this.name);
//     console.log(this.Num1 + this.Num2);
//   };
//   arrow();
// }

// student.obj1 = common;
// teacher.obj2 = common;

// student.obj1();
// teacher.obj2();
// // teacher['obj2']();

// ******************************************************************

// let calculator = {
//   read() {
//     this.num1 = +prompt('Enter1');
//     this.num2 = +prompt('Enter2');
//   },
//   sum() {
//     return this.num1 + this.num2;
//   },
//   mul() {
//     return this.num1 * this.num2;
//   },
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// *****************************************************************

// function Test(num1, num2) {
//   this.number1 = num1;
//   this.number2 = num2;
// }
// let show = new Test(4, 5);
// console.log(show.number1 + show.number2);

// ****************************************************************

// function Calculator() {
//   this.read = function () {
//     this.num1 = +prompt('Enter number 1:', 2);
//     this.num2 = +prompt('Enter number 2:', 3);
//   };

//   this.sum = function () {
//     return this.num1 + this.num2;
//   };

//   this.product = function () {
//     return this.num1 * this.num2;
//   };
// }

// let result = new Calculator();
// result.read();
// console.log(result.sum());
// console.log(result.product());

// ****************************************************************

// function Accumulator(initialValue) {
//   this.value = initialValue;
//   this.user = function () {
//     this.value += +prompt('enter any value');
//   };
//   this.sum = function () {
//     return this.value;
//   };
// }
// let result = new Accumulator(10);
// result.user();
// result.user();
// result.user();
// console.log(result.sum());

// ***************************************************************
// let greater = (array) => {
//   for (let i = 0; i < array.length - 1; i++) {
//     let max = array[i];
//     if (max < array[i + 1]) {
//       max = array[i + 1];
//     }
//   }
//   console.log(max);
// };

// const array = [3, 1, 2, 5, 4];
// greater(array);

// ****************************************************************
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Welcome');
//   }, 1000);
// });
// console.log(promise);

// ****************************************************************

// const str = 'jOhndOE';
// const vowel = 'aeiou';
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   for (let j = 0; j < vowel.length; j++) {
//     if (str.at(i).toLowerCase() === vowel.at(j)) {
//       count = count + 1;
//       console.log(str.at(i));
//     }
//   }
// }
// console.log(count, 'vowel');

// ***************************************************************

// const nonRepeated = (str) => {
//   let array = [];
//   for (let i = 0; i < str.length; i++) {
//     let flag = false;
//     if (str.at(i) !== ' ') {
//       for (let j = 0; j < array.length; j++) {
//         if (str.at(i).toLowerCase() === array[j].toLowerCase()) {
//           flag = true;
//         }
//       }
//       if (!flag) {
//         array.push(str.at(i));
//       }
//       // let find = array.join('').toLowerCase().includes(str.at(i).toLowerCase());
//       // if (!find) {
//       //   array.push(str.at(i));
//     }
//   }

//   return array.join('');
// };
// let str = prompt('Enter any string', 'JohnDoe');
// let result = nonRepeated(str);
// console.log('The longest string is : ' + result);
// console.log('The length of string is : ' + result.length);

// ****************************************************************

// const palindrome = (string) => {
//   let flag = true;

//   for (let i = 0, j = string.length - 1; i <= string.length / 2, j >= string.length / 2 - 1; i++, j--) {
//     if (string.at(i) !== string.at(j)) {
//       flag = false;
//       break;
//     }
//   }
//   if (!flag) {
//     console.log('Not');
//   } else {
//     console.log('Yes');
//   }
// };

// const string = 'madam';
// palindrome(string);

// ****************************************************************

// const operators = ['+', '-', '*', '/'];

// const randomNumber = () => {
//   return Math.floor(Math.random() * 9);
// };

// const randomOperator = () => {
//   return operators[Math.floor(Math.random() * 4)];
// };

// const arrayNumber = () => {
//   let array = [];
//   for (let i = 0; i < 4; i++) {
//     array.push(randomNumber());
//   }
//   return array;
// };

// const arrayOperator = () => {
//   let array = [];
//   for (let i = 0; i < 3; i++) {
//     array.push(randomOperator());
//   }
//   return array;
// };

// const randomSolution = () => {
//   const numbers = arrayNumber();
//   const operators = arrayOperator();
//   console.log(numbers, '...Numbers');
//   console.log(operators, ' ...Operators');

//   let result = '';
//   for (let i = 0; i <= 2; i++) {
//     if (i < 2) {
//       result += numbers[i] + operators[i];
//       console.log(result)
//     } else {
//       result += numbers[i] + operators[i] + numbers[i + 1];
//       console.log(result);
//     }
//   }
//   let evaluated = eval(result);
//   console.log(evaluated);
// };
// randomSolution();

// *****************************************************************
