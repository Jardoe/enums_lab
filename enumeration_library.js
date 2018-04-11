const EnumerationLibrary = function(array) {
  this.array = array
}

EnumerationLibrary.prototype.find = function(callback) {
  // console.log("this is the function were looking at: ", callback) ;
  let theMovie;
  this.array.forEach((movie) => {
    if (callback(movie)) {
      theMovie = movie;
    };
  });
  return theMovie;
}

  // for(const movie of this.array){
  //   if(callback(movie)){
  //     return movie;
  //   }
  // }



EnumerationLibrary.prototype.map = function(callback) {
  const discountedMovies = [];

  this.array.forEach((movie) => {
    const discountedMovie = movie;
    discountedMovie['price'] = movie['price']*0.5;
    discountedMovies.push(discountedMovie);
  });

  // for(const movie of this.array) {
  //   const discountedMovie = movie;
  //   discountedMovie['price'] = movie['price']*0.5;
  //   discountedMovies.push(discountedMovie);
  //   // console.log("New price for ", movie.title, " is:", movie.price);
  // }
  return discountedMovies;

}

EnumerationLibrary.prototype.filter = function(callback) {
  const genreFilteredArray = [];

  this.array.forEach((movie) => {
    if(callback(movie)){
    genreFilteredArray.push(movie);
    }
  });

  // for(const movie of this.array){
  //   if(callback(movie)){
  //   genreFilteredArray.push(movie);
  //   }
  // }
  return genreFilteredArray;
}


EnumerationLibrary.prototype.some = function(callback) {
  let found = false;

  this.array.forEach((movie) => {
    if (callback(movie)){
      found = true;
    }
  });

  // for(const movie of this.array) {
  //   if (callback(movie)){
  //     found = true;
  //   }
  // }
  return found;
}

EnumerationLibrary.prototype.every = function(callback) {
  let found = true;

  this.array.forEach((movie) => {
    if(!callback(movie)){
      found = false;
    }
  });

  // for(const movie of this.array){
  //   if(!callback(movie)){
  //     found = false;
  //   }
  // }

  return found;
}


module.exports = EnumerationLibrary;
