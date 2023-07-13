const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

//Student identification 
function studentID(student) {
  student = prompt("Enter student name from list (Tanya, Victor, Anton):", "");
  (student == "Tanya" || student == "Victor" || student == "Anton")
    ? console.log(`You chose ${student}:`)
    : (student = prompt("Enter student correctly!"));
  const studentsValues = Object.values(students);
  const student1 = studentsValues.find((person) => person.name === student);
  return student1;
}
const studentIdentificated = studentID();

//TASK#1
function getSubjects() {
  let subjects = [];
  for (let x in studentIdentificated.subjects) {
    subjects.push((x[0].toUpperCase() + x.slice(1)).replace("_", " "));
  }
  return subjects;
}
const subjectForStudent = getSubjects();
console.log('Task 1. Subjects for student:', subjectForStudent);

//TASK#2
function getAverageMark() {
const averageMarkForAllSubj = Object.values(studentIdentificated.subjects).map(element1 => (element1.reduce((acc, curr) => acc+curr))/element1.length);
const averageForStudent = ((averageMarkForAllSubj.reduce((acc1, curr1) => acc1+curr1))/averageMarkForAllSubj.length).toFixed(2);
return +averageForStudent;
}
const averageMark=getAverageMark();
console.log('Task 2. Average mark:', averageMark);

//TASK#3
function getStudentInfo() {
  return {
    course: studentIdentificated.course,
    name: studentIdentificated.name,
    averageMark: averageMark
  }
}
const studInfo = getStudentInfo();
console.log('Task 3. Student info:', studInfo);


//TASK#4
function getStudentsNames() {
let nameCheck = students.map(element => element.name).sort();
return nameCheck;
}
const studentsNames = getStudentsNames();
console.log('Task 4. Students names:', studentsNames);


//TASK#5
function getBestStudent () {
const averMarkForEachSubjPerStudent = students.map(element => Object.values(element.subjects)).map(element1 => element1.map(el2 => (el2.reduce((acc, curr) => acc+curr))/el2.length))
const averMarkPerStudent = averMarkForEachSubjPerStudent.map(el => ((el.reduce((acc, curr) => acc+curr))/el.length).toFixed(2)); 
let highestScore = averMarkPerStudent[0];
let theBestStud = students[0];
for (let i=0; i<averMarkPerStudent.length; i++) {
  const currentMark=averMarkPerStudent[i];
  if(currentMark>highestScore) {highestScore=currentMark;
  theBestStud = students[i]}
}
return theBestStud.name;
}
const bestStudent = getBestStudent();
console.log('Task 5. The best student is:', bestStudent);


//TASK#6
function calculateWordLetters() {
let word = prompt('Enter test word:', '').toLowerCase();
let letters = {};
for (let i=0; i<word.length; i++) {
  letters.hasOwnProperty(word[i])?letters[word[i]]++:letters[word[i]]=1;
}
return letters;
}
const calcLetters = calculateWordLetters();
console.log('Task 6. Object from word:', calcLetters);
