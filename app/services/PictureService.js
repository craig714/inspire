import { AppState } from "../AppState.js"
import { Picture } from "../models/Pictures.js"
import { api } from "./AxiosService.js"

class InspirePicturesService {
  async getInspirePicture() {
    const response = await api.get('api/images')
    console.log('Got Picture', response.data)
    const newPicture = new Picture(response.data)
    AppState.picture = newPicture
    console.log('new picture', AppState.picture);
  }
}












export const inspirePicturesService = new InspirePicturesService()