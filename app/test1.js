var myApp = angular.module("myApp",[],function($provide){
    //自定义服务
    $provide.provider("CustromService",function(){
        this.$get= function(){
            return {
                message :"CustromService Message"
            }
        }
    });
    //自定义工厂
    $provide.factory("CustromFactory",function(){
        // 返回任何类型
        return [1,2,3,4,5,6]
    });
    //自定义服务
    $provide.service('CustromService2',function(){
        return ['上海']
    })
});
// 加载远程模板，放入缓存中
// run方法是在config之后，controller的其他服务之前被调用。
myApp.run(function(){
    console.log("run");
});
// 只能注入controller.....service factory
myApp.value("version",'1.0.0');
// 可以注入任何方法
myApp.constant('APIKEY','xxxxx');

myApp.config(function(APIKEY){
    console.log(APIKEY);
});

myApp.controller("testController",['APIKEY','version',function(APIKEY,version){
    console.log(APIKEY);
    console.log(version);
}]);

myApp.controller("MyController", function($scope,CustromService2,CustromFactory){
    console.log(CustromFactory);
    console.log(CustromService2);
    /*
    $scope.date= new Date();
    setInterval(function(){
        $scope.date = new Date();
    },1000);
    */
   setInterval(function(){
       // $apply 会触发脏检查
       $scope.$apply(function(){
           $scope.date = new Date();
       });
   },1000);

    $scope.count=0;
    $scope.name="张三";
    $scope.data = {
        name:"李四",
        age:20
    };
    $scope.user =[
        {
            id:10,
            name:'张三'
        },
        {
            id:20,
            name:'李四 '
        }
    ];
    $scope.$watch("value",function(newValue,oldValue){
        //console.log(newValue,oldValue);
        ++$scope.count;
        if($scope.count>10){
            $scope.value="已经大于10次了";
        }
    });
    $scope.$watch("data",function(){},true);
    //console.log($scope);
});
myApp.controller("secondController",function($scope){
    //$scope.name="李四";
    //console.log($scope);
});

myApp.directive("customTags",function(){
    return{
        restrict:"ECAM",
        template:"<div><span ng-transclude></span>新数据</div>",
        replace:true,
        transclude:true,
        compile:function(){
            console.log("customTags compile");
            return function (){
                console.log("compile return fun");

            }
        }
    }
});
