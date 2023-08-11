//2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
// function arguments() {
//   console.log(`Кількість переданих аргументів: ${arguments.length}`);
// }
// arguments(1, 2, 3);

// 3. Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.

// function first(a, b) {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   }
// }

// console.log(first(2, 4));
// console.log(first(4, 4));
// console.log(first(6, 4));

// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.
// const userNumber = +prompt("Enter number");
// function factorial(number) {
//   if (number === 0 || number === 1) {
//     return 1;
//   } else {
//     let result = 1;
//     for (let i = 2; i <= number; i++) {
//       result *= i;
//     }
//     return result;
//   }
// }

// let numberToCalculate = userNumber;
// let result = factorial(userNumber);
// console.log(`Факторіал числа ${userNumber} дорівнює ${result}`);

// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
// const a = +prompt("Enter first number");
// const b = +prompt("Enter second number");
// const c = +prompt("Enter third number");

// function numbers(a, b, c) {
//   const result = a * 100 + b * 10 + c;
//   return result;
// }

// console.log(numbers(a, b, c));

// 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
// function area(a, b) {
//   if (b === undefined) {
//     return a * a;
//   } else {
//     return a * b;
//   }
// }

// console.log(area(2));
// console.log(area(2, 4));

// Норма
// 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
// function perfectNumber(number) {
//   let sumDivisorsNumber = 0;

//   for (let i = 1; i < number; i++) {
//     if (number % i === 0) {
//       sumDivisorsNumber = sumDivisorsNumber + i;
//     }
//   }
//   if (sumDivisorsNumber === number) {
//     console.log("Це досконале число");
//   } else {
//     console.log("Це недосконале число");
//   }
// }

// perfectNumber(6);

// 2. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
// function perfectNumber(number) {
//   let sumDivisorsNumber = 0;

//   for (let i = 1; i < number; i++) {
//     if (number % i === 0) {
//       sumDivisorsNumber = sumDivisorsNumber + i;
//     }
//   }
//   return sumDivisorsNumber === number;
// }

// function range(min, max) {
//   for (let i = min; i <= max; i++) {
//     if (perfectNumber(i)) {
//       console.log("Досконалі числа з діапазону " + i);
//     }
//   }
// }

// range(2, 1000);
