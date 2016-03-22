/**
 * Created by d on 2016/3/22.
 */
var myApp = angular.module("myApp",[]);
myApp.controller("firstController",function($scope){
    $scope.hobbies = [
        {
            id:1,
            name:"足球"
        },
        {
            id:2,
            name:"篮球"
        },{
            id:3,
            name:"睡觉"
        },{
            id:4,
            name:"上网"
        }
    ];
    $scope.data = {
        hobbies:[1,2]
    };
    $scope.toggleHobbySelection =function(id){
        var index = $scope.date.hobbies.indexOf(id);
        if(index === -1){
             $scope.date.hobbies.push(id);
        }else {
            $scope.date.hobbies.splice(index,1);
        }

        console.log($scope.data);
    }

});