import { api } from "./AxiosService.js";





class ToDoService {
  async getToDoList() {
    const response = await api.get('api/weather')
    console.log('Got List', response.data);
  }

}























export const toDoService = new ToDoService()












