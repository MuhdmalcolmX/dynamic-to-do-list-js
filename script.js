document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    let tasks = [];

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
            tasks.forEach(taskText => createTaskElement(taskText));
        }
    }

    // Function to create and append a task element to the DOM
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.classList.add('task-item');

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        removeButton.onclick = () => {
            taskList.removeChild(li);
            removeTask(taskText);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);
    }

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        createTaskElement(taskText);
        taskInput.value = '';
    }

    // Function to remove a task
    function removeTask(taskText) {
        tasks = tasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Load tasks when the page loads
    loadTasks();

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
