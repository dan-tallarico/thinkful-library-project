function getTotalBooksCount(books) {

  return books.length;
}

function getTotalAccountsCount(accounts) {

  return accounts.length;
}

function getBooksBorrowedCount(books) {


  //this code takes the array of books, then goes through every object in the book and does a few things.
  //first, it flattens out the "borrows" object so we can access that data
  //then it goes through that section of the object and if the book is NOT returned, it maps it to the array.
  const booksBorrowed = books.flatMap((book) => book.borrows).filter((borrow) => !borrow.returned)
.map((borrow) => borrow.id);

return booksBorrowed.length;

}

function getMostCommonGenres(books) {

  //loop through the list of books and get each different genre
  //once you have a list of the genre, count up each instance of that
  //put all that back in an array and order by count
  //loop until end of array, then you have a list of genres
  //then you can go through the book list and filter out genre that matches array 0, 1, 2.
  //return the length, and that becomes the count.
  //then you can filter that array 

let genreNumber = [];

//this is a helper function to get the list of the book of genres. This wasn't taught in the
//thinkful class so I had to a bit of digging to figure out the reduce method. very cool!
function listOfGenres(books){
  

  let listOfTheGenres = books.reduce((acc, { genre }) => {
    if (!acc.includes(genre)) {
      acc.push(genre);
    }
    return acc;
  }, []);
  
  return listOfTheGenres;
}
//gets a list of genres through the helper function
let genreList = listOfGenres(books);


for (let i = 0; i < genreList.length; i++){
  let genreCount = [];
  let tempGenre;
 genreCount = books.filter(book =>book.genre.includes(genreList[i]));

 tempGenre = genreCount.length;
 genreNumber.push(tempGenre);

}

//there might be a better way to put these together, but using map to turn these values into key/value pairs.
let newGenreList = genreList.map(genre=>({name: genre}));
let newGenreNumber = genreNumber.map(number=>({count: number}));

const mergedArray = newGenreList.map((genre, index) => ({ name: genre.name, count: newGenreNumber[index].count }));

mergedArray.sort((counta,countb)=>counta.count>countb.count? -1 : 1);



return mergedArray.slice(0,5);


}



function getMostPopularBooks(books) {

let bookName = [];


for(let book of books){

  let popularity = book.borrows.length;
  let bookTitle = book.title;
  
  bookName.push({name: bookTitle, count: popularity});
  

}

bookName.sort((counta,countb)=>counta.count>countb.count? -1 : 1);

return bookName.slice(0,5);
}

function getMostPopularAuthors(books, authors) {

  let authorList = [];
  
  for(let author of authors){
    let authorCount = 0;
    let authorFullName = author.name.first + ' ' + author.name.last;
    for(let book of books){
      if(author.id === book.authorId){
        
        authorCount += book.borrows.length;
      }
    }
    authorList.push({name: authorFullName, count: authorCount});
    
  }
  
  authorList.sort((counta,countb)=>counta.count>countb.count? -1 : 1);
  //this returns the author list and reduces the items to only 5 results.
  return authorList.slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
