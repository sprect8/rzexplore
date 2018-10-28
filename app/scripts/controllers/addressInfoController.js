angular.module('ethExplorer')
    .controller('addressInfoCtrl', function ($rootScope, $scope, $location, $routeParams, $q) {

      var web3 = $rootScope.web3;
      var contract = $rootScope.contract;

      $scope.init=function(){

        $scope.addressId=$routeParams.addressId;

        if($scope.addressId!==undefined) {
          getAddressInfos().then(function(result){
            console.log("Running", result);
            $scope.balance = result.balance;
          });
        }


        function getAddressInfos(){
          var deferred = $q.defer();

          contract.balanceOf($scope.addressId).then(function(result) {
            console.log("Result gotten", result);
            deferred.resolve({
                  balance: result.toNumber()
                });
            
          });

          return deferred.promise;
        }


      };
      
      $scope.init();

    });
