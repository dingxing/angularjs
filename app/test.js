/**
 * Created by dx on 2016/3/21.
 */
var myApp = angular.module("myApp",[],function($provide,$filterProvider,$controllerProvider){
    //使用第三个参数，function()可以配置一些参数信息，在module启动时用自动调用

    // 自定义过滤器
    $filterProvider.register('fitlerAge',function(){
        return function(obj){
            var newObj =[];
            angular.forEach(obj,function(o){
                if(o.age>20){
                    newObj.push(o);
                }
            });
            return newObj;
        }
    });
    $controllerProvider.register('personController',function($scope,personData){
        $scope.data =personData;
    });

    // 自定义服务
    $provide.provider("CustomService",function(){
        this.$get= function(){
            return{
                message:"CustomService Message"
            }
        }
    });
    // 自定义工厂
    $provide.factory("CustomFactory", function () {
        // 可以返回任何数据类型
        return[1,2,3,4,5];
    });
    $provide.factory("Data",function(){
        return{
            message:'Hello world',
            city:[
                {
                    name:'上海',
                    py:"shanghai"
                },
                {
                    name:'北京',
                    py:"beijing"
                },
                {
                    name:"四川",
                    py:"sichuang"
                }
            ]
        }
    });
    // 自定义服务
    $provide.service("CustomService2",function(){
        // 只能返回对象，不能返回字符串
        return["上海"];
        // return "11111" ,null
    });
    $provide.service('productData',function(){
        return[
            {
                id:"333",
                name:"iphone",
                price:1400
            },
            {
                id:"980",
                name:"ipad",
                price:5400
            },
            {
                id:"333",
                name:"ipMac",
                price:25400
            },
            {
                id:"333",
                name:"iphoneAREA",
                price:4300
            }
        ]
    });
    $provide.service('personData',function(){
        return[
            {
                name:"张三",
                age:24,
                city:"北京"
            },
            {
                name:"李四",
                age:14,
                city:"上海"
            }
        ]
    });
});
myApp.controller("personController",function($scope,personData){
    $scope.data =personData;
});
myApp.controller("productController", function ($scope,productData) {
    $scope.productData = productData;
    $scope.orderType = "id";
    $scope.order = '-';// 降序
    $scope.changOrder= function(type){
        $scope.orderType = type;
        if($scope.order===""){
            $scope.order ='-';
        }else{
            $scope.order='';
        }
    }
});

myApp.controller("firstController",function($scope,CustomService,CustomFactory,CustomService2,Data){
    $scope.src='image/1.jpg';
    $scope.status=false;
    $scope.chageStatus =function($event){
        this.status = !$scope.status;
        // 通过element对象转换成jquery对象
        angular.element($event.target).html('切换状态为'+$scope.status);
    };
    $scope.name="张三";
    //console.log(CustomService);
    //console.log(CustomFactory);
    //console.log(CustomService2);
    $scope.today=new Date();
    $scope.data = Data;
    $scope.checkName = function(obj){
        console.log(obj);
        if(obj.py.indexOf('h')===-1){
            return false;
        }else{
            return true;
        }
    };
});
myApp.controller("secondController",function($scope){
    $scope.name="李四";
});
myApp.directive('customTags',function(){
    return{
        resttict:'ECAM',
        templateUrl:'tmp/other.html',
        replace:true
    }
});
