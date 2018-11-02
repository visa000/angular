(function() {
    var Book = function(bookId, bookName, author, price) {
        this.bookId = bookId;
        this.bookName = bookName;
        this.author = author;
        this.price = price;
    }

    Book.prototype.toString = function() {
        return this.bookName + ',' + this.author;
    }

    Book.prototype.discount = function() {
        return this.price * 0.10;
    }

    var javaBook = new Book(101, 'Head first java', 'kathy', 450);
    var dotNetBook = new Book(102, 'Mastering dotnet', 'orilee', 560);

    var bookList = [javaBook, dotNetBook];

    bookList.forEach(function(book, idx){
        console.log(idx++);
        console.log(book.toString());
        console.log(book.discount());
    });

})();