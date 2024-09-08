

import { AppState } from "../AppState.js"
import { inspirePicturesService } from "../services/PictureService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"




export class InspirePictureController {
  constructor() {
    console.log('Picture Controller is working')
    AppState.on('picture', this.drawInspirepicture)
    this.getInspirePicture()
  }


  async getInspirePicture() {
    try {
      await inspirePicturesService.getInspirePicture()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }


  drawInspirepicture() {
    const picture = AppState.picture
    setHTML('pic-details', picture.pictureDetailsTemplate)
    document.body.style.backgroundImage = `url(${picture.largeImgUrl})`
  }

}