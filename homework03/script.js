// TASK#1
alert("Завдання№1");
function getMaxDigit(number = prompt("Введіть число:", "")) {
  const unit = String(number).split("");
  let unitMax = unit[0];
  for (let i = 0; i < unit.length; i++) {
    if (unit[i] > unitMax) {
      unitMax = unit[i];
    }
  }
  return unitMax;
}
console.log("1. Mаксимальне значення числа становить: ", getMaxDigit());

// TASK#2
alert("Ви переходете до завдання№2");
function getNumberExponent(num = prompt("Введіть число num яке хочете піднести до степеня:", ""),
  exp = prompt("Введіть степінь exp:", "")) {
  let result2 = 1;
  for (let i = 0; i < exp; i++) {
    result2 = result2 * num;
  }
  return result2;
}
console.log("2. Значення числа num піднесеного до степеня exp:", getNumberExponent());

// TASK#3
alert("Завдання№3. Запишемо ім'я з великої літери");
function capitalLetter(name = prompt("Вкажіть значення імені:", "")) {
  const nameToLowerCase = name.toLowerCase();
  let result3 = "";
      result3 = nameToLowerCase[0].toUpperCase() + nameToLowerCase.slice(1);
      return result3;
    }
console.log("3. Коректне написання імені:", capitalLetter());

//TASK#5
alert("Завдання№5. Повернення випадкового числа");
function getRandomNumber(N = prompt("Введіть перше число:", ""), M = prompt("Введіть друге число:", "")) {
  const NToNum = Number(N);
  const MToNum = Number(M);

  if (N < M) {
    return Math.round(Math.random() * (MToNum - NToNum) + NToNum);
  } else {
    return Math.round(Math.random() * Math.abs(NToNum - MToNum) + MToNum);
  }
}
console.log(`5. Випадкове число:`, getRandomNumber());

//TASK#6
alert("Завдання№6. Обрахунок повторювальних літер");
function countLetter(word = prompt("Введіть слово:", ""),  letter = prompt("Введіть літеру:", "")) {
  let result6 = 0;
  for (let i = 0; i <= word.length; i++) {
    if (letter == word[i]) {
      result6 += 1;
    }
  }
  return result6;
}
console.log("6. Кількість повторювальних літер:", countLetter());

//TASK#10
alert("Завдання№10. Видалення літери зі слова");
function deleteLetter(word = prompt("Введіть слово:", ""), letter = prompt("Введіть літеру:", "")) {
  let result10 = "";

  for (let i = 0; i < word.length; i++) {
    if (letter !== word[i]) {
      result10 = result10 + word[i];
    }
  }
  return result10;
}
console.log("10. Слово після видалення літер:", deleteLetter());

//TASK#11
alert("Завдання№11. Перевірка на паліндромність");
function isPallindrom(word = prompt("Введіть слово:", "")) {
  const wordToLowerCase = word.toLowerCase();
  let reversedWord = "";

  for (let i = wordToLowerCase.length - 1; i >= 0; i--) {
    reversedWord += wordToLowerCase[i];
  }

    if (wordToLowerCase == reversedWord) {
      return true;
    } else {
      return false;
  }
}
console.log("11. Чи є слово паліндромом?:", isPallindrom());
