var app = angular.module('smackerNews', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope){
    $scope.posts = [
    {title: 'You', upvotes: 5},
    {title: 'Me', upvotes: 2},
    {title: 'Nemo', upvotes: 9}
    ];
    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') { return; }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';
    };
    $scope.incrementUpvotes = function(post){
      post.upvotes += 1;
    };
  }
  ])