const time = document.getElementById('timer');
let timeInSeconds = convertTimeToSeconds(time.textContent); // Преобразуем строку времени в секунды

const countdown = setInterval(() => {
    timeInSeconds--; // Уменьшаем количество секунд
    
    if (timeInSeconds == 0) {
         // Останавливаем таймер
        time.textContent = '00:00:00'
        alert("Вы победили в конкурсе!");
        clearInterval(countdown);
        const url = document.createElement('a'); // Генерирую тег <a>
        url.href = 'https://img.freepik.com/free-vector/watercolor-halloween-cat_52683-45822.jpg?w=740&t=st=1709990576~exp=1709991176~hmac=2beedf132af354c59823b37bc8ae19db161c50114fb36c859a8e31e52731f360'; // Добавляю в тег <a> ссылку       
        url.download = "watercolor-halloween-cat_52683-45822.jpg"; // Добавляю команду скачать с описанием
        url.textContent = 'Скачать файл'
        //Добавляю команду, чтобы скачивание началось автоматически с открытием новой 
        // чистой страницы с адресом который задал выше
        url.target="_blank";
        url.click();
        
    } else {
        time.textContent = convertSecondsToTime(timeInSeconds); // Обновляем содержимое элемента времени
    }
}, 1000);

function convertTimeToSeconds(timeString) {
    let timeArray = timeString.split(":");
    let hours = parseInt(timeArray[0], 10);
    let minutes = parseInt(timeArray[1], 10);
    let seconds = parseInt(timeArray[2], 10);
    return hours * 3600 + minutes * 60 + seconds;
}

function convertSecondsToTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;
    return formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(remainingSeconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
