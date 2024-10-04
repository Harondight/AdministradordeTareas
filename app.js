const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Por favor, ingrese una tarea.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete-btn');
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = ''; 
});

taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        event.target.parentElement.remove();
    } else if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
});
