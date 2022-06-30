const tasks = {
    tasks:[
    {
        text: 'Task 1',
        completed : true
    },
    {
        text: 'Task 2',
        completed : false
    },
    {
        text: 'Task 3',
        completed : false
    }],
    getTasksToDo()
    {
        return this.tasks.filter((task)=>!task.completed)
    }
}

console.log(tasks.getTasksToDo())