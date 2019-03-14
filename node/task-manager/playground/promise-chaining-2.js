require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5c896afa33d2a150d1655c74', { }).then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5c89ae7cecc90a6d361a33ee').then((count) => {
    console.log(count + ' tasks in task-manager-api/tasks.')
}).catch((e) => {
    console.log(e)
}) 

// createTask in postman
// take ID from task and run it 