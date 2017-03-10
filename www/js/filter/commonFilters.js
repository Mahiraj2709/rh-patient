/**
 * Created by admin on 2/7/2017.
 */
ionicModule.filter('removeNaN', function () {

        // Create the return function
        // set the required parameter name to **number**
        return function (number) {

            // Ensure that the passed in data is a number
            if (isNaN(number)) {

                // If the data is not a number or is less than one (thus not having a cardinal value) return it unmodified.
                return '';
            } else {

                // If the data we are applying the filter to is a number, perform the actions to check it's ordinal suffix and apply it.
                return number
            }
        }
    })
    .filter('firstCapitalize', function() {
        return function(input) {
            return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
        };
    });