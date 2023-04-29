function findAuthorById(authors, id) {

  let foundAuthor = authors.find((account)=> account.id === id);


return foundAuthor;

}

function findBookById(books, id) {

  let foundBook = books.find(book => book.id === id);
  return foundBook;
}

function partitionBooksByBorrowedStatus(books) {

  let booksOut = [];
  let booksIn = [];
  
//goes through the book objects and determines if the book is in stock or not.
//if it's not in stock it gets sent to one array versus another.
for(let book of books){

  if (!book.borrows[0].returned){

  booksOut.push(book);
  }
  else{

  booksIn.push(book);
  }
}



let combinedArray = [booksOut,booksIn];
return combinedArray;


  
};


function getBorrowersForBook(book, accounts) {

  //go through the book object
  //get the account ID and return status
  //take that return status, add it to the account array
  const accountList = [];

  for (let account of accounts) {
    if (book.borrows.some(borrow => borrow.id === account.id)) {
      
      
      
      let borrowerStatus = book.borrows.find(borrow => borrow.id === account.id);
      

      // Get the author information for the book
      //const author = authors.find(author => author.id === book.authorId);
      // Add the book object with author information to the checkedOutBooks array
      accountList.push({ ...account, ...borrowerStatus});
      
    }
  }
  
return accountList.slice(0, 10);

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
