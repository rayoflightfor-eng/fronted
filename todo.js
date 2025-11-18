const taskInput = document.getElementById('taskInput');
const prioritySelect = document.getElementById('prioritySelect');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Load tasks from localStorage (Bonus)
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
renderTasks();

addTaskBtn.onclick = function() {
  addTask();
};

function addTask() {
  const text = taskInput.value.trim();
  const priority = prioritySelect.value;
  if (text === '') return;

  const task = { text, priority, completed: false };
  tasks.push(task);
  saveTasks();
  renderTasks();
  taskInput.value = '';
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, idx) => {
    const li = document.createElement('li');
    li.className = task.priority + (task.completed ? ' completed' : '');

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.onchange = () => toggleComplete(idx);

    // Task Text
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = task.text;
    // Edit on double click
    span.ondblclick = () => editTask(idx, span);

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.className = 'delete-btn';
    delBtn.textContent = 'Delete';
    delBtn.onclick = () => {
      tasks.splice(idx, 1);
      saveTasks();
      renderTasks();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

function toggleComplete(idx) {
  tasks[idx].completed = !tasks[idx].completed;
  saveTasks();
  renderTasks();
}

function editTask(idx, span) {
  const input = document.createElement('input');
  input.type = 'text';
  input.value = tasks[idx].text;
  input.onblur = () => finishEdit(idx, input.value, span);
  input.onkeydown = (e) => {
    if (e.key === 'Enter') input.blur();
  };
  span.parentNode.replaceChild(input, span);
  input.focus();
}

function finishEdit(idx, newText, inputElem) {
  if (newText.trim() !== '') tasks[idx].text = newText.trim();
  saveTasks();
  renderTasks();
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}