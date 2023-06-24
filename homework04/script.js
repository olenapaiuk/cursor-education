const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

//TASK#1
function getPairs (students) {
  const men = ["Олександр", "Ігор", "Олексій"];
    const women = ["Олена", "Іра", "Світлана"];
    const result1 = [];
    for (let i = 0; i < men.length; i++) {
      if (students.includes(men[i]) && students.includes(women[i])) {
       result1.push([men[i], women[i]]);
      }
    }
    return result1;
  }
  const pairs = getPairs (students);
  console.log('Сформовані пари:', pairs);
  

 //TASK#2
 function getThemes (pairs, themes) { 
 const result2 = [];
  for (let i = 0; i < pairs.length; i++) {
   result2.push(pairs[i].concat(themes[i]));
  }
  return result2;
}
const themesForPairs = getThemes (pairs, themes)
console.log('Теми для пар:', themesForPairs);

//TASK#3
function getMark (students, marks) {
let result3 = [];
for (let i = 0; i < students.length; i++) {
  result3.push([students[i], marks[i]]);
}
return result3;
}
const marksForStudents = getMark (students, marks);
console.log('Оцінка студента:',marksForStudents);

//TASK#4
function getMarkForPairs (themesForPairs) {
let result4 = [];
for (let i = 0; i < themesForPairs.length; i++) {
  result4.push([
    themesForPairs[i].concat(Math.round(Math.random() * (5 - 1) + 1)),
  ]);
}
return result4;
}
const randomMarksForPairs = getMarkForPairs (themesForPairs);
console.log('Оцінка пари:', randomMarksForPairs);
