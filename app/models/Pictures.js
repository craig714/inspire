



export class Picture {
  constructor(data) {
    this.largeImgUrl = data.largeImgUrl
    this.author = data.author

  }




  get pictureDetailsTemplate() {
    return `
    <div>
        <h1 class="text-light">Image by: ${this.author}.</h1>
      </div>
    `
  }
}




const data = {

  "url": "https://pixabay.com/get/gd099ef6c47167e0d7df1badb0a3028f575065f2864250c98591e5a9edd2eb30cc4373a57774c49b39e14bd28afdd9c4fc335d4a1e633c37bf6df7339862c3330_640.jpg",
  "imgUrl": "https://pixabay.com/get/gd099ef6c47167e0d7df1badb0a3028f575065f2864250c98591e5a9edd2eb30cc4373a57774c49b39e14bd28afdd9c4fc335d4a1e633c37bf6df7339862c3330_640.jpg",
  "largeImgUrl": "https://pixabay.com/get/gebcb582f5c8eda0058b5c0bb0b94766b38e543545c948ab3e6f4db25b4e5fd8cac9f1b46cb848933a5f5ad6993406cdc434475017dd5a3d25d0fe40dfa06180b_1280.jpg",
  "tags": "winter, snow, plant",
  "author": "farago_jozsef",
  "views": 32126,
  "downloads": 27892,
  "likes": 97,
  "userImageUrl": "https://cdn.pixabay.com/user/2024/05/24/18-52-52-820_250x250.jpeg",
  "query": "snow"
}
