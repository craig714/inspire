import { AppState } from "../AppState.js";
import { Quote } from "../models/Quote.js";
import { api } from "./AxiosService.js";

class InspireQuoteService {
  async getInspireQuote() {
    const response = await api.get('api/quotes')
    console.log('Got Quote', response.data)
    const newQuote = new Quote(response.data)
    AppState.quote = newQuote
    console.log('new quote', AppState.quote);
  }
}












export const inspireQuoteService = new InspireQuoteService()