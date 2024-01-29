const movies = [
  { title: "Jaws", director: "Steven Spielberg", year: "1975" },

  { title: "Star Wars", director: "George Lucas", year: "1977" },

  {title: "Avengers: Infinity War", director: "Anthony and Joe Russo", year: "2018"},

  { title: "Top Gun", director: "Tony Scott", year: "1986" },

  { title: "Justice League", director: "Zack Snyder", year: "2017" }
];

// Part 1 - Create a function to find a movie and output it's detail

/* function findMovie(movieTitle) {

  for (let Movie of movies){
    if (Movie.title === movieTitle) {
    console.log(`The movie ${Movie.title}, directed by ${Movie.director} was made in ${Movie.year}`)
    }
    //console.log(Movie);
  }
  console.log(Movie);
}


findMovie("Top Gun");

var Movie = "Thor: Ragnorok"; //var allows
console.log(Movie); //just Movie without variable causes reference errors

findMovie(Movie);
console.log(Movie); */



// Part 2 = Create a function to return a movie object


function returnMovie (movieTitle){

  for (let movie of movies){
    if (movie.title === movieTitle){
      return movie; // returns when matched
    }
    console.log(movie); //returns anything entries in dcitionary beforehand
  }
  //console.log("Any text, any text at all");
  return "Movie Not Found!"; // ends loop with returned value

}

let myMovie = returnMovie("Avengers: Infinity War");
console.log(myMovie);

//properties of myMovie
console.log(`The movie ${myMovie.title} directed by ${myMovie.director} was made in ${myMovie.year}`);


let myOtherMovie = returnMovie("Thor: Ragnorok");
console.log(myOtherMovie); //what is undefined?



/*
Create a function called myMovieDetails that takes a variable anyMovie as an argument.
38.
Check that the typeof anyMovie is an 'object' and return a suitable string if it’s and simply return anyMovie if it’sn't.
39.
Inside a console.log, call myMovieDetails with an argument of myOtherMovie.
40.
Observe the results.
It should output: Movie not found. */

function myMovieDetails (anyMovie){
  if (typeof anyMovie === "object"){
    return (`The movie ${myMovie.title} directed by ${myMovie.director} was made in ${myMovie.year}`);
  }
  else{
    return anyMovie;
  }
  
}
console.log(myMovieDetails(myOtherMovie)) //showing movie not found as "thor raggy"
console.log(myMovieDetails(returnMovie("Jaws"))); 


