// Select HTML elements
const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

// Initialize tasks array
let tasks = [];

// Display tasks in the list
function displayTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="task">${task}</span>
      <button class="delete-btn" data-index="${index}">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

// Add new task to the list
function addTask(event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push(taskText);
    displayTasks();
    taskInput.value = '';
    taskInput.focus();
  }
}

// Remove task from the list
function removeTask(event) {
  if (event.target.classList.contains('delete-btn')) {
    const index = event.target.dataset.index;
    tasks.splice(index, 1);
    displayTasks();
  }
}

// Add event listeners
taskForm.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);

// Load tasks on page load
displayTasks();
