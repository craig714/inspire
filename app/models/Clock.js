export class Clock {
  constructor(data) {
    this.date = new Date()
  }




  get ClockDetailsTemplate() {
    return `
    
    
    <div class="no-select">${this.LocalTime}</div>
    
    
    
    
    `
  }


  get LocalTime() {
    return this.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }



}