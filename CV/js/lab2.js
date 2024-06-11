alert("Завдання 1. Створити код JavaScript, який буде виводити на екран \nЖурнал з оцінками. Ключові позиції: \n\n" + 
"\t Використання масиву для збереження даних ([]) \n\t Використання циклів (for/switch) \n\t Введення даних користувачем (prompt)" + 
"\n\t Відображення Журналу на екрані (document.write) \n\t Виведення оцінки за прізвищем.");

//журнал оцінок + прізв
var gradebook = [];

for (var i = 0; i < 3; i++) {
    var lname = prompt("Введіть прізвище студента:");
    var grades = []; //масив оцінки

    var gradeStr = prompt("Введіть оцінки для студента " + lname + ", розділені комою (наприклад, 5, 4, 3):");
    var gradeArr = gradeStr.split(','); // Розбиваємо введений рядок на масив оцінок

    // рядки у числа i ->  до масиву оцінок
    for (var j = 0; j < gradeArr.length; j++) {
        grades.push(parseInt(gradeArr[j]));
        console.log("grades:"+grades)
    }

    // Додаємо дані до масиву в форматі [прізвище, оцінки]
    gradebook.push([lname, grades]);
    console.log("gradebook:"+gradebook)
}

// Виведення журналу на екран <div class="tble"><h2>Журнал з оцінками</h2><table class="styled-table"><tbody><tr><td>Спеціалізована школа №244</td></tr>
document.write("<div class='tble'><h2>Журнал з оцінками</h2><table class='styled-table'><tbody>");
for (var i = 0; i < gradebook.length; i++) {
    var stInformation = gradebook[i];
    var lname = stInformation[0];
    var grades = stInformation[1];
    // document.write("<p>" + lname + ": " + grades.join(', ') + "</p>");
    document.write("<tr><td>" + lname + ": " + grades.join(', ') + "</td></tr>");
}
document.write("</tbody></table></div>");