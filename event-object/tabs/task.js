document.addEventListener('DOMContentLoaded', () => {
    const tabContainers = document.querySelectorAll('.tab__navigation');
  
    tabContainers.forEach((tabContainer) => {
      const tabs = tabContainer.querySelectorAll('.tab');
      const contents = tabContainer.nextElementSibling.querySelectorAll('.tab__content');
  
      tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
          // Убираем активные классы у всех вкладок и содержимого
          tabs.forEach(t => t.classList.remove('tab_active'));
          contents.forEach(c => c.classList.remove('tab__content_active'));
  
          // Добавляем активные классы к выбранной вкладке и соответствующему содержимому
          tab.classList.add('tab_active');
          contents[index].classList.add('tab__content_active');
        });
      });
    });
  });
  