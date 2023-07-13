let todo = [
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

showToDoList=(todo)=>{
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
}
document.querySelector('#form-name').addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(e.target.elements.nameOfTask.value)
    todo.push({
        task: e.target.elements.nameOfTask.value,
        completed: false
    })
    showToDoList(todo);

    e.target.elements.nameOfTask.value = '';
    showToDoList(todo);

})


const filters = {
    hideCompleted: false
}
const displayToDoList = (todo, filters) =>{
    const hideCompletedList = todo.filter((item)=> !filters.hideCompleted || !item.completed)
    document.querySelector('#show-area').innerHTML= '';
    
    hideCompletedList.forEach((item)=>{
        const hideCompletedListEle = document.createElement('h2');
        hideCompletedListEle.textContent = item.task;
        document.querySelector('#show-area').appendChild(hideCompletedListEle);
    })
} 
//const hideCompleted = todo.forEach((item)=>!todo.completed);
document.querySelector('#check-hide').addEventListener('change',(e)=>{
    filters.hideCompleted = e.target.checked;
    displayToDoList(todo, filters);
})

