angular.module('RDash')
    .controller('ContasCtrl', ['$scope',  ContasCtrl]);


//controller responsavel por realizar as consultas no servidor
    function ContasCtrl($scope) {
        
        $scope.contas = [{
            id: '09842464601',
            nome: 'Vander',
            nascimento: '04/04/1995',
            razao: 'N/A'
        },{
            id: '242424242424',
            nome: 'Jose',
            nascimento: '24/12/1924',
            razao: 'N/A'
        }];
        console.log($scope.contas);

    }