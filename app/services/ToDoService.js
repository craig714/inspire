import { AppState } from "../AppState.js";
import { ToDo } from "../models/ToDo.js";
import { api } from "./AxiosService.js";





class ToDoService {
  async checkMark(toDoId) {
    const todos = AppState.myToDos

    const todoIndex = todos.findIndex(todo => todo.id == toDoId)
    const todo = todos[todoIndex]

    const toDoData = { completed: !todo.completed }

    const response = await api.put(`api/todos/${toDoId}`, toDoData)
    console.log('updated check mark', response.data);

    const updatedTodo = new ToDo(response.data)

    todos.splice(todoIndex, 1, updatedTodo)
  }

  async deleteToDo(toDoId) {
    const response = await api.delete(`api/todos/${toDoId}`)
    console.log('Deleted ToDo', response.data);

    const toDoIndex = AppState.myToDos.findIndex(toDo => toDo.id == toDoId)
    AppState.myToDos.splice(toDoIndex, 1)
  }


  async getToDoList() {
    const response = await api.get('api/todos')
    console.log('Got List', response.data);
    const toDos = response.data.map(toDosData => new ToDo(toDosData))
    AppState.myToDos = toDos
    console.log('todos!', AppState.myToDos)

  }


  async saveToDo(toDoFormData) {
    const response = await api.post('api/todos', toDoFormData)
    const newToDo = new ToDo(response.data)
    AppState.myToDos.push(newToDo)

  }







}






export const toDoService = new ToDoService()












