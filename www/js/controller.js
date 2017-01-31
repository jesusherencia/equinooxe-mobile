module

.controller('BaseCtrl', function($scope){
    $scope.content = 'BaseCtrl';
})
.controller('HomeCtrl', function($scope){
    $scope.content = 'HomeCtrl';
})
.controller('ProfileCtrl', function($scope){
    $scope.content = 'ProfileCtrl';
})
.controller('TestCtrl', function($scope, TestService){
    var aaa = TestService.countries1();
    //console.log(aaa.get());
    console.log(aaa.query());
    /*aaa.then(function(response){
        $scope.countries = response.data;
    });*/
    $scope.countries = aaa.query();
    
});