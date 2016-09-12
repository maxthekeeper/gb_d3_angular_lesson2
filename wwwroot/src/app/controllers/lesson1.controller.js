(function (angular) {
    'use strict';

    angular
        .module('app')
        .controller('lesson1.controller',
        ['$rootScope', '$scope',
            function ($rootScope, $scope) {            	
            	var svg = d3.select('#lesson1')
							.append('svg')
							.attr('width', 800)
							.attr('height', 600);

				var cellWidth = 50;
				var cellsCount = 10;
				var max = cellWidth * cellsCount;

				var range = d3.range(0, max + cellWidth, cellWidth);

				svg
					.append('g')
					.selectAll('line')
					.data(range)
					.enter()
					.append('line')
					.attr('x1', function (d) { return d; })
					.attr('y1', function (d) { return 0; })
					.attr('x2', function (d) { return d; })
					.attr('y2', function (d) { return max; })
					.attr('stroke', 'grey')
					.attr('stroke-width', 2);

				svg
					.append('g')
					.selectAll('line')
					.data(range)
					.enter()
					.append('line')
					.attr('x1', function (d) { return 0; })
					.attr('y1', function (d) { return d; })
					.attr('x2', function (d) { return max; })
					.attr('y2', function (d) { return d; })
					.attr('stroke', 'grey')
					.attr('stroke-width', 2);
            }
        ]);

})(angular);