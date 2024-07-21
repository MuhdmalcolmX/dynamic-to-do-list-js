// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', () => {
    //Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        // Task Creation and Removal
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;
        li.classList.add('task-item'); // Adding class to the li element

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn'; // Adding class to the remove button
        removeButton.onclick = () => taskList.removeChild(li);

        li.appendChild(removeButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }


    // Attach Event Listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    
});