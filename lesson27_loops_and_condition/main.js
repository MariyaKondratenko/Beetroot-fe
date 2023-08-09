// 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
// const age = +prompt("Enter your age");
// if (age >= 0 && age <= 11) {console.log(`You are: a child`);
// } else if (age >= 12 && age <= 17) {console.log(`You are: a teen`);
// } else if (age >= 18 && age <= 59) {console.log(`You are: an adult`);
// } else {console.log(`You are: a senior citizen`);
// }

// 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
// const number = +prompt("Enter number from 0 to 9");
// if (number === 0) {console.log(')');}
// else if  (number === 1) {console.log(`!`);}
// else if  (number === 2) {console.log(`@`);}
// else if  (number === 3) {console.log(`#`);}
// else if  (number === 4) {console.log(`$`);}
// else if  (number === 5) {console.log(`%`);}
// else if  (number === 6) {console.log(`^`);}
// else if  (number === 7) {console.log(`&`);}
// else if  (number === 8) {console.log(`*`);}
// else if  (number === 8) {console.log(`(*)`);}
// else {console.log(`Invalid input. Please enter a number from 0 to 9.`);}

// 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.
// const firstNumber = +prompt("Enter first number");
// const secondNumber = +prompt("Enter second number");
// let sum = 0;
// for (let i = firstNumber; i <= secondNumber; i++) {
//   sum = sum + i;
// }
// console.log(`First number from user: ${firstNumber} add Second number from user: ${secondNumber} will get ${sum}`);

// 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.
// const firstNumber = +prompt("Enter first number");
// const secondNumber = +prompt("Enter second number");
// let gcd;
// while (firstNumber !== secondNumber) {
//   if (firstNumber > secondNumber) {
//     firstNumber = firstNumber - secondNumber;
//   } else {
//     secondNumber -= firstNumber;
//   }
// }
// gcd = firstNumber;
// console.log(gcd);

// 5. Запитай у користувача число і виведи всі дільники цього числа.
// const number = +prompt("Enter number");
// console.log(`Divisors of a number: ${number}`);
// for (let i = 1; i <= number; i++) {
//   if (number % i === 0) {
//     console.log(i);
//   }
// }

// 1.1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
// const number = prompt("Введи п’ятирозрядне число");
// if (number.length !== 5 || isNaN(number)) {
//     console.log("Введено некоректне п’ятирозрядне число.");
// } else {
//     let isPalindromic = true;
//     for (let i = 0; i < number.length / 2; i++) {
//         if (number[i] !== number[number.length - 1 - i]) {
//             isPalindromic = false;
//             break;
//         }
//     }
//     if (isPalindromic) {
//         console.log("Число є паліндромом.");
//     } else {
//         console.log("Число не є паліндромом.");
//     }
// }

// 1.2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%;
// від 300 до 500 - 5%;
// від 500 і вище - 7%.
// const sum = +prompt("Введи суму покупки");
// let amountDiscount = sum;
// console.log(`Внесено суму: ${sum}`);
// if (sum >= 200 && sum < 300) {
//   const amountDiscountTree = sum - amountDiscount * 0.03;
//   console.log(`Сума до оплати за знижкою 3%: ${amountDiscountTree}`);
// } else if (sum >= 300 && sum < 500) {
//   let amountDiscountFive = sum - amountDiscount * 0.05;
//     console.log(`Сума до оплати за знижкою 5%: ${amountDiscountFive}`);
// } else if (sum >= 500) {
//   let amountDiscountSeven = sum - amountDiscount * 0.07;
//   console.log(`Сума до оплати за знижкою 7%: ${amountDiscountSeven}`);
// } else {
//   console.log(`Сума до оплати: ${amountDiscount}`)
// }

// 1.3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран.

// let positiveNumber = 0;
// let negativeNumber = 0;
// let zero = 0;
// let evenNumber = 0;
// let oddNumber = 0;

// for (let i = 1; i <= 10; i++) {
//   const number = +prompt(`Введи ${i}-е число:`);
//   if (number > 0) {
//     positiveNumber++;
//   } else if (number < 0) {
//     negativeNumber++;
//   } else {
//     zero++;
//   }

//   if (number % 2 === 0) {
//     evenNumber++;
//   } else {
//     oddNumber++;
//   }
// }

// console.log(`Додатніх чисел: ${positiveNumber} `);
// console.log(`Від'ємних чисел: ${negativeNumber}`);
// console.log(`Нулів: ${zero}`);
// console.log(`Парних чисел: ${evenNumber}`);
// console.log(`Непарних чисел: ${oddNumber}`);

// 1.4. Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
// let daysOfWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'];
// let currentDayStart = 0;

// while (currentDayStart < daysOfWeek.length) {
//   const currentDay  = daysOfWeek[currentDayStart];
//   const wantToSeeNextDay = confirm(`День тижня: ${currentDay}. Хочеш побачити наступний день? `);

//   if (!wantToSeeNextDay) {
//     break;
//   }
//   currentDayStart++;
// }

// 
