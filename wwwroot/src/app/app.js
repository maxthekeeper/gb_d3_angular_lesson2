require('./register-dependencies');

var rootTemplate = require('./view/root/root.html');
var mainTemplate = require('./view/main/main.html');
var lesson1Template = require('./view/lessons/lesson1.html');

(function (angular) {
    'use strict';

    angular
        .module('app', ['ui.router', 'ui.bootstrap'])
        .config(
        ['$locationProvider', '$urlRouterProvider', '$stateProvider',
            function($locationProvider, $urlRouterProvider, $stateProvider) {
                $locationProvider.hashPrefix('!').html5Mode(true);

                $stateProvider
                    .state('root', {
                        url: '/',
                        abstract: true,
                        template: rootTemplate,
                        controller: 'root.controller',
                        controllerAs: 'root' 
                    })
                    .state('main', {
                        url: '/main',
                        template: mainTemplate,
                        controller: 'main.controller',
                        controllerAs: 'main' 
                    })
                    .state('lesson1', {
                        url: '/lesson1',
                        template:lesson1Template,
                        controller: 'lesson1.controller',
                        controllerAs: 'lesson1'
                    });

                $urlRouterProvider.otherwise('/');
            }
        ])
        .run(['$rootScope',
            function ($rootScope) {

            }
        ]);

    require('./register'); //вызов модуля зависимостей приложения

})(angular);