import {v4 as uuidv4} from 'uuid'

type Task = {
  id: string, 
  title:string, 
  completed:boolean, 
  createdAt: Date
}



// not all selector functions can take an element type.
// getElementById will not take an element type. 
// You must append "as 'whatever element' " to the end
// const form = document.getElementById(".new-task-form") as HTMLFormElement | null
const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("new-task-form") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("#new-task-title")

console.log(form)

// Use the ? character when the thing we're attempting to query could be null
form?.addEventListener("submit", e => {
  e.preventDefault()

  if (input?.value == "" || input?.value == null) return
  const newTask: Task = {
    id: uuidv4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }
  addListItem(newTask)
  function addListItem(task: Task) {
    const item = document.createElement("li")
    const label = document.createElement("label")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    label.append(checkbox, task.title)
    item.append(label)
    list?.append(item)
  }
})