;(function (){
	'use strict';

	// Angular Module
	angular.module('EvolveOvercome', ['ui.router'])

	.constant('server', {
    server: '',

    config: {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  })

	.config( function ($stateProvider, $urlRouterProvider){

    // Unmatched URLs config
    $urlRouterProvider.otherwise("/");

    //Setting states
    $stateProvider
      .state("home-page", {
        url: "/",
        templateUrl: "scripts/home/home.html"
      });
	});

}());
