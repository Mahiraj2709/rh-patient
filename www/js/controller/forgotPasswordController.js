/**
 * Created by admin on 3/9/2017.
 */
ionicModule.controller('ForgotPasswdCtrl', function ($scope, services, popups, $location, $ionicSideMenuDelegate) {
    $ionicSideMenuDelegate.canDragContent(false)
    $scope.user = {
        email:undefined
    }
    $scope.forgotPassword = function () {
        if (!$scope.user.email) {
            popups.showAlert("Email field can't be left blank");
            return false
        } else if (!validEmail($scope.user.email)) {
            popups.showAlert("Please enter a valid Email");
            return false
        } else {
            services.forgotPassword($scope.user, function (response) {
                console.log("responce status : " +JSON.stringify(response));

                //var response = JSON.parse(response);
                if (response.data.status == SUCCESS_STATUS) {
                    $location.url('/app/verify_email')
                } else {
                    $location.url('/app/email_not_found')
                }
            })
        }
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
