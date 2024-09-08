import { toDoService } from "../services/ToDoService.js"
import { Pop } from "../utils/Pop.js"

export class ToDoController {
  constructor() {
    this.getToDoList()
    console.log('To Do is working')
  }


  async getToDoList() {
    try {
      await toDoService.getToDoList()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
}