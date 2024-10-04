// Selecciona el formulario, el campo de entrada de tareas, y la lista de tareas por sus IDs.
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Añade un "listener" para escuchar cuando se envíe el formulario.
taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe (y se recargue la página).

    const taskText = taskInput.value.trim(); // Obtiene el texto de la tarea y elimina espacios innecesarios.

    // Si el campo de entrada está vacío, muestra una alerta y no agrega la tarea.
    if (taskText === '') {
        alert('Por favor, ingrese una tarea.');
        return; // Sale de la función si no hay texto.
    }

    // Crea un nuevo elemento <li> (una nueva tarea) y asigna el texto de la tarea.
    const li = document.createElement('li');
    li.textContent = taskText;

    // Crea un botón "Eliminar" para cada tarea.
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar'; // Texto del botón de eliminar.
    deleteBtn.classList.add('delete-btn'); // Le añade la clase para aplicar los estilos CSS.
    li.appendChild(deleteBtn); // Añade el botón de eliminar dentro del elemento <li>.

    // Añade la nueva tarea (elemento <li>) a la lista de tareas (<ul>).
    taskList.appendChild(li);

    // Limpia el campo de entrada para que esté vacío después de añadir la tarea.
    taskInput.value = ''; 
});

// Listener para gestionar los clics en la lista de tareas.
taskList.addEventListener('click', function(event) {
    // Verifica si el clic fue en un botón de eliminar.
    if (event.target.classList.contains('delete-btn')) {
        event.target.parentElement.remove(); // Si fue un botón, elimina la tarea (el <li> padre del botón).
    } 
    // Si el clic fue en un elemento <li> (la tarea), alterna la clase 'completed' (para marcar como completada o no).
    else if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed'); // Añade o quita la clase 'completed' del <li>.
    }
});
