/**
 * Created by admin on 2/6/2017.
 */
ionicModule.factory('services', function ($http,$ionicLoading,$httpParamSerializerJQLike,popups) {
    function login(user, callback) {
        if(!popups.isOnline()) return
        $ionicLoading.show({
            template: '<ion-spinner></ion-spinner> <br/> Loading content...'
        });

        $http({
            url: baseURL + 'authenticate',
            method: "POST",
            headers: {'x-access-token': x_access_token },
            data:user
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(user))
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (error) {
            $ionicLoading.hide()
            return callback(false);
        });
    }

    // to get all services for unit
    function register(picURI,user, callback) {
        if(!popups.isOnline()) return
        $ionicLoading.show({
            template: '<ion-spinner></ion-spinner> <br/> Loading content...'
        });
        var win = function (r) {
            $ionicLoading.hide()
            console.log("Code = " + r.responseCode);
            console.log("Response = " + r.response);
            callback(JSON.parse(r.response));
            console.log("Sent = " + r.bytesSent);
        }

        var fail = function (error) {
            $ionicLoading.hide()
            alert("An error has occurred: Code = " + error.code);
            console.log(error)
            console.log("upload error source " + error.source);
            console.log("upload error target " + error.target);
        }

        if(picURI) {
            var options = new FileUploadOptions();
            var headers={'x-access-token': x_access_token};
            options.headers = headers;
            options.chunkedMode = false;
            options.fileKey = "profile_image";
            options.fileName = picURI.substr(picURI.lastIndexOf('/') + 1);
            options.mimeType = "image/*";

            options.params = user;

            var ft = new FileTransfer();
            ft.upload(picURI, encodeURI(baseURL + 'register'), win, fail, options);
        }else{
            $http({
                url: baseURL + 'register',
                method: "POST",
                headers: {'x-access-token': x_access_token },
                data:user
            }).success(function (res, req) {
                $ionicLoading.hide()
                console.log(JSON.stringify(user))
                console.log(JSON.stringify(res))
                return callback(res);
            }).error(function (error) {
                $ionicLoading.hide()
                return callback(false);
            });
        }

    }

    // to get all services for unit
    function forgotPassword(user, callback) {
        if(!popups.isOnline()) return
        $ionicLoading.show({
            template: '<ion-spinner></ion-spinner> <br/> Loading content...'
        });
        $http({
            url: baseURL + 'forgetpassword',
            method: "POST",
            headers: {'x-access-token': x_access_token},
            data:user
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(res))
            callback(res);
        }).error(function (error) {
            $ionicLoading.hide()
            callback(false);
        });
    }

    // to get all services for unit
    function logout(user, callback) {
        if(!popups.isOnline()) return
        $ionicLoading.show({
            template: '<ion-spinner></ion-spinner> <br/> Loading content...'
        });
        $http({
            url: baseURL + 'logout',
            method: "POST",
            headers: {'x-access-token': x_access_token},
            data:user
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(res)
            callback(res);
        }).error(function (error) {
            $ionicLoading.hide()
            callback(false);
        });
    }

    // to get all services for unit
    function getcustomerinfo(customerId, callback) {
        $ionicLoading.show({
            template: '<ion-spinner></ion-spinner> <br/> Loading content...'
        });
        $http({
            url: baseURL + 'getcustomerinfo',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike({id:customerId})
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (err) {
            $ionicLoading.hide()
            return callback(false);
        });
    }
    // to get all services for unit
    function getstorico(customerId, callback) {
        $ionicLoading.show({
            template: '<ion-spinner></ion-spinner> <br/> Loading content...'
        });
        $http({
            url: baseURL + 'storico',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike({id:customerId})
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (err) {
            $ionicLoading.hide()
            return callback(false);
        });
    }

    // to get all services for unit
    function deleteappointment(appointment, callback) {
        $ionicLoading.show({
            template: 'Loading...'
        });
        $http({
            url: baseURL + 'deleteappointment',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(appointment)
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (err) {
            $ionicLoading.hide()
            return callback(false);
        });
    }

    // to get all services for unit
    function getpush(customerId, callback) {
        $ionicLoading.show({
            template: 'Loading...'
        });
        $http({
            url: baseURL + 'getpush',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike({id:customerId})
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (err) {
            $ionicLoading.hide()
            return callback(false);
        });
    }

    // to get all services for unit
    function setpush(pushData, callback) {
        $ionicLoading.show({
            template: 'Loading...'
        });
        $http({
            url: baseURL + 'setpush',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(pushData)
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (err) {
            $ionicLoading.hide()
            return callback(false);
        });
    }

    // to get all services for unit
    function getfortunedatewise(oroscope, callback) {
        $ionicLoading.show({
            template: 'Loading...'
        });
        $http({
            url: baseURL + 'getfortunedatewise',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(oroscope)
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (err) {
            $ionicLoading.hide()
            return callback(false);
        });
    }

    // to get all services for unit
    function getallemployees(customerId, callback) {
        $ionicLoading.show({
            template: 'Loading...'
        });
        $http({
            url: baseURL + 'getallemployees',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike({id:customerId})
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (err) {
            $ionicLoading.hide()
            return callback(false);
        });
    }

    // to get all services for unit
    function getemployeeinfo(empData, callback) {
        $ionicLoading.show({
            template: 'Caricamento in corso...'
        });
        $http({
            url: baseURL + 'getemployeeinfo',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(empData)
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (err) {
            $ionicLoading.hide()
            return callback(false);
        });
    }

    // to get all services for unit
    function getdatetime(data, callback) {
        $ionicLoading.show({
            template: 'Loading...'
        });
        $http({
            url: baseURL + 'getdatetime',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(data)
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (err) {
            $ionicLoading.hide()
            return callback(false);
        });
    }

    // to get all services for unit
    function gettimebydate(data, callback) {
        $ionicLoading.show({
            template: 'Loading...'
        });
        $http({
            url: baseURL + 'gettimebydate',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(data)
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (err) {
            $ionicLoading.hide()
            return callback(false);
        });
    }

    // to get all services for unit
    function bookAppointment(data, callback) {
        $ionicLoading.show({
            template: 'Caricamento in corso...'
        });
        $http({
            url: baseURL + 'submitappointment',
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $httpParamSerializerJQLike(data)
        }).success(function (res, req) {
            $ionicLoading.hide()
            console.log(JSON.stringify(res))
            return callback(res);
        }).error(function (err) {
            $ionicLoading.hide()
            return callback(false);
        });
    }


    return {
        login: login,
        register: register,
        forgotPassword:forgotPassword,
        logout:logout,
        getcustomerinfo:getcustomerinfo,
        getstorico:getstorico,
        deleteappointment:deleteappointment,
        getpush:getpush,
        setpush:setpush,
        getallemployees:getallemployees,
        getfortunedatewise:getfortunedatewise,
        getemployeeinfo:getemployeeinfo,
        getdatetime:getdatetime,
        gettimebydate:gettimebydate,
        bookAppointment:bookAppointment
    };
})
