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
const list = document.querySelector<HTMLUListElement>(".list")
const form = document.querySelector<HTMLFormElement>(".new-task-form")
const input = document.querySelector<HTMLInputElement>(".new-task-title")



// Use the ? character when the thing we're attempting to query could be null
form?.addEventListener("submit", e => {
  e.preventDefault()
  if (input?.value == "" || input?.value == null) return
  const task: Task = {
    id: uuidv4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }

  function addListItem(task: Task) {}
})