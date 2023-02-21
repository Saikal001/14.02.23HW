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
let example2 = {};
let volume = {
  height: "56",
  P: "5",
  radius: "10",
  
  coneVolume: function() {
    console.log(this.volume * this.height * this.P * this.radius);
  }
  
  
}
console.log(example2);



//3. Напишите функцию, которая принимает строку и возвращает ее длину.
// functionName(" ... ") // Длина строки равна ..
let names=["Aidan" , "Daian", "Raian"];
console.log(num1);

for (let i = 0; i <names.length; i++){
  console.log(names.length );
}


//let example4 = ["Aidan" , "Daian", "Raian"];
//console.log("Hello my name is"+example4[0]);
//console.log("Hello my name is"+example4[1]);
//console.log("Hello my name is"+example4[2]);




