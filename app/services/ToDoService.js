import { AppState } from "../AppState.js";
import { ToDo } from "../models/ToDo.js";
import { api } from "./AxiosService.js";





class ToDoService {




  async savedToDo() {
    const response = await api.post('api/todos', AppState.toDos)
    console.log('Saved to do', response.data);

  }







  async getToDoList() {
    const response = await api.get('api/todos')
    console.log('Got List', response.data);
    const toDos = response.data.map(toDosData => new ToDo(toDosData))
    AppState.toDos = toDos
    console.log('todos!', AppState.toDos)

  }









}






export const toDoService = new ToDoService()












