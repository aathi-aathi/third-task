
//Print odd numbers in an array 
//Anonymous Function
  let oddfun = function(){
   let oddNum =[1,2,3,4,6,7,8,9];
   let value = [];
   for(let i = 0; i<oddNum.length;i++){
      if(oddNum[i]%2==1){
        value.push(oddNum[i]);
}

}
console.log(value);
 }
oddfun();

 //Convert all the strings to title caps in a string array
 //Anonymous Function
let  tittlecase = function(){
  let str=["aathi","bhavana","arul","anbu"];
  let tittle =[];
  for(let i = 0;i<str.length;i++){
    tittle.push(str[i].charAt(0).toUpperCase()+ str[i].slice(1));
    
  }
console.log(tittle)
}
tittlecase();

//Sum of all numbers in an array
//IIFE Function

(function (){
  let sArr=[1,2,7,45,8,43]
  let output=0;
  for(let i=0;i<sArr.length;i++){
    output+=sArr[i];
  }
  console.log(output);
})();

//Return all the prime numbers in an array
//IIFE Function
(function () {
  var numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
  var primes = [];

  for (var i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      primes.push(numbers[i]);
    }
  }

  console.log("Prime numbers in the array:", primes);

  // Function to check if a number is prime
  function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
})();

//Return all the palindromes in an array
//Anoymous  Function
let getPalindromes = function(){
const arr = ["hai", "hello", "good", "wow", "jolly", "mummy"];

const palindromes = arr.filter(word => {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
});

console.log(palindromes);
}
getPalindromes();

//Return median of two sorted arrays of the same size.
//IIFE function

const findMedian = (function () {
  return function (arr1, arr2) {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = mergedArray.length;
    
    if (length % 2 === 0) {
      // If the length is even, return the average of the middle two elements
      const mid1 = mergedArray[length / 2 - 1];
      const mid2 = mergedArray[length / 2];
      return (mid1 + mid2) / 2;
    } else {
      // If the length is odd, return the middle element
      return mergedArray[Math.floor(length / 2)];
    }
  };
})();

//Remove duplicates from an array
let removeDuplicate = function (){
let array = [1, 2, 3, 4, 2, 3, 5];
let uniqueArray = array.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
console.log(uniqueArray);
}
removeDuplicate();

//Rotate an array by k times
//IIFE function

(function (){
let arr =[1,3,8,6,9];
let k = 1;
const rotatedArray = arr.slice(-k).concat(arr.slice(0, arr.length - k));

    console.log(rotatedArray);
})();

//Print odd numbers in an array
//Arrow function

let oddNumber = () => {
  let oddNum =[1,2,3,4,6,7,8,9];
  let value = [];
  for(let i = 0; i<oddNum.length;i++){
     if(oddNum[i]%2==1){
       value.push(oddNum[i]);
}

}
console.log(value);
};
oddNumber();

//Convert all the strings to title caps in a string array
 //Arrow Function
 let getTittle = () =>{
  let str=["aathi","bhavana","arul","anbu"];
  let tittle =[];
  for(let i = 0;i<str.length;i++){
    tittle.push(str[i].charAt(0).toUpperCase()+ str[i].slice(1));
    
  }
console.log(tittle)
};
getTittle();

//Sum of all numbers in an array
//Arrow  Function

let sumNum = () => {
  let sArr=[1,2,7,45,8,43]
  let output=0;
  for(let i=0;i<sArr.length;i++){
    output+=sArr[i];
  }
  console.log(output);
};
sumNum();

//Return all the prime numbers in an array
//Arrow Function

let primeNum = () => {
  var numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
  var primes = [];

  for (var i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      primes.push(numbers[i]);
    }
  }

  console.log("Prime numbers in the array:", primes);

  // Function to check if a number is prime
  function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
};
primeNum();

//Return all the palindromes in an array
//Arrow  Function
let getPalindrome = () =>{
  const arr = ["hai", "hello", "good", "wow", "jolly", "mummy"];
  
  const palindromes = arr.filter(word => {
      const reversed = word.split('').reverse().join('');
      return word === reversed;
  });
  
  console.log(palindromes);
  };
  getPalindrome();
