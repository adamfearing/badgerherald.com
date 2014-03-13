angular.module('marchMadness', ['ngRoute'])

.value('allTeams',
	{
		regions: [
			{
				location: 'South',
				teams: [
					{
						name: 'Kansas',
						seed: 1,
						disableFlag: false
					},
					{
						name: 'WKU',
						seed: 15,
						disableFlag: false
					},
					{
						name: 'Kansas',
						seed: 1,
						disableFlag: false
					},
					{
						name: 'WKU',
						seed: 15,
						disableFlag: false
					},
					{
						name: 'Kansas',
						seed: 1,
						disableFlag: false
					},
					{
						name: 'WKU',
						seed: 15,
						disableFlag: false
					},
					{
						name: 'Kansas',
						seed: 1,
						disableFlag: false
					},
					{
						name: 'WKU',
						seed: 15,
						disableFlag: false
					},
					{
						name: 'Kansas',
						seed: 1,
						disableFlag: false
					},
					{
						name: 'WKU',
						seed: 15,
						disableFlag: false
					},
					{
						name: 'Kansas',
						seed: 1,
						disableFlag: false
					},
					{
						name: 'WKU',
						seed: 15,
						disableFlag: false
					},
					{
						name: 'Kansas',
						seed: 1,
						disableFlag: false
					},
					{
						name: 'WKU',
						seed: 15,
						disableFlag: false
					},
					{
						name: 'Kansas',
						seed: 1,
						disableFlag: false
					},
					{
						name: 'WKU',
						seed: 15,
						disableFlag: false
					}
				]
			},
			{
				location: 'East',
				teams: [
					{
						name: 'Indiana',
						seed: 4,
						disableFlag: false
					},
					{
						name: 'James Madison',
						seed: 12,
						disableFlag: false
					},
					{
						name: 'Indiana',
						seed: 4,
						disableFlag: false
					},
					{
						name: 'James Madison',
						seed: 12,
						disableFlag: false
					},
					{
						name: 'Indiana',
						seed: 4,
						disableFlag: false
					},
					{
						name: 'James Madison',
						seed: 12,
						disableFlag: false
					},
					{
						name: 'Indiana',
						seed: 4,
						disableFlag: false
					},
					{
						name: 'James Madison',
						seed: 12,
						disableFlag: false
					},
					{
						name: 'Indiana',
						seed: 4,
						disableFlag: false
					},
					{
						name: 'James Madison',
						seed: 12,
						disableFlag: false
					},
					{
						name: 'Indiana',
						seed: 4,
						disableFlag: false
					},
					{
						name: 'James Madison',
						seed: 12,
						disableFlag: false
					},
					{
						name: 'Indiana',
						seed: 4,
						disableFlag: false
					},
					{
						name: 'James Madison',
						seed: 12,
						disableFlag: false
					},
					{
						name: 'Indiana',
						seed: 4,
						disableFlag: false
					},
					{
						name: 'James Madison',
						seed: 12,
						disableFlag: false
					}
				]
			},
			{
				location: 'Midwest',
				teams: [
					{
						name: 'Duke',
						seed: 6,
						disableFlag: false
					},
					{
						name: 'Louisville',
						seed: 3,
						disableFlag: false
					},
					{
						name: 'Duke',
						seed: 6,
						disableFlag: false
					},
					{
						name: 'Louisville',
						seed: 3,
						disableFlag: false
					},
					{
						name: 'Duke',
						seed: 6,
						disableFlag: false
					},
					{
						name: 'Louisville',
						seed: 3,
						disableFlag: false
					},
					{
						name: 'Duke',
						seed: 6,
						disableFlag: false
					},
					{
						name: 'Louisville',
						seed: 3,
						disableFlag: false
					},
					{
						name: 'Duke',
						seed: 6,
						disableFlag: false
					},
					{
						name: 'Louisville',
						seed: 3,
						disableFlag: false
					},
					{
						name: 'Duke',
						seed: 6,
						disableFlag: false
					},
					{
						name: 'Louisville',
						seed: 3,
						disableFlag: false
					},
					{
						name: 'Duke',
						seed: 6,
						disableFlag: false
					},
					{
						name: 'Louisville',
						seed: 3,
						disableFlag: false
					},
					{
						name: 'Duke',
						seed: 6,
						disableFlag: false
					},
					{
						name: 'Louisville',
						seed: 3,
						disableFlag: false
					}
				]
			},
			{
				location: 'West',
				teams: [
					{
						name: 'Gonzaga',
						seed: 14,
						disableFlag: false
					},
					{
						name: 'Arizona',
						seed: 2,
						disableFlag: false
					},
					{
						name: 'Gonzaga',
						seed: 14,
						disableFlag: false
					},
					{
						name: 'Arizona',
						seed: 2,
						disableFlag: false
					},
					{
						name: 'Gonzaga',
						seed: 14,
						disableFlag: false
					},
					{
						name: 'Arizona',
						seed: 2,
						disableFlag: false
					},
					{
						name: 'Gonzaga',
						seed: 14,
						disableFlag: false
					},
					{
						name: 'Arizona',
						seed: 2,
						disableFlag: false
					},
					{
						name: 'Gonzaga',
						seed: 14,
						disableFlag: false
					},
					{
						name: 'Arizona',
						seed: 2,
						disableFlag: false
					},
					{
						name: 'Gonzaga',
						seed: 14,
						disableFlag: false
					},
					{
						name: 'Arizona',
						seed: 2,
						disableFlag: false
					},
					{
						name: 'Gonzaga',
						seed: 14,
						disableFlag: false
					},
					{
						name: 'Arizona',
						seed: 2,
						disableFlag: false
					},
					{
						name: 'Gonzaga',
						seed: 14,
						disableFlag: false
					},
					{
						name: 'Arizona',
						seed: 2,
						disableFlag: false
					}
				]
			}
		]
	}
)

.value('userChoices',[])

.config(function($routeProvider){
	$routeProvider
		.when('/', {
			controller: 'StartCtrl',
			templateUrl: '/bhrld/wordpress/wp-content/themes/exa/march_madness_app/index.html'
		})
		.when('/teams', {
			controller: 'TeamsCtrl',
			templateUrl: '/bhrld/wordpress/wp-content/themes/exa/march_madness_app/teams.html'
		})
		.when('/email', {
			controller: 'EmailCtrl',
			templateUrl: '/bhrld/wordpress/wp-content/themes/exa/march_madness_app/email.html'
		})
		.when('/social', {
			controller: 'SocialCtrl',
			templateUrl: '/bhrld/wordpress/wp-content/themes/exa/march_madness_app/social.html'
		})
		.otherwise({
			redirectTo: '/'
		});
})

.controller('StartCtrl', function($scope, userChoices){
	$scope.message = 'This is the start view';
	$scope.userChoices = userChoices;
})

.controller('TeamsCtrl', function($scope, allTeams, userChoices, $location){
	$scope.message = 'This is the Team view';
	$scope.allTeams = allTeams;
	$scope.userChoices = userChoices;
	$scope.choiceMax = 16;
	$scope.choiceListFull = false;
	if(userChoices.length == 0){
		for(var i = 0; i < $scope.choiceMax; i++){
			userChoices.push({});
		}
		$scope.choiceIdx = 0;
	}
	else{
		$scope.choiceIdx = 4;
	}

	$scope.addChoice = function(teamName, regionIdxVal, teamIdxVal, teamSeed){
		userChoices[$scope.choiceIdx] = {name: teamName, regionIdx: regionIdxVal, teamIdx: teamIdxVal, seed: '('+teamSeed+')'};
		$scope.allTeams.regions[regionIdxVal].teams[teamIdxVal].disableFlag = true;
		$scope.choiceIdx++;
	};

	$scope.removeChoice = function(idx){
		var removed = userChoices.splice(idx, 1);
		userChoices.push({});
		$scope.allTeams.regions[removed[0].regionIdx].teams[removed[0].teamIdx].disableFlag = false;
		$scope.choiceIdx--;
		console.log($scope.choiceIdx);
	};

	$scope.nextPage = function(event){
		if(event){
			event.preventDefault();
		}
		$location.path('/email');
	};

	$scope.$watch('choiceIdx', function(newvalue, oldvalue){
		if(newvalue === $scope.choiceMax){
			disableAll($scope.allTeams.regions);
			$scope.choiceListFull = true;
		} else if(oldvalue === $scope.choiceMax){
			enableAll($scope.allTeams.regions);
			angular.forEach(userChoices, function(val, key){
				if(val.hasOwnProperty('name')){
					$scope.allTeams.regions[val.regionIdx].teams[val.teamIdx].disableFlag = true;
				}
			});
			$scope.choiceListFull = false;
		}
	});

	var disableAll = function(teamList){
		angular.forEach(teamList, function(val1, key1){
			angular.forEach(val1.teams, function(val2, key2){
				val2.disableFlag = true;
			});
		});
	};
	var enableAll = function(teamList){
		angular.forEach(teamList, function(val1, key1){
			angular.forEach(val1.teams, function(val2, key2){
				val2.disableFlag = false;
			});
		});
	};
})

.controller('EmailCtrl', function($scope, userChoices, $location){
	$scope.userChoices = userChoices;
	$scope.toTeams = function(event){
		if(event){
			event.preventDefault();
		}
		$location.path('/teams');
	};
	$scope.toSocial = function(event){
		if(event){
			event.preventDefault();
		}
		$location.path('/social');
	}
});