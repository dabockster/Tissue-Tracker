app.controller('tissueController', ['$scope', '$resource', function ($scope, $resource){
	var Tissue = $resource('/api/tissues');

	Tissue.query(function (results){
		$scope.tissues = results;
	});

	$scope.tissues = [];

	$scope.createTissue = function () {
		var tissue = new Tissue();
		tissue.issue = $scope.tissueIssue;
		tissue.$save(function (result){
			$scope.tissues.push(result);
			$scope.tissueIssue = '';
		});
	};
}]);