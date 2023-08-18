// Мінімум
// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту,
// кількість і куплений він чи ні, ціну за одиницю товару, сума.
// Написати кілька функцій для роботи з таким масивом:

const shoppingList = [
  {
    name: "Potatos",
    quantity: 5,
    purchased: true,
    pricePerUnit: 22,
    amount: 110,
  },
  {
    name: "Strawberry",
    quantity: 3,
    purchased: true,
    pricePerUnit: 97,
    amount: 291,
  },
  {
    name: "Apples",
    quantity: 3,
    purchased: false,
    pricePerUnit: 17,
    amount: 330,
  },
];

// 1. Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані,
// а потім - ті, що вже придбали.

function displayShoppingList(list) {
  console.log("Список покупок:");

  list.sort(function (a, b) {
    return a.purchased - b.purchased;
  });

  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    let status = item.purchased ? "Придбані" : "Ще не купили";
    let amount = item.quantity * item.pricePerUnit;

    console.log("Product:", item.name);
    console.log("Quantity:", item.quantity);
    console.log("Purchased:", status);
    console.log("Price per unit:", item.pricePerUnit);
    console.log("Total amount:", amount);
    console.log("--------------------");
  }
}

// displayShoppingList(shoppingList);

// 2. Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

// function productPurchased(productName) {
//   for (let i = 0; i < shoppingList.length; i++) {
//     if (shoppingList[i].name === productName) {
//       shoppingList[i].purchased = true;
//       console.log(productName, "Придбано.");
//       return;
//     }
//   }
//   console.log(productName, "не знайдено у списку покупок.");
// }

// productPurchased("Apples");

// displayShoppingList(shoppingList);

// Норма
// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

function removeProduct(productName) {
  const updatedList = shoppingList.filter(
    (product) => product.name !== productName
  );
  shoppingList.length = 0;
  Array.prototype.push.apply(shoppingList, updatedList);
  console.log(productName, "Видалено зі списку покупок.");
}

removeProduct("Potatos");

displayShoppingList(shoppingList);

// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

function addProductToShoppingList(productName, quantity, pricePerUnit) {
  let existingProduct = shoppingList.find(
    (product) => product.name === productName
  );

  if (existingProduct) {
    existingProduct.quantity += quantity;
    existingProduct.amount =
      existingProduct.quantity * existingProduct.pricePerUnit;
    console.log(
      "Кількість продукту",
      productName,
      "змінено на",
      existingProduct.quantity
    );
  } else {
    const newProduct = {
      name: productName,
      quantity: quantity,
      purchased: false,
      pricePerUnit: pricePerUnit,
      amount: quantity * pricePerUnit,
    };
    shoppingList.push(newProduct);
    console.log("Продукт", productName, "додано до списку покупок.");
  }
}

addProductToShoppingList("Apples", 2, 17);
addProductToShoppingList("Ananas", 1, 10);

displayShoppingList(shoppingList);

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку
function calculateTotalAmount(list) {
  let totalAmount = 0;

  for (let i = 0; i < list.length; i++) {
    totalAmount = totalAmount + list[i].amount;
  }

  return totalAmount;
}

const totalAmount = calculateTotalAmount(shoppingList);
console.log("Загальна сума усіх продуктів:", totalAmount);

// Підрахунок суми всіх (не) придбаних продуктів.
function calculateTotalAmountUnpurchased(list) {
  let totalAmountUnpurchased = 0;

  for (let i = 0; i < list.length; i++) {
    if (!list[i].purchased) totalAmountUnpurchased += list[i].amount;
  }

  return totalAmountUnpurchased;
}

const totalAmountUnpurchased = calculateTotalAmountUnpurchased(shoppingList);
console.log(
  "Загальна сума усіх не придбаних продуктів:",
  totalAmountUnpurchased
);

// Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)
// function sortByAmount(list, descending) {
//   list.sort(function (a, b) {
//     if (descending) {
//       return b.amount - a.amount;
//     } else {
//       return a.amount - b.amount;
//     }
//   });
// }

// sortByAmount(shoppingList, true);

// displayShoppingList(shoppingList);

// sortByAmount(shoppingList, false);

// displayShoppingList(shoppingList);
