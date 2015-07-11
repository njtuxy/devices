///**
// * Created by yxia on 7/10/15.
// */
//angular.module('PlatformApp', ['ionic'])
//    .controller('PlatformCtrl', function($scope) {
//        ionic.Platform.ready(function(){
//            // will execute when device is ready, or immediately if the device is already ready.
//        });
//
//        $scope.deviceInformation = ionic.Platform.device();
//        $scope.YanWebView = ionic.Platform.isWebView();
//        $scope.isIPad = ionic.Platform.isIPad();
//        var isIOS = ionic.Platform.isIOS();
//        var isAndroid = ionic.Platform.isAndroid();
//        var isWindowsPhone = ionic.Platform.isWindowsPhone();
//
//        var currentPlatform = ionic.Platform.platform();
//        var currentPlatformVersion = ionic.Platform.version();
//
//        ionic.Platform.exitApp(); // stops the app
//    });