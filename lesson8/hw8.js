/* Task1 */

// function upperCase(a){
//     result = /^[A-Z]/.test(a);
//     if(result == true){
//         alert("String's starts with uppercase character");
//     }else{
//         alert("String's not starts with uppercase character")
//     }
// }
// upperCase('Regexp')
// upperCase('regexp')

/* Task2 */

// function checkEmail(a){
//     result = /\w+\@\w+\.com$/.test(a);
//     console.log(result)
// }
// checkEmail("weg@gmail.com")

/* Task3 */

// let result = /d(b+)(d)/ig.exec("cdbBdbsbz");
// console.log(result)

/* Task4 */

// let re = /(\w+)\s(\w+)/;
// let str = "Java Script";
// let newstr = str.replace(re, '$2, $1');
// console.log(newstr); 

/* Task5 */

// result = /^\d{4}\-\d{4}\-\d{4}\-\d{4}$/.test("2222-2222-2222-2222");
// console.log(result);

/* Task6 */

// function checkEmail(a){
//     result = /^[^\W]\w+\-?\w+\@\w+\.com$/.test(a);
//     if(result == true){
//         alert("Email is correct!");
//     }else{
//         alert("Email is not correct!")
//     }
// }
// checkEmail("my_mail@gmail.com");
// checkEmail("#my_mail@gmail.com");

/* Task7 */

function checkLogin(a){
    let result = /^\D\w{2,10}/g.test(a)
    console.log(result);
    let re1 = /\d+\.?(\d+)?/g;
    let res2 = a.match(re1);
    console.log(res2);
}
checkLogin('ee11ret3');
checkLogin('ee1.1ret3');
