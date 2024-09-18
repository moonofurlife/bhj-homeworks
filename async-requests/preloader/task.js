document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const itemsContainer = document.getElementById('items');
    
    // Проверяем наличие данных в localStorage
    const cachedData = localStorage.getItem('currencyData');
    if (cachedData) {
        renderCurrencies(JSON.parse(cachedData));
    }

    // Отправка GET-запроса
    fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
        .then(response => response.json())
        .then(data => {
            const currencies = data.response.Valute;
            
            // Кэшируем данные в localStorage
            localStorage.setItem('currencyData', JSON.stringify(currencies));
            
            renderCurrencies(currencies);
        })
        .catch(error => console.error('Ошибка:', error))
        .finally(() => {
            // Скрываем анимацию загрузки
            loader.classList.remove('loader_active');
        });

    // Функция для отрисовки валют
    function renderCurrencies(currencies) {
        itemsContainer.innerHTML = '';  // Очищаем контейнер
        for (let code in currencies) {
            const currency = currencies[code];
            const itemHTML = `
                <div class="item">
                    <div class="item__code">${currency.CharCode}</div>
                    <div class="item__value">${currency.Value}</div>
                    <div class="item__currency">руб.</div>
                </div>`;
            itemsContainer.insertAdjacentHTML('beforeend', itemHTML);
        }
    }
});
