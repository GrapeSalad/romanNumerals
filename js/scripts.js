var userInput = "8";
var romanNumerals = ["I", "V", "X", "L", "C", "D", "M"];
var numeralArray = [];
console.log(userInput.length);
// var mChecker = function(userInput) {
  if (userInput.length === 4){// IF USER ENTERS 1000 +
    console.log("in the thousandth place: ", userInput.charAt(0));
    for( var i = 1; i <= userInput.charAt(0); i++){
      numeralArray.push("M");
    }
  }
  else if (userInput.length === 3) {// IF USER ENTERS < 1000 AND > 100
    if (userInput.charAt(0) === "9"){

      numeralArray.push("CM");
    }
    else if (userInput.charAt(0) === "5") {

        numeralArray.push("D");
    }
    else if ((userInput.charAt(0) === "4")){

      numeralArray.push("CD");
    }
    else if ((userInput.charAt(0) < "9") && (userInput.charAt(0) > "5")){
      numeralArray.push("D");
      for( var i = 1; i <= (userInput.charAt(0) - 5); i++){
        numeralArray.push("C");
      }
    }
    else {
      for( var i = 1; i <= userInput.charAt(0); i++){
        numeralArray.push("C");
      }
    }
  }
  else if (userInput.length === 2) {// IF USER ENTERS < 100 AND > 10
    if (userInput.charAt(0) === "9"){

      numeralArray.push("XC");
    }
    else if (userInput.charAt(0) === "5") {

        numeralArray.push("L");
    }
    else if ((userInput.charAt(0) === "4")){

      numeralArray.push("XL");
    }
    else if ((userInput.charAt(0) < "9") && (userInput.charAt(0) > "5")){
      numeralArray.push("L");
      for( var i = 1; i <= (userInput.charAt(0) - 5); i++){
        numeralArray.push("X");
      }
    }
    else {
      for( var i = 1; i <= userInput.charAt(0); i++){
        numeralArray.push("X");
      }
    }
  }
  else if (userInput.length === 1) {// IF USER ENTERS < 10 AND > 1
    if (userInput.charAt(0) === "9"){

      numeralArray.push("IX");
    }
    else if (userInput.charAt(0) === "5") {

        numeralArray.push("V");
    }
    else if ((userInput.charAt(0) === "4")){

      numeralArray.push("IV");
    }
    else if ((userInput.charAt(0) < "9") && (userInput.charAt(0) > "5")){
      numeralArray.push("V");
      for( var i = 1; i <= (userInput.charAt(0) - 5); i++){
        numeralArray.push("I");
      }
    }
    else {
      for( var i = 1; i <= userInput.charAt(0); i++){
        numeralArray.push("I");
      }
    }
  }
  else {
    console.log("string is shorter than 3");
  }
console.log("numeralArray", numeralArray);
// };





// ((userInput.charAt(0) < 9) && (userInput.charAt(0) > 5)) || ((userInput.charAt(0) < 3) && (userInput.charAt(0) >= 1))
// }
































// $(function(){
//   $("#form").submit(function(event) {
//     event.preventDefault();
//     console.log(typeof(parseInt($("input#userNum").val())));
//   });
// });
