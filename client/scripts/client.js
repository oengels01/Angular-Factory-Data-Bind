var myApp = angular.module('myApp', []);
myApp.controller('OneController', ['$scope','movieService', function($scope, movieService){
$scope.movie = {name:'', description:'', director:'', hours:''};

$scope.addMovie = movieService.addMovie;

}]);
myApp.controller('TwoController', ['$scope', 'movieService', function($scope, movieService){

$scope.addNewMovies = movieService.addMovie;
$scope.movies = movieService.newMovies;
// $scope.listingsNumber = 0;
// $scope.setListingsMovie = function(index) {
//     $scope.data.splice(index, 1);
// };
}]);

myApp.factory('movieService', [function(){

  var allMovies = [];

  var newMovies = {
   allMovies: allMovies
  };

  function addMovie(newMovie){
    allMovies.push(newMovie);

    console.log(allMovies);
  }

  return {
  addMovie : addMovie,
  newMovies: newMovies,
};
}]);

// var name = 'Movie name';
// var description = 'Description of the movie';
// var director = 'Director of the movie';
// var hours = 'Hours of the movie';
