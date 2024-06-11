/* 
document.write("Hello world");
console.log("Console");
console.info("Info");
console.error("Error");
console.warn("Warning"); 
*/

var fname = "Щеголь Анастасія Андріївна";
var brthdate = "01.08.2004";
var sum_brthdate = 0+1+0+8+2+0+0+4;

// alert("Прізвище, ім’я, по батькові: " + fname);
// alert("Дата народження: " + brthdate);
// alert("Сума цифр дати народження: " + sum_brthdate);

// Завдання 1
alert("Завдання 1: Створити код JavaScript, який буде виводити на екран повідомлення (alert), з наступними даними:\n\n" 
+ "Прізвище, ім’я, по батькові: " + fname + "\n" + "Дата народження: " + brthdate + "\n" + "Сума цифр дати народження: " + sum_brthdate);


// Завдання 2
alert("Завдання 2: За допомогою операторів prompt, switch створити код JavaScript, для виконання математичних обрахунків. Структура програми:\n\n" + 
"\t Виведення повідомлення для введення першого числа \n\t Виведення повідомлення для введення другого числа \n\t " + 
"Виведення повідомлення для введення символу (+, -, *, /) \n\t Виведення повідомлення з відповіддю");

let one = Number(prompt("Введіть перше число: "));
let two = Number(prompt("Введіть друге число: "));
let operation = prompt("Введіть символ (+, -, *, /): ");
let result = 0;

if (isNaN(one) || isNaN(two)) {             //якщо не число, or
    result = "Неправильно введені дані.";
} 
else {
    switch (operation) {
        case '+':
            result = one + two;
            break;
        case '-':
            result = one - two;
            break;
        case '*':
            result = one * two;
            break;
        case '/':
            if (two != 0) {
                result = one / two;
            } else {
                result = "Ділення на нуль. Помилка.";
            }
            break;
        default:
            result = "Помилка.";
            break;
    }
}
alert(result);