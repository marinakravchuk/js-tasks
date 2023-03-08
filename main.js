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

//Написать функцию, которая принимает два аргумента: число и степень. Функция должна возводить число в заданную степень.


function power(num, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= num; //циклическое умножение числа на само себя exponent раз, используя оператор *=.
    }
    return result;
  }
  
  console.log(power(2, 3)); // выводит 8 (2 в степени 3)
  console.log(power(5, 2)); // выводит 25 (5 в степени 2)
  

  //Написать функцию, которая принимает массив объектов и возвращает новый массив, состоящий только из тех объектов, у которых есть свойство с заданным значением.

  const users = [
    {
      id: 1,
      name: 'John',
      age: 30,
      occupation: 'developer'
    },
    {
      id: 2,
      name: 'Jane',
      age: 25,
      occupation: 'designer'
    },
    {
      id: 3,
      name: 'Bob',
      age: 40,
      occupation: 'developer'
    },
    {
      id: 4,
      name: 'Alice',
      age: 28,
      occupation: 'manager'
    }
  ];
  
 // вариант через метод 
  function filterObjectsByPropertyValue(arr, value) {
    let result = [];
  
    arr.forEach(function(obj) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === value) {
          result.push(obj);
          break;
        }
      }
    });
  
    return result;
  }


  //вариант через цикл
  function filterObjectsByPropertyValue(arr, prop, value) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][prop] === value) { //перебирает все объекты в массиве и проверяет, содержит ли свойство с именем prop значение, равное value.
        result.push(arr[i]);
      }
    }
    return result;
  }
  

