/* Task1 */
/*
function testThrow(i){
    try {
               
        throw exeption;
           } catch(error) {
            let result = i;
            console.log(result);
           }
}

testThrow(5);
testThrow('Test');
testThrow(new Error('An error happened'));
*/
/* Task2 */
/*
function calcRectangleArea(a, b){
    try {
        if(typeof arguments[0] !== "number" || typeof arguments[1] !== "number"){
            throw exeption;
        }else{
            let res = a * b;
            console.log(res);
        }
    }catch(exeption){
        console.log("Error: Argument is NaN");
    }
}
calcRectangleArea("f", 4);
*/
/* Task3 */
/*
function checkAge(){
    try{
        var age = prompt("How old are you?");
        if(age >= 14){
            alert("Have a nice film!");
        }else{
            throw error;
        }
    }catch(error){
        if(age == ""){
            alert("The field is empty! Please enter your age"); 
        }else if(age < 14){
            alert("You are too young!");
        }else{
            alert("The value is wrong! Please enter a number");
        }

checkAge();
*/
/* Task4 */

class MonthException{
    constructor(message){
        this.name = message;
    }
    
}
function showMonthName(month){
try{
    if(month <= 12 && month >= 1){
        
            let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let i = --month;
            alert(monthName[i]);
        
    }else{
        throw exeption
    }

}catch(exeption){
   
    var errorMessage = new MonthException("Incorrect month number");
    alert(errorMessage.name)
    }
}
showMonthName("-3");