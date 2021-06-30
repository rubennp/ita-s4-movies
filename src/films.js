// import { movies } from './data.js';

// Exercise 1: Get the array of all directors.
const getAllDirectors = array => 
  array.map(el => el.director);

// Exercise 2: Get the films of a certain director
const getMoviesFromDirector = (array, director) => 
  array.filter(el => el.director === director);

// Exercise 3: Calculate the average of the films of a given director.
const moviesAverageOfDirector = (array, director) => 
  getMoviesFromDirector(array, director)
  .map(el => el.score)
  .reduce((total, actual, i, array) => (total + actual)/array.length);

// Exercise 4:  Alphabetic order by title 
const orderAlphabetically = array =>
  array
  // només el títol
  .map(el => el.title)                             
  // ordenat alfabèticament   
  .sort((a, b) => (a === b) ? 0 : (a > b) ? 1 : -1)
  // retorna només els 20 primers
  .filter((v, i) => i < 20);                                   

  // Exercise 5: Order by year, ascending
const orderByYear = array => 
  array
    // només any i títol en objecte
    .map(el => { return { "year": el.year, "title": el.title }; })
    // ordena per any
    .sort((a, b) => a.year - b.year)
    // anys iguals, ordena per títol alfabèticament
    .sort((a, b) => (a.year === b.year) ? (a.title > b.title) ? 1 : -1 : 0);

// Exercise 6: Calculate the average of the movies in a category
const moviesAverageByCategory = (array, category) => {
  let noScore = 0;

  return array
    .filter(el => el.genre.includes(category))
    .map(el => el.score)
    .reduce((total, actual, i, array) => {
      if (!actual) {
        ++noScore;
        return total;
      }
      return (total + actual)/array.length-noScore;
    });
  };
// console.log(moviesAverageByCategory(movies, 'Mystery'));

// Exercise 7: Modify the duration of movies to minutes
const hoursToMinutes = array => {
  return array
    .map(el => {
      return {
        ...el,
        duration: parseInt(duration.splt(" ")[0]) * 60 + (parseInt(duration.split(" ")[1]) || 0)
      };
    });
};

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
