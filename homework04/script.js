const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

//TASK#1
  const man = ["Олександр", "Ігор", "Олексій"];
  const women = ["Олена", "Іра", "Світлана"];
  const pairs = [];
  for (let i = 0; i < man.length; i++) {
    if (students.includes(man[i]) && students.includes(women[i])) {
       pairs.push([man[i], women[i]]);
    }
  }
console.log(pairs);

//TASK#2
  const themesForPairs = [];
  for (let i = 0; i < pairs.length; i++) {
   themesForPairs.push(pairs[i].concat(themes[i]));
  }
console.log(themesForPairs);

//TASK#3
let marksForStudents = [];
for (let i = 0; i < students.length; i++) {
  marksForStudents.push([students[i], marks[i]]);
}
console.log(marksForStudents);

//TASK#4
let randomMarksForPairs = [];
for (let i = 0; i < themesForPairs.length; i++) {
  randomMarksForPairs.push([
    themesForPairs[i].concat(Math.round(Math.random() * (5 - 1) + 1)),
  ]);
}
console.log(randomMarksForPairs);
