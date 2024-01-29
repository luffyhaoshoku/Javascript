const movies = [
  { title: "Jaws", director: "Steven Spielberg", year: "1975" },

  { title: "Star Wars", director: "George Lucas", year: "1977" },

  {title: "Avengers: Infinity War", director: "Anthony and Joe Russo", year: "2018"},

  { title: "Top Gun", director: "Tony Scott", year: "1986" },

  { title: "Justice League", director: "Zack Snyder", year: "2017" }
];

// Part 1 - Create a function to find a movie and output it's detail

function findMovie(movieTitle) {

  for (let Movie of movies){
    if (Movie.title === movieTitle) {
    console.log(`The movie ${Movie.title}, directed by ${Movie.director} was made in ${Movie.year}`)
    }
    //console.log(Movie);
  }
  console.log(Movie);
}


findMovie("Top Gun");

var Movie = "Thor: Ragnorok";
console.log(Movie); //just Movie without variable causes reference errors

findMovie(Movie);
console.log(Movie);
// Part 2 = Create a function to return a movie object


