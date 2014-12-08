app.controller('tissueController', ['$scope', '$resource', function($scope, $resource){
	var Tissue = $resource('/api/tissues');

	Tissue.query(function(results){
		$scope.tissues = results;
	});

	$scope.tissues = [];

	$scope.createTissue = function(){
		var tissue = new Tissue();
		tissue.issue = $scope.tissueName;
		tissue.$save(function(result){
			$scope.tissues.push(result);
			$scope.tissueName = '';
		});
	};
}]);