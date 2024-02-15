
// 1.
function displaySecondFavoriteMovie() {
    let favoriteMovies = ['Inception', 'Jaws', 'Matrix', 'Mummy', 'Godfather'];
    console.log(favoriteMovies[1]); 
}

// 2.
function displayFavoriteUsingConstructor() {
    let movies = new Array(5);
    movies[0] = 'Inception';
    movies[1] = 'Jaws';
    movies[2] = 'Matrix';
    movies[3] = 'Mummy';
    movies[4] = 'Godfather';
    console.log(movies[0]); 
}

// 3.
function addMovieAndShowLength() {
    let movies = new Array(5);
    movies[0] = 'Inception';
    movies[1] = 'Jaws';
    movies[2] = 'Matrix';
    movies[3] = 'Mummy';
    movies[4] = 'Godfather';
    movies.splice(2, 0, 'Titanic');
    console.log(movies.length);
}

// 4.
function removeFirstMovie() {
    let movies = ['Inception', 'Jaws', 'Matrix', 'Mummy', 'Godfather'];
    delete movies[0];
    console.log(movies);
  }

// 5.
function loopAndDisplayMovies() {
    let movies = ['Inception', 'Jaws', 'Matrix', 'Mummy', 'Godfather', 'Titanic', 'Avatar'];
    for (let i = 0; i < movies.length; i++) 
        console.log(movies[i] + "\n");
}

// 6.
function loopForOfAndDisplayMovies() {
    let movies = ['Inception', 'Jaws', 'Matrix', 'Mummy', 'Godfather', 'Titanic', 'Avatar'];
    for (let movie of movies) 
        console.log(movie + "\n");
}

// 7.
function loopAndDisplaySortedMovies() {
    let movies = ['Inception', 'Jaws', 'Matrix', 'Mummy', 'Godfather', 'Titanic', 'Avatar'];
    movies.sort();
    for (let movie of movies)
        console.log(movie + "\n");
}

// 8.
function displayLikesAndDislikes() {
    let movies = ['Inception', 'Jaws', 'Matrix', 'Mummy', 'Godfather', 'Titanic', 'Avatar'];
    let leastFavMovies = ['Notebook', 'Twilight', 'Saw'];
    console.log('Movies I like:\n\n');
    for (let movie of movies)  console.log(movie + "\n");
    console.log('\nMovies I regret watching:\n\n');
    for (let movie of leastFavMovies) console.log(movie + "\n");
}

// 9.
function concatAndDisplayReverseSortMovies() {
    let movies = ['Inception', 'Jaws', 'Matrix', 'Mummy', 'Godfather', 'Titanic', 'Avatar'];
    let leastFavMovies = ['Notebook', 'Twilight', 'Saw'];
    let allMovies = movies.concat(leastFavMovies);
    allMovies.sort().reverse();
    for (let movie of allMovies) console.log(movie + "\n");
}

// 10.
function popLastMovie() {
    let movies = ['Inception', 'Jaws', 'Matrix', 'Mummy', 'Godfather', 'Titanic', 'Avatar'];
    let leastFavMovies = ['Notebook', 'Twilight', 'Saw'];
    let allMovies = movies.concat(leastFavMovies);
    allMovies.sort().reverse();
    let lastMovie = allMovies.pop();
    console.log(lastMovie);
}

// 11.
function displayFirstMovie() {
    let movies = ['Inception', 'Jaws', 'Matrix', 'Mummy', 'Godfather', 'Titanic', 'Avatar'];
    let leastFavMovies = ['Notebook', 'Twilight', 'Saw'];
    let allMovies = movies.concat(leastFavMovies);
    allMovies.sort().reverse();
    let firstMovie = allMovies.shift();
    console.log(firstMovie);
}

// 12.
function removeAndReplaceLeastFavMovie() {
    let movies = ['Inception', 'Jaws', 'Matrix', 'Mummy', 'Godfather', 'Titanic', 'Avatar'];
    let leastFavMovies = ['Notebook', 'Twilight', 'Saw'];
    let newMovies = ['Interstellar', 'Rocky', 'Terminator']
    let allMovies = movies.concat(leastFavMovies);
    allMovies.sort().reverse();

    let indexes = leastFavMovies.map(movie => allMovies.indexOf(movie));
    for (let index of indexes) allMovies[index] = newMovies.pop();
    console.log(allMovies);
}

// 13.
function loopMultiDimensionalArray() {
    let movies = [['Inception', 1], ['Jaws', 2], ['Matrix', 3], ['Mummy', 4], ['Godfather', 5]];
    let movieNames = movies.filter(movie => typeof movie[0] === 'string').map(movie => movie[0]);
    for (let name of movieNames) console.log(name);  
}

// 14.
function anonymousFunctionCall() {
    let employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally'];

    let showEmployee = function (employees) {
        console.log('Employees:\n');
        for (let employee of employees) console.log(employee);
    }
    showEmployee(employees);
}

// 15.
function filterValues(values) {
    return values.filter(Boolean);
}

// 16.
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// 17.
function getLargestNumber(arr) {
    return Math.max(...arr);
}


// Function calls

displaySecondFavoriteMovie();
displayFavoriteUsingConstructor();
addMovieAndShowLength();
removeFirstMovie();
loopAndDisplayMovies();
loopForOfAndDisplayMovies();
loopAndDisplaySortedMovies();
displayLikesAndDislikes();
concatAndDisplayReverseSortMovies();
popLastMovie();
displayFirstMovie();
removeAndReplaceLeastFavMovie();
loopMultiDimensionalArray();
anonymousFunctionCall();
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
console.log(getRandomElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(getLargestNumber([1, 2, 3, 44, 5, 6, 7, 8, 9, 144]));