//declared array of objects todo
const todo = [
    {
        task: 'Get Fresh', 
        completed: true
    },
    {
        task: 'Breakfast', 
        completed: true
    },
    {
        task: 'Pack your lunch tiffin', 
        completed: true
    },
    {
        task: 'Come to office', 
        completed: false
    },
    {
        task: 'Complete Your project', 
        completed: false
    },
    {
        task: 'back to PG',
        completed: false
    },
    {
        task: 'Dinner', 
        completed: false
    },
    {
        task: 'watch movie', 
        completed: false
    }
]; 
// created 3 button & input field for search 
// first button showing whole to do list with status 
// added event listener & object of elemnt for task & object of buttons for status 

document.querySelector('#today-todo-list').addEventListener('click',()=>{
    document.querySelector('#show-area').innerHTML = '';
    todo.forEach((item)=>{
        const taskobj = document.createElement('h2');
        taskobj.textContent = item.task;

        document.querySelector('#show-area').appendChild(taskobj);
        const buttonobj = document.createElement('button');
        buttonobj.textContent = 'status';
        document.querySelector('#show-area').appendChild(buttonobj);
        //click -> status -> show status & if status is shown click will be reseted
        buttonobj.addEventListener('click',(e)=>{
            if(e.target.textContent !== 'status'){
                e.target.textContent = 'status';
            }
            else{
                e.target.textContent = item.completed;
            }
        });
     })
});

const completedTask = todo.filter((item)=>item.completed)

const pendingTask = todo.filter((item)=>!item.completed)
// clicking on second button showing completed task array of object & entered with object of element

document.querySelector('#completed-todo-list').addEventListener('click',()=>{
    document.querySelector('#show-area').innerHTML = '';

    completedTask.forEach((item)=>{
        const completedTaskEle = document.createElement('h2');
        completedTaskEle.textContent = item.task;
        document.querySelector('#show-area').appendChild(completedTaskEle);
    })
})
// clicking on third button showing peding task array of object & entered with object of element


document.querySelector('#pending-todo-list').addEventListener('click',()=>{
    document.querySelector('#show-area').innerHTML = '';

    pendingTask.forEach((item)=>{
        const pendingTaskEle = document.createElement('h2');
        pendingTaskEle.textContent = item.task;
        document.querySelector('#show-area').appendChild(pendingTaskEle);
    })
})

//searching the task taking user input - based on filtering the array - showing the matched task of array by inseringe elements
const filters={
    searchText: ''
}

const searchResult = (todo, filters)=>{
    const filteredObj = todo.filter((item)=>
        item.task.toLowerCase().includes(filters.searchText.toLowerCase())
    )
    document.querySelector('#show-area').innerHTML = '';
    filteredObj.forEach((item)=>{
        const filteredObjEle = document.createElement('h2');
        filteredObjEle.textContent = item.task;
        document.querySelector('#show-area').appendChild(filteredObjEle);
    })
}

document.querySelector('#search-task').addEventListener('input', (e)=>{
    filters.searchText = e.target.value;
    searchResult(todo, filters);
})