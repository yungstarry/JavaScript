const form = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
// Load tasks from local storage
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Add tasks to the list
function addTask(task) {
	// Create the task HTML element
	const li = document.createElement('li');
	li.innerHTML = `${task}<button class="delete-btn">Delete</button>`;
	taskList.appendChild(li);

	// Save the task in local storage
	tasks.push(task);
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task from the list
function removeTask(taskIndex) {
	// Remove the task HTML element
	const li = taskList.getElementsByTagName('li')[taskIndex];
	li.remove();

	// Remove the task from the local storage
	tasks.splice(taskIndex, 1);
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from local storage on page load
function loadTasks() {
	tasks.forEach(task => addTask(task));
}

// Add task on form submit
form.addEventListener('submit', e => {
	e.preventDefault();
	const task = taskInput.value.trim();
	if (task !== '') {
		addTask(task);
		taskInput.value = '';
		taskInput.focus();
	}
});

// Remove task on delete button click
taskList.addEventListener('click', e => {
	if (e.target.classList.contains('delete-btn')) {
		const taskIndex = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
		removeTask(taskIndex);
	}
});

// Load tasks from local storage on page load
loadTasks();
