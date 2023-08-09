// Miнімум
// 1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
// const a = 0.1;
// const b = 0.2;
// const result = (a + b).toFixed(1);
// console.log(`Result: ${result}`);

// 2. Виконай додавання рядка "1" і цифри 2(обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
// const string = "1";
// const number = 2;
// const stringNumber = string * 1;
// const result = stringNumber + number;
// console.log(`Result: ${result}`);

// 3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
// const сapacityFlashDriveGB = +prompt("Enter the capacity of the flash drive in GB");
// const sizeMb = 0.80078125;
// const fileCount = (сapacityFlashDriveGB / sizeMb).toFixed(1);
// console.log(`Result: ${fileCount}`);

// Норма
// 1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки.Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
// const amountOfMoney = +prompt("Enter amount of money in your wallet");
// const priceOneChocolate = +prompt("Enter the price of one chocolate");
// const numberOfChocolatesToBuy = (amountOfMoney / priceOneChocolate).toFixed(0);
// const chocolatesBuy = priceOneChocolate * numberOfChocolatesToBuy;
// const howChangeLeft = amountOfMoney % chocolatesBuy;
// console.log(`Cума грошей в гаманці: ${amountOfMoney}, Користувач може купити: ${numberOfChocolatesToBuy} шоколадок, Залишок здачі: ${howChangeLeft}`);

// 2. Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
// const number = +prompt("Enter a three-digit number");
// const number1 = Math.floor(number / 100);
// const number2 = Math.floor((number % 100) / 10);
// const number3 = number % 10;
// const reversedNumber =  number3 * 100 + number2 * 10 + number1;
// console.log(`Число задом наперед: ${reversedNumber}`);

// Максимум
// 1. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
// const depositAmount = +prompt("Enter the deposit amount in the bank");
// const monthInterestRate = (5 / 12) / 100;
// const amountMonths = 2;
// const amountAccruedInterest = ((depositAmount * monthInterestRate * amountMonths)).toFixed(1);
// console.log(`The amount of accrued interes: ${amountAccruedInterest}`);
// 2. Що певернуть вирази:
// const result = 2 && 0 && 3;
// console.log(result);
// результат = 0, так як в логічному операторі && всі значення мають бути правдивими, так як у виразі є 0, а це хибне значення тому показує результат 0 як перше хибне значення

// const result = 2 || 0 || 3;
// console.log(result);
// результат 2, так як перше число 2 не входить в список значень які вважаються хибними

// const result = 2 && 0 || 3;
// console.log(result);
// результат 3, так як спершу працює оператор && і видає нам помилку так як має хибне значення 0, далі порівнюється або хибне значення 0 або правдиве значення 3, і в логічному операторі || при хоча б одному правильному значенні буде обрано саме його

