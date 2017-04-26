
angular.module('data',[])
.service('dataGetService', function ($q, $http, toaster, $timeout) {

    var data = this;
    data.collectData = function () {
        console.log("check the service is working ");
        var defer = $q.defer();
        $http.get('../assets/database.json').then(
            function (data) {
                defer.resolve(data);
            }
            , function () {
                defer.reject('could not find someFile.json');
            });
        return defer.promise;
    };
    
    data.success = function (msg,timeout) {
        toaster.pop('success', "success", msg, timeout);
    }
    data.errors = function (msg, timeout) {
        toaster.pop('error', "error", msg, timeout);
    }
    data.waiting = function (msg, timeout) {
        toaster.pop('wait', "wait", msg, timeout);
    }

    data.popups = function (data) {
        console.log("data", data);
        toaster.pop(data.status, data.status, data.msg, data.timeout);
    }

});
