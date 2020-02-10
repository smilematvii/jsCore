/* Task1 */
/*
let res = 1;
let num = [2, 3, 4, 5];
for (let i = 0; i < num.length; i++) {  
   res *= num[i];
}
console.log(res);
*/

/*
let res = 1;
let num = [2, 3, 4, 5];
let i = 0;
while (i < num.length) {  
   res *= num[i];
   i++;
}
console.log(res);
*/

/* Task2 */

/*
let arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let i = 0; i < arr.length; i++) {
   if (arr[i] % 2 === 0) {
      document.write( arr[i] + " is even" + "<br \/>");
   } else {
      document.write( arr[i] + " is odd" + "<br \/>");
   }
}
*/

/* Task3 */
/*
let k = [];
for (let i = 0; k.length <= 4; i++){
   function randArray(min,max){
   
      result = Math.floor(Math.random() * (max - min) + min);
      let l = result;
      k.push (l);
   }
   randArray(1, 500);
   }
console.log(k);
*/

/* Task4 */
/*
let a = parseInt(prompt("Введіть перше число", ""));
let b = parseInt(prompt("Введіть друге число", ""));
function raiseToDegree(a, b){
   
   let result = a ** b;
   return result;
}
let result = raiseToDegree(a, b);
console.log(result);
*/

/* Task5 */

/*
let arr = [];
function lastElem(arr, num){
   result = arr.slice(arr.length - num, arr.length + 1);
   return result;
}
*/

/* Task6 */
// Цей таск восновному запозичений з google(

function capitalise(string) {
    string = string.split(" ");

    for (var i = 0, x = string.length; i < x; i++) {
        string[i] = string[i][0].toUpperCase() + string[i].substr(1);
    }

    return string.join(" ");
}

console.log(capitalise("i love java script"));

