module

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('base', {
    url: '',
    abstract: true,
    templateUrl: 'templates/base.html',
    controller: 'BaseCtrl'
  })
  .state('base.home', {
    url: '/home',
    views: {
      'content': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  .state('base.search', {
    url: '/search',
    views: {
      'content': {
        templateUrl: 'templates/search.html',
        controller: 'TestCtrl'
      }
    }
  })
  .state('base.profile', {
    url: '/profile',
    views: {
      'content': {
        templateUrl: 'templates/profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })
  .state('base.users', {
    url: '/users',
    views: {
      'content': {
        templateUrl: 'templates/users.html',
        controller: 'UsersCtrl'
      }
    }
  })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
});