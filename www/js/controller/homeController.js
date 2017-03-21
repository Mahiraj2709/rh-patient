/**
 * Created by admin on 3/9/2017.
 */
ionicModule.controller('HomeCtrl', function ($scope, services, popups, $ionicHistory, $state, $rootScope) {
    //$ionicSideMenuDelegate.canDragContent(false)
    $state.go($state.current, {}, {reload: true});
    $ionicHistory.clearHistory()
    $ionicHistory.clearCache().then(function () {
        //$location.url('/app/home')
    })
    $scope.$on('$ionicView.enter', function () {
        $rootScope.myProfile = JSON.parse(window.localStorage.getItem("profile"))
        if ($rootScope.myProfile.profile_image != null)
            $rootScope.profile_image = imageURL + $rootScope.myProfile.profile_image
        else $rootScope.profile_image = 'img/default_image.jpg'
    })
})