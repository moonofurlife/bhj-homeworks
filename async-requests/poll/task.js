document.addEventListener('DOMContentLoaded', () => {
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');

    // Функция для загрузки опроса
    function loadPoll() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
        xhr.responseType = 'json';
        xhr.onload = function() {
            if (xhr.status === 200) {
                const pollData = xhr.response;
                pollTitle.textContent = pollData.data.title;
                pollAnswers.innerHTML = '';

                // Отображаем ответы в виде кнопок
                pollData.data.answers.forEach((answer, index) => {
                    const button = document.createElement('button');
                    button.classList.add('poll__answer');
                    button.textContent = answer;
                    button.addEventListener('click', () => {
                        alert('Спасибо, ваш голос засчитан!');
                        sendVote(pollData.id, index);
                    });
                    pollAnswers.appendChild(button);
                });
            }
        };
        xhr.send();
    }

    // Функция для отправки голоса
    function sendVote(pollId, answerIndex) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.onload = function() {
            if (xhr.status === 200) {
                const results = xhr.response.stat;
                pollAnswers.innerHTML = '';

                // Отображаем результаты голосования
                results.forEach(result => {
                    const resultElement = document.createElement('div');
                    resultElement.textContent = `${result.answer}: ${result.votes} голосов`;
                    pollAnswers.appendChild(resultElement);
                });
            }
        };
        xhr.send(`vote=${pollId}&answer=${answerIndex}`);
    }

    // Загружаем первый опрос при загрузке страницы
    loadPoll();
});
