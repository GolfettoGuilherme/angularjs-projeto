//controller esse function($scope, $http) são das dependencias angular que o controller está usando
angular.module('alurapic').controller('FotosController', function($scope, $http){
	//scope serve para o controller poder servir dados para o nossa view 
	//A comunicação entre um controller e uma view é feita através do objeto $scope
	/*
		$scope.fotos = [
			{
				titulo : 'Leão 1',
				url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
			},
			{
				titulo : "Leão 2",
				url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
			},
			{
				titulo : "Leão 3",
				url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
			}
		];
	*/
	$scope.fotos = [];

	/*
		//ele retorna uma promessa que vai tentar pegar os dados do servidor
		var promise = $http.get('v1/fotos');
		//quando essa promessa for cumprida
		promise.then(function(retorno){
			$scope.fotos = retorno.data;
		}).catch(function(error){
			console.log(error);
		});
	*/

	//mais limpo
	$http.get('v1/fotos').success(function(fotos){
		$scope.fotos = fotos;
	}).error(function(erro) {
		console.log(erro);
	});


});