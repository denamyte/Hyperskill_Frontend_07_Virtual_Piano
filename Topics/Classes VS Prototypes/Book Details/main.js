class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}`)
    }
}