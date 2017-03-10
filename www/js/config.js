var instance = 'dev';
if (instance == 'local') {
    var baseURL = 'http://revivehydration.onsisdev.info:5086/api/users/';
    var stripeKey = 'pk_test_ahNrXIuPJit2Va8npb2Qcdzp';
    var googleKey = 'AIzaSyD9M4-1mq3iHIY-8bL3e5uYJcgEjiRQVpQ';
} else if (instance == 'dev') {
    var socketURL = 'https://dev.popety.com';
    var baseURL = 'http://revivehydration.onsisdev.info:5086/api/users/';
    var imgBaseUrl = 'http://revivehydration.onsisdev.info:5086/uploads/profile/'
    var x_access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZWVyZW5kcmEiOiJkZXZlbmRyYSIsImlhdCI6MTQ3Mzg1MDYwNH0.YoeHbbF_GQdj1bvMwHzJU0R0KXyij11JfhL2HgyMEyg'
    var stripeKey = 'pk_test_ahNrXIuPJit2Va8npb2Qcdzp';
    var googleKey = 'AIzaSyD9M4-1mq3iHIY-8bL3e5uYJcgEjiRQVpQ';
} else if (instance == 'prod') {
    var socketURL = 'https://lb1.popety.com';
    var baseURL = 'https://lb1.popety.com/api/v2/';
    var stripeKey = 'pk_live_dPimozOUcVeQJZIJ1DQlyqOG';
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
        var googleKey = 'AIzaSyDhu9Hr-Nbwf17DtSF-TpYy_96wwFVDgAU';
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        var googleKey = 'AIzaSyAz8_ue5-28qHDdG4DPUTIgZtLtlpikEM8';
    }
}
var imageURL = "http://www.studioesoterika.net/informazioni/img2/"
var imgExtension = ".jpg"
var SUCCESS_STATUS = "1"
ionicModule.factory('socketFactory', function () {
    return io.connect(socketURL);
});
