// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
function func1(a) {
  return a * a;
}

// Сделайте функцию, которая возвращает сумму двух чисел.
function func2(a, b) {
  return a + b;
}

// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

function func3(a, b, c){
  return (a - b) / c;
}

// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

function func4(a){
  const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'];
  return week[a - 1];
}

// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

function func5(a,b) {
  return a === b;
}

// Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.

function func6(a,b){
  return (a + b) > 10;
}

// Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

function func7(a) {
  return a < 0;
}

// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

function isNumberInRange(a){
  return a > 0 && a < 10;
}

// Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

function func8(array){
  return array.filter(isNumberInRange);
}

// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

function getDigitsSum(digit){
  const sum = 0;
  return String(digit).split('').reduce((p,c) => +p + +c, sum);
}

// Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

function func9(){
  let array = [];
  for (let i = 1; i <= 2020; i++) {
    array.push(i);
  }
  return array.filter((el) => {
    return getDigitsSum(el) === 13;
  });
}

//  Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

function isEven(a) {
  return a % 2 === 0;
}

//  Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

function func10(array){
  return array.filter(isEven)
}

// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).

function getDivisors(number){
  const array = [];
  for (let i = 0; i <= number ; i++) {
    if (number % i === 0) array.push(i);
  }
 return array;
}

// Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

function func11(number) {
  while (number > 10) {
    number = getDigitsSum(number);
  }
  return number;
}

// Напишите стрелочную функцию, которая будет возвращать true если строка является палиндромом и false в противном случае.

function func12(string) {
  const reverse = string.split('').reverse().join('');
  return reverse === string;
}


module.exports = {func1, func2, func3, func4, func5, func6, func7, func8, func9, isNumberInRange, getDigitsSum, isEven, func10, getDivisors, func11, func12};
