module

.factory('Projects', function(){
  return {
    all: function (){
      var projectString = window.localStorage['projects'];
      if(projectString){
        return angular.fromJson(projectString);
      }
      return [];
    },
    save: function (projects){
      window.localStorage['projects'] = angular.toJson(projects);
    },
    newProject: function (projectTitle){
      return {
        title: projectTitle,
        tasks: []
      }
    },
    getLastActiveIndex: function() {
      return parseInt(window.localStorage['lastActiveProject']) || 0;
    },
    setLastActiveIndex: function(index) {
      window.localStorage['lastActiveProject'] = index;
    }
  }
})

.factory('TestService', function($http, $resource){
  var countries = [];
  
  return {
    countries: function (){
      var url = 'https://restcountries.eu/rest/v1/all';
      return $http({ url:url ,method:"GET"});
    },
  
    countries1: function (){
      var url = 'https://restcountries.eu/rest/v1/all';
      return $resource(url);
    }
  }
})

.factory('Countries', function($http){
  return {
    users: function (){
      var url = 'https://restcountries.eu/rest/v1/all';
      //return $http.jsonp(url);
      return $http({ url:url ,method:"GET"});
      //var restResult = $http.jsonp(url);
      //return restResult.result;
    }
  }
})

.factory('Users', function($http, $resource){
  return {
    users: function (){
      var url = 'data/users.json';
      return $resource(url);
    }
  }
})

;