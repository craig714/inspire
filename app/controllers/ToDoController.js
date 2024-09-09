import { AppState } from "../AppState.js"
import { api } from "../services/AxiosService.js"
import { toDoService } from "../services/ToDoService.js"
import { Pop } from "../utils/Pop.js"

export class ToDoController {
  constructor() {
    console.log('To Do is working')
    AppState.on('user', this.getToDoList)

  }


  async getToDoList() {
    try {
      await toDoService.getToDoList()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }




  async savedToDo() {
    try {
      await toDoService.savedToDo()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }








}
