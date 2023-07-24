//TASK#1
class Student {
    constructor (university, course, fullName) {
        this.university = university,
        this.course = course,
        this.fullName = fullName,
        this.sendAway = false
    }

//TASK#2
    getInfo() {
        console.log(this.course, this.university, this.fullName);
    }

//TASK#3
get marks1 () {
    return this.marks1
}

//TASK#4
set mark (value) {
    if (Number.isInteger(this.mark) && !isNaN(this.mark)&& this.mark>0 && this.mark<=5 && this.sendAway==false)
{return value}}

get marks2 () {
    return this.marks2;
}

//TASK#5
getAverageMark (value) {
    let average = ((value).reduce((acc, curr) => acc+curr))/(value).length;
    return average;
}

//TASK#6
dismiss () {
    this.sendAway==true;
     return null;
}

recover (value) {
    (this.sendAway)
    return value;
}
}

let student = new Student('1 курс', 'Вища Школа Психотерапії (м.Одеса)', 'Остап Родоманський Бендер');
console.log('Студент:', student);

student.getInfo();

console.log('Виведені оцінки за перший семестр:', student.marks1=[5, 4, 4, 5]);

console.log('Поставлена перша оцінка в другому семестрі:', student.mark=5);
console.log('Виведені оцінки за другий семестр:', student.marks2=[5, 4, 4, 5, 5]);

console.log('Середня оцінка за другий семестр:', student.getAverageMark([5, 4, 4, 5, 5]));

console.log('Студент вибув', student.dismiss());

console.log('Студент зарахований назад:', student.recover([5, 4, 4, 5, 5]));


// ----------------------ADVANCED-------------------
class BudgetStudent extends Student {
    constructor (university, course, fullName, sendAway) {
        super(university, course, fullName, sendAway)

        setInterval(() => {this.getScholarship()}, 30000);
    }
    
getScholarship () {
    if (this.sendAway===true || budgetStud.getAverageMark([4, 5, 3, 5, 5])<4.0) {console.log('Ви не отримуєте стипендію')} else if
    (budgetStud.getAverageMark([4, 5, 3, 5, 5])>=4.0) {console.log('Ви отримали 1400 грн. стипендії')}
}
}

let budgetStud = new BudgetStudent('Національний університет"Львівська політехніка"','5 курс','Фіщук Олександра Ігорівна');
console.log('Студент бюджетної форми навчання:', budgetStud);




