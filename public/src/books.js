function findAuthorById(authors, id) {
return authors.find(author => author.id === id);
}; 

function findBookById(books, id) {
const matchingBook = books.find((book) => book.id === id)
return matchingBook; 
};

function partitionBooksByBorrowedStatus(books) {
  const currentlyBorrowed = books.filter(book => 
    book.borrows.some(borrow => !borrow.returned)); 

  const returnedBooks = books.filter(book => 
    book.borrows.every(borrow => borrow.returned));

  return [currentlyBorrowed, returnedBooks];
};


function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    const account = accounts.find(acc => acc.id === borrow.id);
    return {...account, returned: borrow.returned};
  }).slice(0, 10);
};


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
