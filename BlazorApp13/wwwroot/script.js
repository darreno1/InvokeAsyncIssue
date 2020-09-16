
var MyJs = {

    GetLocation: async function() {
        var position = await MyJs.GetCoordinates();
        if (position) {
            var result = { latitude: position.coords.latitude, longitude: position.coords.longitude };
            return result;
        } else {
            return null;
        }
    },

    GetCoordinates: async function() {
        let promise = new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        let result = await promise;
        console.log('MyJs.GetCoordinates done');
        return result; // "done!"
    },

    HandleError: function(error) {
        console.log('Error: ', error); alert(error);
    }
}
