var rpg = angular.module('rpg')(['ngRoute']).
    config(['$routeProvider', function(routeProvider){
            $routeProvier.
                    when('/home',{
                    templateUrl: '/rpg/rpg.html',
                    controller: 'rpgController'}).
                    
                    otherwise({redirectTo: '/rpg.html'});
                    
    }]);