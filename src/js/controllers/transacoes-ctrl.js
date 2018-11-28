angular.module('RDash')
    .controller('TransacoesCtrl', ['$scope',  TransacoesCtrl]);


//controller responsavel por realizar as consultas no servidor
    function TransacoesCtrl($scope) {
        
        $scope.transacoes = [{
            origem: 'Vander',
            destino: 'Jose',
            status: 'check'
        },{
            origem: 'Jose',
            destino: 'Vander',
            status: 'warning'
        },{
            origem: 'Vander',
            destino: 'Mariane',
            status: 'check'
        },{
            origem: 'Mariane',
            destino: 'Vander',
            status: 'warning'
        }];
        console.log($scope.transacoes);

    }