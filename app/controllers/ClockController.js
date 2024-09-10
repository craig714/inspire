import { Clock } from "../models/Clock.js";
import { setHTML } from "../utils/Writer.js";

export class ClockController {
  constructor() {
    console.log('Clock controller is working');
    this.drawClockTime()
  }


  drawClockTime() {
    const time = new Clock
    setHTML('time-time', time.ClockDetailsTemplate)


    setInterval(() => {
      time.date = new Date()
      setHTML('time-time', time.ClockDetailsTemplate)

    }, 1000)



  }






}