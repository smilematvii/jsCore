
/* Task 1 */

/*var x = 1;
var y = 2;

var res1 = " " + x + y;
console.log(res1); 
console.log(typeof res1);

var res2 = Boolean(x) + String(y);
console.log(res2); 
console.log(typeof res2);

var res3 = (x < y);
console.log(res3); 
console.log(typeof res3)

var res4 = parseFloat("x.y");
console.log(res4); 
console.log(typeof res4)

/* Task 2 */
/*
let number = prompt("Enter your number", "");
let res1 = number >= 0 && number % 2 == 0;
console.log(res1);
let res2 = number % 7 == 0;
console.log(res2);

/* Task3 */

/*let isAdult = prompt ("How old are you?", "");
if (isAdult >= 18){
    alert("Ви досягли повнолітнього віку!");
} else if (isAdult <= 10){
    alert("Ви ще надто молоді");
} else {};

/* Task 4 */
/*
let a = parseFloat(prompt("Сторона а", ""));
let b = parseFloat(prompt("Сторона b", ""));
let c = parseFloat(prompt("Сторона c", ""));
if (a, b, c <= 0){
    console.log("incorrect data");
}
let p = (a + b + c) / 2;
let S = (p*(p-a)*(p-b)*(p-c))**(1/2);
console.log (parseFloat(S.toFixed(3)));
if (a**2===b**2+c**2||b**2===a**2+c**2||c**2===a**2+b**2){
    console.log("Трикутник є прямокутним");
}

/* Task5 */

/*
var todayHour = new Date;
var currentHour = todayHour.getHours();
console.log(currentHour);
switch (true) {
    case currentHour < 5 || currentHour >= 23:
      console.log( "Доброї ночі" );
      break;
    case currentHour >= 5 && currentHour < 11:
      console.log( "Доброго ранку" );
      break;
    case currentHour >= 11 && currentHour < 17:
      console.log( "Доброго дня" );
      break;
    default:
      console.log( "Доброго вечора" );
  }

/*
if (currentHour >= 23 || currentHour < 5){
    console.log( "Доброї ночі" );
} else if (currentHour >= 5 && currentHour < 11){
    console.log( "Доброго ранку" );
} else if (currentHour >= 11 && currentHour < 17){
    console.log( "Доброго дня" );
} else {
    console.log( "Доброго вечора" );
}
*/

/* Task6 */

let array = [];
array.push(18);
array.push("string");
array.push(true);
array.push(null);
document.write("Array length is ", array.length, " elements!");
let a = prompt("Type your nickname", "");
array.push( a );
document.write("<br \/>", array [5]);
