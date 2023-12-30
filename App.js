document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e){

    let title = document.getElementById('title').value;
   
    let description = document.getElementById('description').value;

    const task = {
        title,
        description
    };
    localStorage.setItem('task, task');

    localStorage.setItem('tasks', JSON.stringify(task));
    //console.log(JSON.parse(localStorage.getItem('tasks')));

    e.preventDefault();
} 