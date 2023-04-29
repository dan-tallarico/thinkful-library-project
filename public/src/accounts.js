function findAccountById(accounts, id) {


let foundAccount = accounts.find((account)=> account.id === id);

return foundAccount;
  
  
};

  


function sortAccountsByLastName(accounts) {

const sortedLast = accounts.sort((accountA, accountB)=>(accountA.name.last > accountB.name.last ? 1 : -1));

return sortedLast;
}

function getTotalNumberOfBorrows(account, books) {


const borrowId = books.flatMap((book) => book.borrows).filter((borrow) => borrow.id === account.id)
.map((borrow) => borrow.id);
  

return borrowId.length;

}

function getBooksPossessedByAccount(account, books, authors) {

  const checkedOutBooks = [];
  for (let book of books) {
    if (book.borrows.some(borrow => borrow.id === account.id && !borrow.returned)) {
      // Get the author information for the book
      const author = authors.find(author => author.id === book.authorId);
      // Add the book object with author information to the checkedOutBooks array
      checkedOutBooks.push({ ...book, author });
    }
  }

  return checkedOutBooks;








}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
