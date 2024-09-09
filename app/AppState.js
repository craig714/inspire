// @ts-nocheck
import { Picture } from './models/Pictures.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null
  /**@type {Picture} */
  picture = null
  /**@type {Quote} */
  quote = null
  /**@type {ToDos} */
  toDos = null
}


export const AppState = createObservableProxy(new ObservableAppState())