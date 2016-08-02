angular.module('demo', [])

function ListaLoginController($scope){
    $scope.pessoa = [{login:'Luan',senha:'123',},
                     {login:'Stallin',senha:'321'}];
    
    $scope.adicionarPessoa = function(){
        
    };
}