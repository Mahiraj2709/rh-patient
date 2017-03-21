/**
 * Created by admin on 2/6/2017.
 */
ionicModule.controller('LoginCtrl', function ($scope, $ionicHistory, services,$state, popups, $location, $ionicSideMenuDelegate,$rootScope,$ionicPopup) {
    $ionicSideMenuDelegate.canDragContent(false)

    $state.go($state.current, {}, {reload: true});
    $ionicHistory.clearHistory()
    $ionicHistory.clearCache().then(function () {
        //$location.url('/app/home')
    })

    $scope.user = {
        device_id:'1',
        device_token:'23',
        device_type:'1',
        email:undefined,
        password:undefined
    }
    $scope.login = function () {
        if (validUser()) {
            services.login($scope.user, function (response) {
                //console.log("responce status : " +JSON.stringify(response));

                //var response = JSON.parse(response);

                if(response.data.status == SUCCESS_STATUS) {
                    //$rootScope.login = 'Log Out'
                    //clear data from current user
                    $scope.user = undefined
                    //set root scope
                    window.localStorage.setItem("profile", JSON.stringify(response.data.user));
                    //popups.showMessage(response.response_data.msg)
                    window.localStorage.setItem("login", true);
                    $ionicHistory.clearHistory()
                    $ionicHistory.clearCache().then(function () {
                        $location.url('/app/home')
                    })

                }else {
                    popups.showAlert(response.data.msg)
                }
            })
        }
    }
    function validUser() {
        if (!$scope.user.email ) {
            popups.showAlert("Email field can't be left blank");
            return false
        } else if (!validEmail($scope.user.email)) {
            popups.showAlert("Please enter a valid Email");
            return false
        }else if ($scope.user.password == undefined || $scope.user.password == '') {
            popups.showAlert("Password field can't be left blank!")
            return false
        } else if ($scope.user.password.length < 8) {
            popups.showAlert("Password must contain at least 8 characters");
            return false
        }
        return true
    }
    function validEmail(email) {
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
            return false;
        } else {
            return true;
        }
    }
})