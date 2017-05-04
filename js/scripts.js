var userInput = "4589";

// debugger;
var userInputString = function(userInput){
  var isStringLength = "";
  for(k = userInput.length; k <= 3; k+=1){
    userInput = "0" + userInput;
  }
  return userInput;
};
userInput = userInputString(userInput);
var mChecker = function(FUCKTHIS){
  var bool;
    if (userInput.charAt(0) !== "0"){
      bool = true;
    }
    else {
      bool = false;
    }
  return bool;
}
var cChecker = function(FUCKTHIS){
  var bool;
    if (userInput.charAt(1) !== "0"){
      bool = true;
    }
    else {
      bool = false;
    }
  return bool;
}
var xChecker = function(FUCKTHIS){
  var bool;
    if (userInput.charAt(2) !== "0"){
      bool = true;
    }
    else {
      bool = false;
    }
  return bool;
}
var iChecker = function(FUCKTHIS){
  var bool;
    if (userInput.charAt(3) !== "0"){
      bool = true;
    }
    else {
      bool = false;
    }
  return bool;
}
var numeralArray4 = [];
var numeralArray3 = [];
var numeralArray2 = [];
var numeralArray = [];

if (mChecker()){// IF USER ENTERS 1000 +
  for(i = 1; i <= userInput.charAt(0); i++){
    numeralArray4.push("M");
  }
}
else {
}
console.log(numeralArray4);
 if (cChecker()) {// IF USER ENTERS < 1000 AND > 100
    if (userInput.charAt(1) === "9"){

      numeralArray3.push("CM");
    }
    else if (userInput.charAt(1) === "5") {

        numeralArray3.push("D");
    }
    else if ((userInput.charAt(1) === "4")){

      numeralArray3.push("CD");
    }
    else if ((userInput.charAt(1) < "9") && (userInput.charAt(1) > "5")){
      numeralArray3.push("D");
      for(i = 1; i <= (userInput.charAt(1) - 5); i++){
        numeralArray3.push("C");
      }
    }
    else {
      for(i = 1; i <= userInput.charAt(1); i++){
        numeralArray3.push("C");
      }
    }
  }
console.log(numeralArray3);

if (xChecker()) {// IF USER ENTERS < 100 AND > 10
  if (userInput.charAt(2) === "9"){

    numeralArray2.push("XC");
  }
  else if (userInput.charAt(2) === "5") {

      numeralArray2.push("L");
  }
  else if ((userInput.charAt(2) === "4")){

    numeralArray2.push("XL");
  }
  else if ((userInput.charAt(2) < "9") && (userInput.charAt(2) > "5")){
    numeralArray2.push("L");
    for(i = 1; i <= (userInput.charAt(2) - 5); i++){
      numeralArray2.push("X")
    }
  }
  else {
    for(i = 1; i <= userInput.charAt(2); i++){
      numeralArray2.push("X");
    }
  }
}
console.log(numeralArray2);

if (iChecker()) {// IF USER ENTERS < 10 AND > 1
  if (userInput.charAt(3) === "9"){

    numeralArray.push("IX");
  }
  else if (userInput.charAt(3) === "5") {

      numeralArray.push("V");
  }
  else if ((userInput.charAt(3) === "4")){

    numeralArray.push("IV");
  }
  else if ((userInput.charAt(3) < "9") && (userInput.charAt(3) > "5")){
    numeralArray.push("V");
    for(i = 1; i <= (userInput.charAt(3) - 5); i++){
      numeralArray.push("I");
    }
  }
  else {
    for(i = 1; i <= userInput.charAt(3); i++){
      numeralArray.push("I");
    }
  }
}
console.log(numeralArray);
var finalArray = [numeralArray4.join(""), numeralArray3.join(""), numeralArray2.join(""), numeralArray.join("")];
console.log(finalArray.join(""));

$(function(){
  $("#form").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#userNum").val();
  });
});
