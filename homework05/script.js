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


//TASK#3
function getAverage(...numbers) {
  numbers = prompt("Завдання 3. Введіть набір ЦІЛИХ чисел через пробіл:", "");
  const array = numbers.split(' ');
  array.forEach(value => {
    if (!Number.isInteger(+value) || isNaN(+value) ||!(+value) || value.trim() == '') 
          {return numbers = prompt("Введіть КОРЕКТНО набір ЦІЛИХ чисел через пробіл:", "")}
  });
  let array1=numbers.split(' ').map(value=>+value);
  const sum = array1.reduce(function (acc, el) {
    return acc + (el);
  });
  const average = Math.round(sum / array.length);
  return average;
}
const result3 = getAverage();
console.log("3. Отримане середнє значення:", result3);

//TASK#5
function filterEvenNumbers (numbers) {
  numbers = prompt("Завдання 5. Введіть масив ЦІЛИХ чисел через пробіл:", "");
  const array = numbers.split(' ');
  array.forEach(value => {
    if (!Number.isInteger(+value) || isNaN(+value) ||!(+value) || value.trim() == '') 
          {return numbers = prompt("Введіть КОРЕКТНО набір ЦІЛИХ чисел через пробіл:", "")}
  });
const x = numbers.split(' ');
const filteredNumbers = x.map(function (value) {return +value}).filter(function (currentValue) {return currentValue % 2!==0});
  return filteredNumbers;
}
const result5 = filterEvenNumbers();
console.log('5. Масив без парних значень:', result5);

//TASK#6
function countPositiveNumbers() {
  let numbers = prompt("6. Введіть масив чисел через пробіл:", "");
let array = numbers.split(' ');
  array.forEach(value => {
    if (!Number.isInteger(+value) || isNaN(+value) ||!(+value) || value.trim() == '') 
          {return numbers = prompt("Введіть КОРЕКТНО набір ЦІЛИХ чисел через пробіл:", "")}
  });
  const sum = numbers
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
function getDividedByFive(...numbers) {
  numbers = prompt('7. Введіть масив чисел через пробіл:', '');
  let x = numbers.split(' ');
  x.forEach(value => {
    if (!Number.isInteger(+value) || isNaN(+value) ||!(+value) || value.trim() == '') 
          {return numbers = prompt("Введіть КОРЕКТНО набір ЦІЛИХ чисел через пробіл:", "")}
  });
  const array = numbers.split(' ').map(function (value) {
    return +value;
  })
  .filter(function (value) {
    return value % 5 ==0;
  })
return array;
}
const result7 = getDividedByFive();
console.log("7.Масив чисел, що діляться на 5:", result7);


//TASK#10
function generateCombinations(word) {
  word=prompt('10. Введіть слово для паролю з кількістю літер до 10:', '').toLowerCase();
  if (word.length >10 || word.length == 0) { word=prompt('Слово не підходить, спробуйте ввести знову:', '')}
  let array=[];
  for (let i=0; i<word.length; i++) {array.push([word.slice(i)+word.slice(0, i)])}
return array;
}
const result10 = generateCombinations();
console.log('10. Можливі перестановки слова:', result10);