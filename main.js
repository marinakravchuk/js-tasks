//Написать функцию, которая принимает массив чисел и возвращает сумму всех нечетных чисел в массиве.
const arr = [1,2,3,4,5,6,7,8,9]

let result = arr.filter(num => num % 2 !== 0);
console.log(result);


//Написать функцию, которая принимает строку и возвращает true, если эта строка является палиндромом, и false, если нет.
// Пример: "A man a plan a canal Panama"
function isPalindrome(str) {
    str = str.replace(/\s/g, '').toLowerCase();
    let reversedStr = str.split('').reverse().join('');
    if (str === reversedStr) {
        return true;
      } else {
        return false;
      }
  }

isPalindrome("A man a plan a canal Panama");


//Написать функцию, которая принимает два аргумента: строку и символ. Функция должна возвращать количество раз, которое символ встречается в строке.
function isSymbol(str, symbol){
    let sum = 0;
    for(i=0; i<str.length; i++){
         if( str[i] === symbol){
            sum ++
        }
    }
    return sum
}

isSymbol("test", "t")


//Написать функцию, которая принимает массив строк и возвращает новый массив, состоящий только из тех строк, которые содержат заданную подстроку.
const arr1 = ['apple', 'banana', 'pear', 'pineapple'];
const substr = 'app';

function filterBySubstring(arr, substr){
let newArr = [];
for(let i = 0; i < arr.length; i++){
    if (arr[i].includes(substr)) {
      newArr.push(arr[i]);
    }
}
return newArr
}
filterBySubstring(arr1, substr)
