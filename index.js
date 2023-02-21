//1. Напишите функцию, которая выводит ваше имя и фамилию.
// functionName("Erjan", "Kydyrov") // My  name is Erjan Kydyrov
let example1 = {};
let myname = { 
  name: "Saikal",

  myName: function() {
    console.log("hello, I'm " + this.name);
  }
};
console.log(myname.name);

//2. Напишите функцию, которая выводит объем конуса по заданным параметрам - высота (height) и радиус (radius).
// functionName(height, radius) // Объем конуса равен ...
// V=h*Π*r




//3. Напишите функцию, которая принимает строку и возвращает ее длину.
// functionName(" ... ") // Длина строки равна ..
let names=["Aidan" , "Daian", "Raian"];
console.log(names);

for (let i = 0; i <names.length; i++){
  console.log(names.length );
}


//4. Напишите функцию, которая принимает число и проверяет, четное оно или нечетное.
// functionName(num) // Число - четное || Число - нечетное
function isEven(num4){
    if(num4 % 2 === 0){
     console.log("even - " + num4)
    }
   else if(num4 % 2 === 1){
     console.log("odd - " + num4)
  }
   else{
    console.log("error - " + num4)
   }
 }
isEven(2)
   isEven(5)

//



//5. Напишите функцию, которая возвращает квадрат числа.
// functionName(num) // Квадрат этого числа равен

function square(num5){
    return num5 }
   console.log(square(25));

//5. Напишите функцию, которая возвращает квадрат числа.
// functionName(num) // Квадрат этого числа равен

//6. Напишите функцию, которая возвращает корень числа.
// functionName(num) // Корень этого числа равен
function root(a) {
   return Math.sqrt(a)
  }
  console.log(root(25))

  
//7. Напишите функцию, которая возвращает периметр пятиугольника.
// functionName(a, b, c, d, e) // Периметр - ...

//8. Напишите цикл, который выводит каждое третье число в промежутке от 0 до 33.
// 0 3 6 9 ...
for ( i = 0; i < 35; i +=3) {
  console.log(i);
 }
//9. Напишите цикл, вычисляющий факториал числа 8. (8!)
// ...
let factor = 1;
 for ( i = 1; i < 9; i++) {
   factor = i * factor;
 }
 console.log( "8.(8!)" );
//10. Напишите цикл, который выводит квадраты чисел от 1 до 10.
// 1 4 9 ...

//11. Напишите цикл, который вычисляет сумму чисел от 1 до 25.
// ... 
let num = 1;
  while (num <= 25){
  console.log(num);
  num++;
  }
//12. Напишите цикл, который печатает четные числа от 0 до 20.
// 0 2 4

//13. Напишите цикл, который печатает нечетные числа от 1 до 15.
// 1 3 ...

//14. Создайте массив из строк и добавьте в начало массива 2 новых элемента, а в конец 3.

let example4 = ["Aidan" , "Daian", "Raian"];
console.log(example4);
example4.push("3");
console.log(example4);
//15. Создайте массив чисел и вычислите сумму всех четных чисел в массиве.

//17. Создайте массив строк и объедините их в одну строку. // ["I", "like", "to", "eat!"]

//18. Создайте массив строк ["one", "two", "three"] и переверните его. // ["three", "two", "one"]
let num18 = ["one", "two", "three"];
console.log(num18);
for ( i = names.length - 1; i>=0; i--) {
  console.log(names[i] );

}

//19. Создайте массив из имен (минимум 3) и выведите каждое имя.
// Hello Erjan Hello Ermek ... 
let trainer = ["Ermek"];
 for (let i = 0; i < trainer.length; i++) {
  console.log("Hello" + trainer[i]);
}
//20. Создайте массив из чисел и выведите квадраты этих чисел. [2, 3, 4, 5]
// 4 9 16 25

//21. Создайте массив строк и проверьте есть ли такой элемент в массиве. // ["cat", "dog", "snake"] 
// cat - true
// parrot - false
