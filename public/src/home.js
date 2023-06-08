function getTotalBooksCount(books) {
  return books.length;
}


function getTotalAccountsCount(accounts) {
return accounts.length;
}

function getBooksBorrowedCount(books) {
  const currentlyBorrowed = books.filter(book => 
    book.borrows.some(borrow => !borrow.returned));
  return currentlyBorrowed.length;
}

function getMostCommonGenres(books) {
  const genresCount = books.reduce((result, book) => {
    result[book.genre] ? result[book.genre]++ : result[book.genre] = 1;
    return result;
  }, {});

  let genreArray = [];
  
  for (let genre in genresCount) {
    genreArray.push({name: genre, count: genresCount[genre]});
  }

  genreArray.sort((a, b) => b.count - a.count);

  return genreArray.slice(0, 5);
}


function getMostPopularBooks(books) {
  let result = books.map((book) => {
    return { name: book.title, count: book.borrows.length };
  });

  result.sort((bookA, bookB) => bookB.count - bookA.count);

  return result.slice(0, 5);
}


function getTotalBorrows(book) {
  return book.borrows.length;
}


function getMostPopularAuthors(books, authors) {
  let result = authors.map(author => {
    let authorBooks = books.filter(book => book.authorId === author.id);
    let count = authorBooks.reduce((acc, book) => acc + getTotalBorrows(book), 0);
    return {name: `${author.name.first} ${author.name.last}`, count};
  });

  result.sort((a, b) => b.count - a.count);
  return result.slice(0, 5);
}





/*function getMostPopularAuthors(books, authors) {
  let result = authors.map(author => {
    let authorBooks = books.filter(book => book.authorId === author.id);
    let count = authorBooks.reduce((acc, book) => acc + book.borrows.length, 0);
    return {name: `${author.name.first} ${author.name.last}`, count};
  });

  result.sort((a, b) => b.count - a.count);
  return result.slice(0, 5);
}*/


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
