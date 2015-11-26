angular.module('starter.controllers', [])

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
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

(function () {

    'use strict';

    angular
        .module('marvelApp', [])
        .controller('HeroesController', heroesController);

    function heroesController ($http, $log) {

        var vm = this;
        vm.heroes = [];

        var apiUrl = 'http://gateway.marvel.com:80/v1/public';
        var apiKey = '7909a2ff13d37c8d61e69dd9088dfabe';
        var charactersQueryString = '/characters?limit=100';
        var apiKeyQueryString = '&apikey=' + apiKey;

        $http
            .get(apiUrl + charactersQueryString + apiKeyQueryString)
            .then(displayHeroes)
            .catch(displayError)

        function displayHeroes (response) {

            vm.heroes = response.data.data.results;

            angular.forEach(vm.heroes, parseData);

        }

        function displayError (error) {

            var error = error.data; 

            $log.error('Error API', error);

        }

        function parseData (hero) {

            hero.image = hero.thumbnail.path + '.' + hero.thumbnail.extension;

        }

    }

})();
