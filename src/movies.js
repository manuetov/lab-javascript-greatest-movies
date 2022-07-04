// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
console.log(movies)
function getAllDirectors(moviesArray) {
  let films = moviesArray.map((movie) => {
    return movie.director
  })
  return films
}
console.log(getAllDirectors(movies))
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let filterMovies = moviesArray.filter((movie) => {
    let genreDrama = movie.genre.includes('Drama')
    if (movie.director === 'Steven Spielberg' && genreDrama){
      return movie.title
    }
  })
  return filterMovies
}
console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let avgScores = moviesArray.reduce((acc, movie) => {
    if (movie.score === undefined){
      return acc
    } else {
      return acc + movie.score
    }
  }, 0)
  let avg = avgScores / moviesArray.length  
  let avg2Decimals = avg.toFixed(2)
  let avg2DecimalsNumber = avg2Decimals
  return avg2DecimalsNumber
}

console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
// function dramaMoviesScore(moviesArray) {
//   const filterMovies = moviesArray.filter((movie) => {
//     let filterMovieDrama = movie.genre.includes('Drama')
//     let avgMoviesDrama = filterMovieDrama.reduce((acc, avgMovie) => {
//       if (avgMovie.score === undefined){
//         return acc
//       } else {
//         return acc + avgMovie.score
//       }
//     }, 0)
//     let avg = avgMoviesDrama / moviesArray.length  
//     let avg2Decimals = avg.toFixed(2)
//     let avg2DecimalsNumber = avg2Decimals
//     return avg2DecimalsNumber

//   })
//   return filterMovies

// }

// console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let sortYear = moviesArray.sort((a, b) => {
    if (a.year > b.year){
      return 1
    }else if (a.year < b.year){
      return -1
    }else return 0
  })
  return sortYear
}

console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let sortAbc = moviesArray.sort((a, b) => {
    if (a.title > b.title){
      return 1
    }else if (a.title < b.title){
      return -1
    }else return 0
  }).splice(1, 20)
  
  return sortAbc
}

console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
