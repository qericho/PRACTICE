const userInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');
const listItem = document.getElementById('listItem');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    listItem.innerHTML = '';

    tasks.map((task, index) => {
        const newItem = document.createElement('li');
        newItem.classList.add('flex', 'p-2', 'justify-between', 'my-2', 'hover:bg-gray-300');

        const leftSide = document.createElement('div');
        leftSide.classList.add('flex', 'items-center', 'gap-2');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleTask(index));

        const taskText = document.createElement('h1');
        taskText.textContent = task.name;
        if (task.completed) {
            taskText.classList.add('line-through', 'text-gray-500'); 
        }

        leftSide.appendChild(checkbox);
        leftSide.appendChild(taskText);

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('flex', 'items-center', 'gap-2');

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('px-2', 'cursor-pointer', 'rounded-sm', 'text-white', 'bg-red-500', 'hover:bg-red-600');
        deleteBtn.addEventListener('click', () => deleteTask(index));

        const updateBtn = document.createElement('button');
        updateBtn.textContent = 'Update';
        updateBtn.classList.add('px-2', 'cursor-pointer', 'rounded-sm', 'text-white', 'bg-blue-500', 'hover:bg-blue-600');
        updateBtn.addEventListener('click', () => updateTask(index));

        buttonContainer.appendChild(deleteBtn);
        buttonContainer.appendChild(updateBtn);

        newItem.appendChild(leftSide);
        newItem.appendChild(buttonContainer);

        listItem.appendChild(newItem);
    });
}

submitBtn.addEventListener('click', () => {
    const newTask = userInput.value.trim();
    
    if (newTask === '') {
        alert('Please enter a valid task!');
        return;
    }

    tasks.push({ name: newTask, completed: false });
    saveToLocalStorage();
    userInput.value = '';
    renderTasks();
});

function deleteTask(index) {
    tasks.splice(index, 1);
    saveToLocalStorage();
    renderTasks();
}

function updateTask(index) {
    const newTask = prompt('Update task:', tasks[index].name);
    if (newTask) {
        tasks[index].name = newTask;
        saveToLocalStorage();
        renderTasks();
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveToLocalStorage();
    renderTasks();
}

renderTasks();
