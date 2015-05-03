var TodoApp = angular.module("TodoApp", []);

TodoApp.controller("TodosCtrl", ["$scope", function ($scope) {
  $scope.todos    = [];
  $scope.newTodo  = {};

  $scope.addTodo  = function () {
    $scope.todos.push($scope.newTodo);
    $scope.newTodo = {};
  };

  $scope.delete = function () {
    console.log(this.todo);
    //var index = $scope.todos.indexOf(this.todo);
    var index = this.$index;
    $scope.todos.splice(index, 1);

  }

}]);
