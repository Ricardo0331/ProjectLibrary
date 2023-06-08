function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
};


function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => 
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1 
    );
    return accounts;
};

function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0;
  
  books.forEach(book => {
    const borrows = book.borrows.filter(borrow => borrow.id === account.id);
    totalBorrows += borrows.length;
  });

  return totalBorrows;
};



function getBooksPossessedByAccount(account, books, authors) {
  const currentlyBorrowed = books.filter(book => 
    book.borrows.some(borrow => borrow.id === account.id && !borrow.returned)
  );

  currentlyBorrowed.forEach(book => {
    book.author = authors.find(author => author.id === book.authorId);
  });

  return currentlyBorrowed;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
