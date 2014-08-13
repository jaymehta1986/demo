angular.module('demoApp')
  .controller('OrderController', function($scope) {
  	$scope.title = "Order From Your Favorite Restaurants";  


	// $('#category1').on('click', function() {
	// 	//alert('hi');

	// });
  	$('#category1').on('click', function(){
    	$(".dropdown-toggle").dropdown('toggle');
	}); 
			    
  
});

