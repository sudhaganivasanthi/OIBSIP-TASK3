function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() !== '') {
      var taskItem = document.createElement('li');
      taskItem.innerText = taskInput.value;
      taskItem.addEventListener('click', toggleColor);
      taskList.appendChild(taskItem);
  
      taskInput.value = '';
    }
  }
  
  function toggleColor(event) {
    var taskItem = event.target;
  
    if (taskItem.classList.contains('red')) {
      taskItem.classList.remove('red');
      taskItem.classList.add('green');
    } else if (taskItem.classList.contains('green')) {
      taskItem.classList.remove('green');
      taskItem.classList.add('blue');
    } else {
      taskItem.classList.remove('blue');
      taskItem.classList.add('red');
    }
  }
  