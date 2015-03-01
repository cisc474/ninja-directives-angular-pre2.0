// In this style of Angular we built self contained components.
// This solves some problems which you might not even know exist yet in angular.
// This is a good practice for code reuse.

/* I'm going to make a ninja module which will have any special tags and attributes */
angular.module("ninjaModule", [])

/* This defines a "directive" which will tell angular what to do with any tags, attributes, or classes that match 
   "ninja", "x-ninja", or "data-ninja".  The function returns a JSON with many interesting and meaningful attributes.
*/
  .directive("ninja", function(){
    return {
      /* scope is the most interesting, it tells the directive what to allow from the scope it would naturally be in, 
      it prevents a lot of hierarchy issues when using nested components.  This empty scope basically allows the ninja directive 
      to live in a bubble.*/
      scope : {},
      /* this is where the ninja template lives */
      templateUrl : "ninja.html",
      /* I will replace my Ninja tag with my template */
      replace: true,
      /* this allows some DOM interaction, so here I read from the ninja tag and insert the values into the ninja scope.
         See the HTML for how I use this ninja directive.
      */
      link : function(scope, element, attrs) {
        scope.attack = attrs.weapon;
        scope.escape = attrs.escape;
      }
    };
  });

/* so here I make an actual app into which I inject the ninjaModule.  That's all I needed to do.*/
var theApp = angular.module("ninjaWorld", ["ninjaModule"]);
