// //* FUNCTION // // 

//  CHAPTER 35-38  // 

//! Q 1 Write a function that displays current date & time in your browser.

//? function tellTime() {
//?     var current = new Date()
//?     document.write(current);
//? }
//? tellTime();

//! Q 2 Write a function that takes first & last name and then it greets the user using his full name.

//? function greetUser(firstName, lastName){
//? let fullName = firstName + ' ' + lastName
//?   let greet = "Hello " + fullName+ " Welcome"
//?   return greet
//? }
//? let userFirstName = prompt("Enter your name")
//? let userLastName = prompt("Enter your name")
//? let message = greetUser(userFirstName, userLastName)
//? document.write(message)

//! Q 3 Write a function that adds two numbers (input by user) and returns the sum of two numbers.


//! Q 4 Calculator:
//! Write a function that takes three arguments num1, num2 & operator & compute the desired operation.
//! Return and show the desired result in your browser.
//? function userNumber(num1, num2, oprator){
//?   num1 = parseFloat(num1);
//?   num2 = parseFloat(num2);
//?   if(isNaN(num1) || isNaN(num2)){
//?     return 'Invalid input. Please enter a valid number'
//?   }
//?   switch(oprator){
//?     case "+":
//?       return num1+num2;
//?       case "-":
//?         return num1-num2;
//?         case "*":
//?           return num1*num2;
//?           case "/":
//?             if(num2===0){
//?               return 'Division by zero is not allowed.';
//?             }
//?             return num1/num2;
//?             default:
//?               return 'Invalid operator. Please use +, -, *, or /.';
//?   }
//?   }
  
//?   let num1 = prompt("Enter your First Number");
//?   let num2 = prompt("Enter your First Number");
//?   let oprator = prompt('Enter the operator (+, -, *, /):');
//?   let result = userNumber(num1,num2,oprator)
  
//?   document.write('Result: ' + result)
  
  //! Q 5 Write a function that squares its argument.
  //? function square(number) {
//?   return number * number;
//? }

// //* Example usage of the function
//? var num = parseFloat(prompt('Number'));
//? var result = square(num);
//? document.write("The square of " + num + " is " + result);
  
  //! Q 6 Write a function that computes factorial of a number.
  //? function factorial(number) {
//?   if(number<0){
//?     return "Undefined (Factorial is not defined for negative numbers)";
//?   }
//?   else if(number === 0){
//?     return 1
//?   }else{
//?     let result =1;
//?     for(let i = 1; i <= number; i++){
//?       result *= i;
//?     }return result;
//?   }
//? }
//? let result = factorial(7);
//? document.write(result)

  //! Q 7 . Write a function that take start and end number as inputs & display counting in your browser.
  //? function numbers(){
//?   let startNumber = parseFloat(prompt("Enter Start Number"))
//?   let endNumber = parseFloat(prompt("Enter End Number"))

//? for(let i = startNumber; i <= endNumber; i++){

//?   return startNumber + endNumber;
//? }
//? }

//? document.write( numbers() )
  
  //! Q 8 Write a nested function that computes hypotenuse of a right angle triangle.
  //! Hypotenuse2 = Base2 + Perpendicular2
  //! Take base and perpendicular as inputs.
  //! Outer function : calculateHypotenuse()
  //! Inner function: calculateSquare()
  //? function calculateHypotenuse(base, perpendicular) {
  //   //* Inner function to calculate the square of a number
  //?   function calculateSquare(number) {
  //?     return number * number;
  //?   }
  
  //?   const baseSquared = calculateSquare(base);
  //?   const perpendicularSquared = calculateSquare(perpendicular);
  
  //?   const hypotenuseSquared = baseSquared + perpendicularSquared;
  //?   const hypotenuse = Math.sqrt(hypotenuseSquared);
  
  //?   return hypotenuse;
  //? }
  
  // //* Example usage:
  //? const base = 3;
  //? const perpendicular = 4;
  //? const result = calculateHypotenuse(base, perpendicular);
  //? document.write("Hypotenuse:", result); // This will calculate and log the hypotenuse of the right triangle.
  
  //! Q 9 Write a function that calculates the area of a rectangle.
  //! A = width * height
  //! Pass width and height in following manner:
  //! i. Arguments as value
  //! ii. Arguments as variables
  //? function calculateHypotenuse(base, perpendicular) {
  //   //* Inner function to calculate the square of a number
  //?   function calculateSquare(number) {
  //?     return number * number;
  //?   }
  
  //?   const baseSquared = calculateSquare(base);
  //?   const perpendicularSquared = calculateSquare(perpendicular);
  
  //?   const hypotenuseSquared = baseSquared + perpendicularSquared;
  //?   const hypotenuse = Math.sqrt(hypotenuseSquared);
  
  //?   return hypotenuse;
  //? }
  
  // //* Example usage:
  //? const base = 3;
  //? const perpendicular = 4;
  //? const result = calculateHypotenuse(base, perpendicular);
  //? document.write("Hypotenuse:", result); // This will calculate and log the hypotenuse of the right triangle.
  
  //! Q 10 Write a JavaScript function that checks whether a passed string is palindrome or not?
  //! A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.
  //? function calculateRectangleArea(width, height) {
  //?   return width * height;
  //? }
  
  // //* Example usage with arguments as values
  //? const area1 = calculateRectangleArea(5, 10);
  //? console.log("Area with values:", area1); 
  
  //? function calculateRectangleAreaWithVariables() {
  //?   const width = 5;
  //?   const height = 10;
  //?   return width * height;
  //? }
  
  // //* Example usage with arguments as variables
  //? const area2 = calculateRectangleAreaWithVariables();
  //? console.log("Area with variables:", area2); 
  
  
  //? function isPalindrome(str) {
  //   //* Remove non-alphanumeric characters and convert to lowercase
  //?   str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
  //   //* Check if the string reads the same forwards and backwards
  //?   for (let i = 0; i < str.length / 2; i++) {
  //?     if (str[i] !== str[str.length - 1 - i]) {
  //?       return false;
  //?     }
  //?   }
  
  //?   return true;
  //? }
  
  // //* Example usage:
  //? const testString = "madam";
  //? const result = isPalindrome(testString);
  
  //? if (result) {
  //?   document.write(`"${testString}" is a palindrome.`);
  //? } else {
  //?   document.write(`"${testString}" is not a palindrome.`);
  //? }
  
  //! Q 11 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the
  //! string in upper case.
  //! EXAMPLE STRING : 'the quick brown fox'
  //! EXPECTED OUTPUT : 'The Quick Brown Fox'
  
  //? function capitalizedWords(inputString) {
    
  //?   let words = inputString.split(' ');
  //?   let capitalizedWords = words.map(word =>{
  //?     if(word.length>0){
  //?       return word[0].toUpperCase() + word.slice(1);
  //?     }
  //?     return word;
  //?   })
  //?  let capitalizedStrings = capitalizedWords.join(' ');
  //?  return capitalizedStrings;
  //? }
  //? let inputString = prompt("Write test string")
  //? let result = capitalizedWords(inputString);
  //? document.write(result);
  
  
  //! Q 12 Write a JavaScript function that accepts a string as a parameter and
  //! find the longest word within the string.
  //! EXAMPLE STRING : 'Web Development Tutorial'
  //! EXPECTED OUTPUT : 'Development'
    //? function findLongestWord(inputString) {
    //   //* Split the input string into words
    //?   const words = inputString.split(' ');
    
    //   //* Initialize variables to keep track of the longest word and its length
    //?   let longestWord = '';
    //?   let longestLength = 0;
    
    //   //* Iterate through the words to find the longest one
    //?   for (const word of words) {
    //?     const wordLength = word.length;
    //?     if (wordLength > longestLength) {
    //?       longestWord = word;
    //?       longestLength = wordLength;
    //?     }
    //?   }
    
    //?   return longestWord;
    //? }
    
    // //* Example usage:
    //? const inputString = 'Web Development Tutorial';
    //? const longestWordResult = findLongestWord(inputString);
    //? console.log(longestWordResult); // Output: 'Development'
  
  //! Q 13 Write a JavaScript function that accepts two arguments, a string and a letter and
  //! the function will count the number of occurrences of the specified letter within the string.
  //! Sample arguments : 'JSResourceS.com', 'o'
  //? function countLetterOccurrences(inputString, letter) {
    //   //* Initialize a count to keep track of letter occurrences
    //?   let count = 0;
    
    //   //* Iterate through the characters of the string and count the occurrences
    //?   for (let i = 0; i < inputString.length; i++) {
    //?     if (inputString[i] === letter) {
    //?       count++;
    //?     }
    //?   }
    
    //?   return count;
    //? }
    
    // //* Example usage:
    //? const inputString = 'JSResourceS.com';
    //? const letterToCount = 'o';
    //? const occurrences = countLetterOccurrences(inputString, letterToCount);
    //? console.log(`The letter '${letterToCount}' appears ${occurrences} times in the string.`);
    
  
  //! Q 14 The Geometrizer
  //! Create 2 functions that calculate properties of a circle, using the definitions here.
  //! Create a function called calcCircumference:
  //! • Pass the radius to the function.
  //! • Calculate the circumference based on the radius, and output "The circumference is NN".
  //! Create a function called calcArea:
  //! • Pass the radius to the function.
  //! • Calculate the area based on the radius, and output "The area is NN".
  //! Circumference of circle = 2πr
  //! Area of circle = πr2
  //   //* Function to calculate the circumference of a circle
  //? function calcCircumference(radius) {
  //?   const circumference = 2 * Math.PI * radius;
  //?   console.log(`The circumference is ${circumference.toFixed(2)}`);
  //? }
  
  // //* Function to calculate the area of a circle
  //? function calcArea(radius) {
  //?   const area = Math.PI * Math.pow(radius, 2);
  //?   console.log(`The area is ${area.toFixed(2)}`);
  //? }
  
  // //* Example usage:
  //? const radius = 5;
  //? calcCircumference(radius);
  //? calcArea(radius);