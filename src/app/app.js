angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ngBoilerplate.features',
  'ui.router.state',
  'ui.route'
])

  .config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
      $locationProvider.html5Mode(true).hashPrefix('!');
      $urlRouterProvider.otherwise( '/home' );
  })

  .run( function run () {
  })

  /*.run(function($rootScope, $window) {
    $rootScope.$on("$locationChangeSuccess", function (event, next, current) {
      // $rootScope.transitionClass = "";
    });
    $rootScope.$on("$locationChangeStart", function (event, next, current) {

      // url slug : shortening the url to stuff that follows after "#"
      current = current.slice( current.lastIndexOf('#')+1, current.length );
      next =    next.slice( next.lastIndexOf('#')+1, next.length );

      // apply transition class according to route
      switch( next ){
        // trigger "back" transition
        case $rootScope.lastPage:   $rootScope.transitionClass = $rootScope.backTransition; break;
        // trigger "regular" transitions
        case '/one':                $rootScope.transitionClass = "RL"; break;
        case '/two':                $rootScope.transitionClass = "LR"; break;
        case '/three':              $rootScope.transitionClass = "RL"; break;
      }

      // set "back" transition class according to currently set transitionClass
      switch( $rootScope.transitionClass ){
        case 'RL':    $rootScope.backTransition = "LR"; break;
        case 'LR':    $rootScope.backTransition = "RL"; break;
        default:      console.log("couldn't set backTransition");
      }

      // save current page slug, so we can check next time whether "back" transition should be triggered
      $rootScope.lastPage = current;

      // log stuff
      console.log("locationChange from:"+ current +" to:"+ next +" transition:"+ $rootScope.transitionClass +" backTransition:"+ $rootScope.backTransition);
    })
  })*/


  .controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      if ( angular.isDefined( toState.data.pageTitle ) ) {
        $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
      }
    });
  })

;

