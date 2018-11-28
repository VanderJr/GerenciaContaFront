
angular
    .module('RDash')
    .controller('AlertsCtrl', ['$scope', AlertsCtrl]);

function AlertsCtrl($scope) {

    $scope.transacoes = [{
        type: 'success',
        msg: 'Transação efetuada com sucesso!'
    }, {
        type: 'danger',
        msg: 'Erro durante a transação'
    }];

    $scope.addAlert = function() {
        $scope.alerts.push({
            msg: 'Another alert!'
        });
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
}