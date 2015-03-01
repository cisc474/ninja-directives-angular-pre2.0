// Code goes here
angular.module("ninjaModule", [])
  .directive("ninja", function(){
    return {
      scope : {},
      templateUrl : "ninja.html",
      replace: true,
      link : function(scope, element, attrs) {
        scope.attack = attrs.weapon;
        scope.escape = attrs.escape;
      }
    };
  });

var theApp = angular.module("ninjaWorld", ["ninjaModule"]);