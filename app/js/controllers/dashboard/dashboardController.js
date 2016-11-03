angular.module("sistema").controller("dashboardController", function($scope, quotes) {
    $scope.quotes = quotes.data;

    $scope.labelsLine = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.seriesLine = ["Series A", "Series B"];
    $scope.dataLine = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.datasetOverrideLine = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.optionsLine = {
        scales: {
            yAxes: [{
                id: 'y-axis-1',
                type: 'linear',
                display: true,
                position: 'left'
            }, {
                id: 'y-axis-2',
                type: 'linear',
                display: true,
                position: 'right'
            }]
        },
       legend: { display: true }
    };

  $scope.labelsBar = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.seriesBar = ["Series A", "Series B"];
  $scope.dataBar = [
    [65, 59, 80, 81, 56, 55, 40]
  ];


});
