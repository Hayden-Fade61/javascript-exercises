const getTheTitles = function(books) {
  let result = Array(books.length);
  return books.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
