angular.module('listaTelefonica').controller('listaTelefonicaCtrl', function ($scope, $http) {
    var URLAPI = 'http://localhost:3000'

    $scope.app = "Lista Telefonica"
    $scope.contatos = [];

    $scope.operadoras = [];

    var carregarContatos = $http.get(`${URLAPI}/contatos`).then(function (res) {
        $scope.contatos = res.data;
    }).catch(function (err){
        console.log(err)
        $scope.errMes = err.statusText
    });

    var carregarOperadoras = $http.get(`${URLAPI}/operadoras`).then(function (res) {
        $scope.operadoras = res.data;
    });

    $scope.adicionarContato = function (contato) {
        contato.data = new Date();
        $http.post(`${URLAPI}/contatos`, contato).then(res => {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos()
        }).catch(
            err => console.log(err)
        );

    }

    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (element) {
            return !element.selecionado
        })
    }

    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado
        })
    }

    $scope.orderPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDeOrdenacao = !$scope.direcaoDeOrdenacao;
    }

    $scope.classe1 = 'selecionado'
    $scope.classe2 = 'negrito'
});