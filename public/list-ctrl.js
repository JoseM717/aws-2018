angular
    .module("ContactListApp")//con un solo parametro en vez de dos, se llama al que existe, si no, lo intentaria crear
        .controller("ListCtrl", function($scope){
            $scope.data ="hello";
        });