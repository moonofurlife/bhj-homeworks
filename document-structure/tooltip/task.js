document.addEventListener('DOMContentLoaded', () => {
    const tooltips = [];
    
    // Функция для создания и отображения подсказки
    function showTooltip(event) {
      // Проверка, существует ли уже подсказка
      if (tooltips.length > 0) {
        // Убираем предыдущую подсказку
        tooltips.forEach(tooltip => tooltip.remove());
        tooltips.length = 0;
      }
  
      // Создаем элемент подсказки
      const target = event.currentTarget;
      const tooltipText = target.getAttribute('title');
      const position = target.getAttribute('data-position') || 'top';
  
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip tooltip_active';
      tooltip.textContent = tooltipText;
      document.body.appendChild(tooltip);
  
      // Располагаем подсказку относительно элемента
      const rect = target.getBoundingClientRect();
      const tooltipRect = tooltip.getBoundingClientRect();
  
      let top, left;
      switch (position) {
        case 'top':
          top = rect.top - tooltipRect.height - 10;
          left = rect.left + (rect.width - tooltipRect.width) / 2;
          break;
        case 'bottom':
          top = rect.bottom + 10;
          left = rect.left + (rect.width - tooltipRect.width) / 2;
          break;
        case 'left':
          top = rect.top + (rect.height - tooltipRect.height) / 2;
          left = rect.left - tooltipRect.width - 10;
          break;
        case 'right':
          top = rect.top + (rect.height - tooltipRect.height) / 2;
          left = rect.right + 10;
          break;
      }
  
      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left}px`;
  
      tooltips.push(tooltip);
    }
  
    // Функция для скрытия подсказки
    function hideTooltip(event) {
      // Убираем текущую подсказку
      if (tooltips.length > 0) {
        tooltips.forEach(tooltip => tooltip.remove());
        tooltips.length = 0;
      }
    }
  
    // Регистрация обработчиков событий
    document.querySelectorAll('.has-tooltip').forEach(element => {
      element.addEventListener('click', (event) => {
        event.preventDefault();
        showTooltip(event);
      });
    });
  
    // Скрываем подсказку при клике вне элемента
    document.addEventListener('click', (event) => {
      if (!event.target.classList.contains('has-tooltip')) {
        hideTooltip();
      }
    });
  });
  