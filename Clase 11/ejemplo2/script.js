const newTaskInput = document.getElementById("newTask")
const addTaskButton = document.getElementById("addTask")
const taskList = document.getElementById("taskList")

addTaskButton.addEventListener("click", () => {
  const taskText = newTaskInput.value.trim()
  if (taskText) {
    addTask(taskText)
    newTaskInput.value = ""
  }
});

function addTask(taskText) {
  const taskItem = document.createElement("li")
  taskItem.classList.add("task")

  const taskContent = document.createElement('span')
  taskContent.textContent=taskText

  const deleteButton = document.createElement('span')
  deleteButton.textContent='❌'
  deleteButton.classList.add('delete')

  taskContent.addEventListener('click',()=>{
    taskContent.classList.toggle('completed')
  })

  deleteButton.addEventListener('click',()=>{
    taskList.removeChild(taskItem)
  })

  taskItem.appendChild(taskContent)
  taskItem.appendChild(deleteButton)
  taskList.appendChild(taskItem)
}
