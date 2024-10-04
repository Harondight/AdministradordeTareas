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

    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            event.target.parentElement.remove();
        }
    });

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            tasks.push({
                text: li.firstChild.textContent,
                completed: li.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.text;
    
            if (task.completed) {
                li.classList.add('completed');
            }
    
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Eliminar';
            deleteBtn.classList.add('delete-btn');
            li.appendChild(deleteBtn);
    
            taskList.appendChild(li);
        });
    }
    
    loadTasks();
    
    taskForm.addEventListener('submit', saveTasks);
    taskList.addEventListener('click', saveTasks);

    taskList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('completed');
            saveTasks(); 
        }
    });
    

    taskInput.value = ''; 
});
