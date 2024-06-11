document.addEventListener('DOMContentLoaded', function() {
    const calendarDiv = document.getElementById('calendar');
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; // Змінено порядок днів тижня

    let stickersData = {}; // Об'єкт для зберігання даних про мітки

    function generateCalendar() {
        const currentDate = new Date();
        currentDate.setDate(1); // Почати з першого дня місяця
        const currentMonth = currentDate.getMonth();
        let firstDayOfMonth = currentDate.getDay(); // День тижня першого дня місяця
        
        // Перевірка, якщо перший день місяця - неділя, змінити його на понеділок
        if (firstDayOfMonth === 0) {
            firstDayOfMonth = 6; // Індексація днів тижня з 0, тому 0 відповідає неділі, а 6 - понеділку
        } else {
            firstDayOfMonth -= 1; // Зменшити індекс на 1, щоб неділя стала останнім елементом масиву
        }

        const daysInMonth = new Date(currentDate.getFullYear(), currentMonth + 1, 0).getDate();

        calendarDiv.innerHTML = ''; // Очистити попередній календар

        // Додати дні тижня
        daysOfWeek.forEach(day => {
            const dayOfWeekDiv = document.createElement('div');
            dayOfWeekDiv.classList.add('dayOfWeek');
            dayOfWeekDiv.textContent = day;
            calendarDiv.appendChild(dayOfWeekDiv);
        });

        // Додати пусті дні до початку місяця, якщо перший день не понеділок
        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyDayDiv = document.createElement('div');
            emptyDayDiv.classList.add('day');
            emptyDayDiv.textContent = '';
            calendarDiv.appendChild(emptyDayDiv);
        }

        // Додати дні місяця
        for (let i = 1; i <= daysInMonth; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('day');
            dayDiv.textContent = i;
            dayDiv.dataset.day = i; // Додано атрибут дати
            calendarDiv.appendChild(dayDiv);

            // Перевірити, чи є мітка для цього дня та додати її, якщо є
            const key = `${currentMonth + 1}-${i}`;
            if (stickersData.hasOwnProperty(key)) {
                stickersData[key].forEach(task => {
                    const sticker = document.createElement('div');
                    sticker.classList.add('sticker');
                    sticker.textContent = task;
                    dayDiv.appendChild(sticker);
                });
            }
        }
    }

    generateCalendar();

    window.addEventListener('resize', generateCalendar); // Динамічне змінення розміру

    calendarDiv.addEventListener('click', function(event) { // Код для обробки кліків на календарі
        const targetDay = event.target.dataset.day;
        if (!targetDay) return; // Якщо клікнуто не на дні місяця, вийти

        if (event.target.classList.contains('day')) {
            const task = prompt('Введіть завдання:');
            if (task) {
                const key = `${new Date().getMonth() + 1}-${targetDay}`;
                if (!stickersData.hasOwnProperty(key)) {
                    stickersData[key] = [];
                }
                stickersData[key].push(task);
                const sticker = document.createElement('div');
                sticker.classList.add('sticker');
                sticker.textContent = task;
                event.target.appendChild(sticker);
            }
        } else if (event.target.classList.contains('sticker')) {
            // Редагування завдання при подвійному кліку
            if (event.detail === 2) {
                const newTask = prompt('Редагувати завдання:', event.target.textContent);
                if (newTask !== null) {
                    event.target.textContent = newTask;
                }
            }
        }
    });

    // Видалення мітки при кліку правою кнопкою миші
    calendarDiv.addEventListener('contextmenu', function(event) {
        event.preventDefault(); // Відміна стандартної дії контекстного меню
        if (event.target.classList.contains('sticker')) {
            const confirmation = confirm('Видалити завдання?');
            if (confirmation) {
                const day = event.target.parentNode.dataset.day;
                const key = `${new Date().getMonth() + 1}-${day}`;
                const taskIndex = stickersData[key].indexOf(event.target.textContent);
                stickersData[key].splice(taskIndex, 1);
                event.target.remove();
            }
        }
    });
    
    // Код для редагування міток за подвійним кліком
    calendarDiv.addEventListener('dblclick', function(event) { 
        const targetDay = event.target.closest('.day').dataset.day;
        if (!targetDay) return; // Якщо подвійний клік не на дні місяця, вийти
    
        if (event.target.classList.contains('sticker')) {
            const newTask = prompt('Редагувати завдання:', event.target.textContent);
            if (newTask !== null) {
                event.target.textContent = newTask;
                const key = `${new Date().getMonth() + 1}-${targetDay}`;
                const taskIndex = stickersData[key].indexOf(event.target.textContent);
                stickersData[key][taskIndex] = newTask;
            }
        }
    });
    
    // Додані стилі для міток
    const style = document.createElement('style');
    style.textContent = `
        .sticker {
            max-width: 100%; /* Обмежити максимальну ширину мітки до 100% */
            word-wrap: break-word; /* Автоматичне перенесення тексту на наступний рядок */
        }
    `;
    document.head.appendChild(style);
});
