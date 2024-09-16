document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task__input');
    const taskAddButton = document.getElementById('tasks__add');
    const tasksList = document.getElementById('tasks__list');
  
    // Функция для создания новой задачи
    function createTaskElement(taskText) {
      const taskElement = document.createElement('div');
      taskElement.className = 'task';
  
      const titleElement = document.createElement('div');
      titleElement.className = 'task__title';
      titleElement.textContent = taskText;
  
      const removeButton = document.createElement('a');
      removeButton.href = '#';
      removeButton.className = 'task__remove';
      removeButton.textContent = '×';
      
      removeButton.addEventListener('click', (event) => {
        event.preventDefault();
        taskElement.remove();
        saveTasks();
      });
  
      taskElement.appendChild(titleElement);
      taskElement.appendChild(removeButton);
  
      return taskElement;
    }
  
    // Функция для добавления задачи
    function addTask(taskText) {
      if (taskText.trim() === '') return;
  
      const taskElement = createTaskElement(taskText);
      tasksList.appendChild(taskElement);
  
      taskInput.value = '';
      saveTasks();
    }
  
    // Функция для сохранения задач в localStorage
    function saveTasks() {
      const tasks = [];
      document.querySelectorAll('.task').forEach(taskElement => {
        const title = taskElement.querySelector('.task__title').textContent;
        tasks.push(title);
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    // Функция для загрузки задач из localStorage
    function loadTasks() {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.forEach(taskText => {
        const taskElement = createTaskElement(taskText);
        tasksList.appendChild(taskElement);
      });
    }
  
    // Обработчик для добавления задачи по нажатию на кнопку
    taskAddButton.addEventListener('click', (event) => {
      event.preventDefault();
      addTask(taskInput.value);
    });
  
    // Обработчик для добавления задачи по нажатию клавиши Enter
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        addTask(taskInput.value);
      }
    });
  
    // Загрузка задач при старте страницы
    loadTasks();
  });
  