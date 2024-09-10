



export class ToDo {
  constructor(data) {
    this.id = data.id;
    this.completed = data.completed || false;
    this.creatorId = data.creatorId;
    this.description = data.description;
  }



  get toDoDetailsTemplate() {
    return /*html*/ `
          <div>
          <input onchange="app.ToDoController.checkMark('${this.id}')" type="checkbox" ${this.completed ? 'checked' : ''}>
          <span>${this.description}</span>
        </div>
        <div>
          <span onclick="app.ToDoController.deleteToDo('${this.id}')" class="mdi mdi-delete"></span>
        </div>
  `
  }





}






























