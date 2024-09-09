

export class Quote {
  constructor(data) {
    this.content = data.content
    this.author = data.author
  }









  get quoteDetailsTemplate() {
    return  /*html*/ `
    <div id="quote-details" class="col-12 container-quote">
    <p class="fs-3">"${this.content}"</p> 
    
    <p class="fs-4 secret-text secret-text:hover">-${this.author}-</p>
    </div>
     
    
    
    
    `
  }


}

const data = {

  "_id": "SDIuXTOSqNz-",
  "content": "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.",
  "author": "Albert Camus",
  "tags": [
    "Famous Quotes",
    "Life",
    "Happiness"
  ],
  "authorSlug": "albert-camus",
  "length": 145,
  "dateAdded": "2019-03-24",
  "dateModified": "2023-04-14"
}






