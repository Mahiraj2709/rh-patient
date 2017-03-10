// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var ionicApplicationName = 'ReviveHydration';
var ionicModule = angular.module(ionicApplicationName, ['ionic', 'starter.controllers', 'ngCordova'])
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })
            .state('app.login', {
                url: '/login',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/login.html',
                        controller: 'LoginCtrl'
                    }
                }
            })
            .state('app.register', {
                url: '/register',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/sign_up.html',
                        controller: 'RegisterCtrl'
                    }
                }
            })
            .state('app.forgot_password', {
                url: '/forgot_password',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/forgot_password.html',
                        controller: 'ForgotPasswdCtrl'
                    }
                }
            })
            .state('app.email_not_found', {
                url: '/email_not_found',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/email_not_found.html',
                        //controller: 'PlaylistsCtrl'
                    }
                }
            })
            .state('app.verify_email', {
                url: '/verify_email',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/verify_email.html',
                        //controller: 'PlaylistsCtrl'
                    }
                }
            })
            .state('app.choose_new_password', {
                url: '/choose_new_password',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/choose_new_password.html',
                        //controller: 'PlaylistsCtrl'
                    }
                }
            })
            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html',
                        controller: 'HomeCtrl'
                    }
                }
            })
        // if none of the above states are matched, use this as the fallback
        if (localStorage.getItem('login')) {
            $urlRouterProvider.otherwise('/app/home');
        } else
            $urlRouterProvider.otherwise('/app/login');
    });
