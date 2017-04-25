/**
 * Created by ng-graphic on 07-04-2017.
 */
app.controller('linkOneController', function ($scope, dataGetService, toaster, $timeout) {
    $scope.data = "data";
    var popMsg;
   var data = dataGetService.collectData();
    data.then(function (data) {
       popMsg = data;
       console.log("data", popMsg.data.success);

    });
    $timeout(function () {
        dataGetService.success('Data is upto date', 1500);
        dataGetService.errors( 'Data is not in proper format', 1500);
        dataGetService.waiting('data is renderring', 1500);
    }, 1000);
    $timeout(function () {
        dataGetService.popups(popMsg.data.wait);
        dataGetService.popups(popMsg.data.error);
        dataGetService.popups(popMsg.data.success);
       
    }, 2000);
   
});