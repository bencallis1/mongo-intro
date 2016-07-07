
myApp.service('ourSvc', function($http) {


    this.getAll = function() {
        return $http.get('http://localhost:3000/artists')
            .then(function(response){
                if(response.status === 200){
                    return response.data;

                }
            })
    };


    this.getArtist = function(id){
        return $http.get('http://localhost:3000/artists/' + id)
            .then(function(response){

                console.log(response.data);

                return response.data
            })
    };

    //this.addArtist = function(obj){
    //    return $http.post('http://localhost:3000/artists')
    //        .then(function(response){
    //            console.log(response);
    //
    //        })
    //
    //}









    this.addNewArtist = function (artistObj) {
        console.log(artistObj);
        if(artistObj.score >= 50 ) {
            this.reallyLike.push(artistObj);

        } else if (artistObj.score < 50 ) {
            this.kindOfLike.push(artistObj);

        }

    };

});