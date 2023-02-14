//1. Напишите функцию, которая выводит ваше имя и фамилию.
// functionName("Erjan", "Kydyrov") // My  name is Erjan Kydyrov
let example = {};
let myname = { 
  name: "Saikal",

  myName: function() {
    console.log("hello, I'm " + this.name);
  }
};
console.log(myname.name);

//2. Напишите функцию, которая выводит объем конуса по заданным параметрам - высота (height) и радиус (radius).
// functionName(height, radius) // Объем конуса равен ...