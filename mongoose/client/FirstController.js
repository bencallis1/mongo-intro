'use strict';

myApp.controller('FirstCtrl', function ($scope, ourSvc) {
    $scope.artists = ourSvc.artists;

    $scope.addArtist = function(){
        ourSvc.addArtist(buildArtist());
    };









    $scope.getArtist = function(){
        ourSvc.getArtist($scope.id)
    };




    $scope.getAllArtist = function(){
        ourSvc.getAll().then(function(response){
            $scope.artists = response;
            console.log(response)
        })
    };

    function buildArtist() {
        return {
            name: $scope.name,
            genre: $scope.genre,
            rating: $scope.rating,
            id: Math.random() * 5000
        }
    }


});


