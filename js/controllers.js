angular.module('starter.controllers', ['ionic'])

    .controller('DashCtrl', function($scope) {})

    .controller('ChatsCtrl', function($scope, Chats) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.chats = Chats.all();
        $scope.remove = function(chat) {
            Chats.remove(chat);
        }
    })

    .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
        $scope.isWebView1 = "I am xiayan";
    })

    .controller('AccountCtrl', function($scope) {
        $scope.settings = {
            enableFriends: true
        };
    })

    .controller('PlatformCtrl', function($scope) {
        ionic.Platform.ready(function(){
            $scope.device = ionic.Platform.device();
            //$scope.isWebView = ionic.Platform.isWebView();
            //$scope.isIPad = ionic.Platform.isIPad();
            //$scope.isIOS = ionic.Platform.isIOS();
            //$scope.isAndroid = ionic.Platform.isAndroid();
            //var isWindowsPhone = ionic.Platform.isWindowsPhone();
            //$scope.currentPlatform = ionic.Platform.platform();
            //$scope.currentPlatformVersion = ionic.Platform.version();
            // will execute when device is ready, or immediately if the device is already ready.
        })
    });

    //.controller("debugxx", function ($ionicPlatform, $scope) {
    //    $ionicPlatform.ready(function() {
    //        $scope.device123 = window.device;
    //    });
    //    //$scope.myDevice = "not ready";
    //});

//ionic.Platform.exitApp(); // stops the app


