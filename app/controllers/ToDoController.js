import { AppState } from "../AppState.js"
import { api } from "../services/AxiosService.js"
import { toDoService } from "../services/ToDoService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class ToDoController {
  constructor() {
    console.log('To Do is working')
    AppState.on('user', this.getToDoList)
    AppState.on('myToDos', this.drawMyToDos)
  }


  async getToDoList() {
    try {
      await toDoService.getToDoList()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }




  async saveToDo() {
    try {
      event.preventDefault()
      console.log('saved todo');
      const toDoForm = event.target
      const toDoFormData = getFormData(toDoForm)
      console.log('form data', toDoFormData)
      await toDoService.saveToDo(toDoFormData)
    } catch (error) {
      console.error(error)
    }
  }

  drawMyToDos() {
    const craigtoDos = AppState.myToDos
    let toDoDetails = ''
    craigtoDos.forEach(todo => toDoDetails += todo.toDoDetailsTemplate)
    setHTML('craig-do', toDoDetails)

    const completedToDos = craigtoDos.filter(todo => todo.completed)
    setHTML('todo-counter', `${completedToDos.length}`)
  }


  async deleteToDo(toDoId) {
    try {
      const forSureDelete = await Pop.confirm('Are you really sure?')
      if (!forSureDelete) return
      await toDoService.deleteToDo(toDoId)
    } catch (error) {
      Pop.error(error)
      console.log(error)
    }
  }


  async checkMark(toDoId) {
    console.log('Checked is working', toDoId)
    try {
      await toDoService.checkMark(toDoId)
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }


}



