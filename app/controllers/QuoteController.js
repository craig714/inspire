import { AppState } from "../AppState.js"
import { inspireQuoteService } from "../services/QuoteService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class InspireQuoteController {
  constructor() {
    console.log('Quote Controller is working')
    AppState.on('quote', this.drawInspireQuote)
    this.getInspireQuote()
  }


  async getInspireQuote() {
    try {
      await inspireQuoteService.getInspireQuote()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  drawInspireQuote() {
    const quote = AppState.quote
    setHTML('quote-details', quote.quoteDetailsTemplate)

  }


}

