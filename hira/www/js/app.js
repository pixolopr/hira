// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'Mydatabase', 'myservices', 'ngCordova', 'ngMessages', ])

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

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $stateProvider

            .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })

        .state('app.epapers', {
            url: '/epapers',
            views: {
                'menuContent': {
                    templateUrl: 'templates/epapers.html',
                    controller: 'epapersCtrl'
                }
            }
        })

        .state('app.settings', {
                url: '/settings',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/settings.html',
                        controller: 'settingsCtrl'
                    }
                }
            })
            .state('app.login', {
                url: '/login',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/login.html',
                        controller: 'loginCtrl'
                    }
                }
            })
            .state('app.signup', {
                url: '/signup',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/signup.html',
                        controller: 'signupCtrl'
                    }
                }
            })
            .state('app.forgot', {
                url: '/forgot',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/forgot.html',
                        controller: 'forgotCtrl'
                    }
                }
            })
            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html',
                        controller: 'homeCtrl'
                    }
                }
            })
            .state('app.category', {
                url: '/category/:catid',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/category.html',
                        controller: 'categoryCtrl'
                    }
                }
            })

        .state('app.gallery', {
            url: '/gallery/:newsid',
            views: {
                'menuContent': {
                    templateUrl: 'templates/gallery.html',
                    controller: 'galleryCtrl'
                }
            }
        })

        .state('app.fullarticle', {
                url: '/fullarticle/:newsid',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/fullarticle.html',
                        controller: 'fullarticleCtrl'
                    }
                }
            })
            .state('app.readpaper', {
                url: '/readpaper',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/readpaper.html',
                        controller: 'readpaperCtrl'
                    }
                }
            })
            .state('app.writeblog', {
                url: '/writeblog',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/writeblog.html',
                        controller: 'writeblogCtrl'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');

        $ionicConfigProvider.navBar.alignTitle('center');
    })
    .filter('timestampToISO', function () {
        return function (input) {
            input = new Date(input).toISOString();
            return input;
        };
    });