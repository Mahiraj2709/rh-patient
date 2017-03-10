/**
 * Created by admin on 3/9/2017.
 */
ionicModule.factory('images',function ($cordovaCamera) {

    function captureImage(success,error) {
        var options = {
            quality: 75,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            mediaType: Camera.MediaType.PICTURE,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: true
        };

        $cordovaCamera.getPicture(options).then(function (imageData) {
            success(imageData)
        }, function (err) {
            // An error occured. Show a message to the user
            error(err)
        });
    }

    function chooseImage(success,error) {
        var options = {
            quality: 75,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: true
        };

        $cordovaCamera.getPicture(options).then(function (imageData) {
            success(imageData)
        }, function (err) {
            // An error occured. Show a message to the user
            error(err)
        });
    }

    return {
        chooseImage:chooseImage,
        captureImage:captureImage
    }
})