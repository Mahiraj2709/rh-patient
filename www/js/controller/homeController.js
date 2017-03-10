/**
 * Created by admin on 3/9/2017.
 */
ionicModule.controller('HomeCtrl', function ($scope, services, popups, $ionicHistory,$state) {
    //$ionicSideMenuDelegate.canDragContent(false)
    $state.go($state.current, {}, {reload: true});
    $ionicHistory.clearHistory()
    $ionicHistory.clearCache().then(function () {
        //$location.url('/app/home')
    })
})