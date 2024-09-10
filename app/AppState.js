import { Picture } from './models/Pictures.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Quote } from './models/Quote.js'
import { ToDo } from './models/ToDo.js'
import { Clock } from './models/Clock.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null
  /**@type {Picture} */
  picture = null
  /**@type {Quote} */
  quote = null
  /**@type {ToDo[]} */
  myToDos = []
  /**@type {Clock} */
  date = null

}


export const AppState = createObservableProxy(new ObservableAppState())