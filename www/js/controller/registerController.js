/**
 * Created by admin on 2/6/2017.
 */
ionicModule.controller('RegisterCtrl', function ($scope, $ionicHistory, services, popups,$location,images,$ionicPopup,$ionicModal ) {

    // When button is clicked, the popup will be shown...
    $scope.imageChooser = function (type) {
        // Custom popup
        $scope.myPopup = $ionicPopup.show({
            templateUrl: 'templates/dialog/image_chooser.html',
            scope: $scope,
        });
    };

    //scope close the pop-up on cancel icon clicked
    $scope.closePopUp = function () {
        $scope.myPopup.close();
    }
    $scope.takeImage = function () {
        $scope.closePopUp()
        $scope.image = images.captureImage(function (image) {
            $scope.profilePic = image;
        },function (error) {

        })
    }
    $scope.chooseImage = function () {
        $scope.closePopUp()
        $scope.image = images.chooseImage(function (image) {
            $scope.profilePic = image;
        },function (error) {

        })
    }
    $scope.userRegiter = {
        fullname: undefined,
        device_id: '343',
        device_token: '2343',
        device_type: '2342',
        mobile: undefined,
        email: undefined,
        landmark: 'Nsez',
        pincode: '32232',
        usertype: '1',
        latitude: '28.545',
        longitude: '77.12345',
        password: undefined,
        confirm_password:undefined,
        acceptTns:false
    }

    $scope.registerUser = function () {
        if (validUser()) {
            //if profile pic is not there
            services.register($scope.profilePic,$scope.userRegiter, function (response) {
                console.log("responce status : " +JSON.stringify(response));
                if(response.data.status == SUCCESS_STATUS) {
                    //$rootScope.login = 'Log Out'
                    window.localStorage.setItem("profile", JSON.stringify(response.data.user.ops[0]));
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
        console.log($scope.userRegiter)
        if ($scope.userRegiter.fullname == undefined || $scope.userRegiter.fullname == '') {
            popups.showAlert("Username field can't be left blank!")
            return false
        }else if (!$scope.userRegiter.email ) {
            popups.showAlert("Email field can't be left blank");
            return false
        } else if (!validEmail($scope.userRegiter.email)) {
            popups.showAlert("Please enter a valid Email");
            return false
        } else if (!$scope.userRegiter.mobile) {
            popups.showAlert("Phone Number field can't be left blank");
            return false
        } else if (!validPhoneNo($scope.userRegiter.mobile)) {
            popups.showAlert("Please enter a valid Phone Number");
            return false
        } else if ($scope.userRegiter.password == undefined || $scope.userRegiter.password == '') {
            popups.showAlert("Password field can't be left blank!")
            return false
        } else if ($scope.userRegiter.password.length < 8) {
            popups.showAlert("Password length should be minimum 8");
            return false
        } else if ($scope.userRegiter.confirm_password == undefined) {
            popups.showAlert("Password length should be minimum 8");
            return false
        }else if ($scope.userRegiter.confirm_password != $scope.userRegiter.password) {
            popups.showAlert("Passwords doesn't match. Please try again");
            return false
        }else if (!$scope.userRegiter.acceptTns) {
            popups.showAlert("Please accept terms and conditions to proceed!");
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

    function validPhoneNo(phoneNo) {
        var phoneno = /^[0-9]{6,14}$/;
        if (String(phoneNo).match(phoneno)) {
            return true;
        } else {
            return false;
        }
    }

    $scope.termCondition = function() {
        $ionicModal.fromTemplateUrl('templates/dialog/terms_n_condition.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
    }

    $scope.closeTermCondition = function () {
        $scope.modal.remove()
    }
})