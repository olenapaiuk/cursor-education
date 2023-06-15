const N = Number(prompt("Введіть число N", ""));
if (Number.isInteger(N)) {
  console.log("Число N ціле:", N, true);
}  else
  console.log("Число N ціле:", N, false);


const M = Number(prompt("Введіть число M", ""));
if (Math.trunc(M) === M) {
  console.log("Число M ціле:", M, true);
} else  
  console.log("Число M ціле:", M, false);

let access = confirm("Чи потрібно пропускати парні числа?");
switch (access) {
  case true:
    {
      console.log("Парні числа пропускати потрібно.");
    }
    break;
  case false: {
    console.log("Парні числа пропускати непотрібно.");
  }
}

let sum = 0;
for (let i = N; i <= M; i++) {
  if (access == false) {
    sum = sum + i;
  } else if (access == true) {
    if (i % 2 == 1) {
      sum = sum + i;
    }
  }
}
console.log("Сума чисел від N до M:", sum);
alert(sum);
