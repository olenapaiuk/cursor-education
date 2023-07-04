//TASK#1
function getRandomArray (length, min, max) {
    length = Number(prompt ('Введіть довжину масиву:', ''));
    if (!Number.isInteger(length) || isNaN(length)) {length = prompt('Введіть ЦІЛЕ числове значення довжини масиву:', '')}

    max = Number(prompt('Максимальне значення:', ''));
    if (!Number.isInteger(max) || isNaN(max)) {max = prompt('Введіть ЦІЛЕ максимальне число:', '')}

    min = Number(prompt('Мінімальне значення:', ''));
    if (!Number.isInteger(min) || isNaN(min) || min>max) {min = prompt('Введіть ЦІЛЕ мінімальне число:', '')}

  
    let array=[];
    for (let i=0; i<length; i++) {
        array.push(+(Math.random()*(max-min)+min).toFixed(0))
    };
    return array;
}
const result1 = getRandomArray();
console.log('1. Отриманий масив випадкових чисел:', result1);


//FUNCTION CHECK for tasks 3,5-7
function checkString (numbers) {
  numbers = prompt("Введіть набір ЦІЛИХ чисел через пробіл. Цей набір чисел використовується при вирішенні завдань 3, 5-7:", "");
  const array = numbers.split(' ');
  array.forEach(value => {
    if (!Number.isInteger(+value) || isNaN(+value) ||!(+value) || value.trim() == '') 
          {return numbers = prompt("Введіть КОРЕКТНО набір ЦІЛИХ чисел через пробіл:", "")}
  });
  return numbers;
}
const checkedString = checkString();

//TASK#3
function getAverage() {
  let array1=checkedString.split(' ').map(value=>+value);
  const sum = array1.reduce(function (acc, el) {
    return acc + (el);
  });
  const average = Math.round(sum / checkedString.length);
  return average;
}
const result3 = getAverage();
console.log("3. Отримане середнє значення:", result3);

//TASK#5
function filterEvenNumbers () {
const x = checkedString.split(' ');
const filteredNumbers = x.map(function (value) {return +value}).filter(function (currentValue) {return currentValue % 2!==0});
  return filteredNumbers;
}
const result5 = filterEvenNumbers();
console.log('5. Масив без парних значень:', result5);

//TASK#6
function countPositiveNumbers() {
  const sum = checkedString
    .split(" ")
    .map(function (value) {
      return +value;
    })
    .filter(function (value) {
      return value > 0;
    })
    .reduce(function (acc, value) {
      return acc + value;
    });
  return sum;
}
const result6 = countPositiveNumbers();
console.log("6.Сума додатніх чисел становить:", result6);

//TASK#7
function getDividedByFive() {
  const array = checkedString.split(' ').map(function (value) {
    return +value;
  })
  .filter(function (value) {
    return value % 5 ==0;
  })
return array;
}
const result7 = getDividedByFive();
console.log("7.Масив чисел, що діляться на 5:", result7);

//TASK#8
function replaceBadWords (string) {
  string = prompt('Введіть речення з нецензурним словом:', '');
  const stringToArray = string.split(' ');
  let libraryOfBadWords = ['fuck', 'shit'];
  let changedArray = [];
  
  for (let i=0; i<stringToArray.length; i++) {
      libraryOfBadWords.forEach(function (value) {if
      (stringToArray[i].includes(value)) {return changedArray.push(stringToArray[i].replace(value, '****'))}
  })
  changedArray.push(stringToArray[i])} //я не знаю як ввести перевірку для того, щоб замінити зміненим словом з масиву незмінене
  let finalString = changedArray.join(' ');
  return finalString;
}
const result8 = replaceBadWords();
console.log('8. Змінена фраза з нецензурним словом:', result8);
