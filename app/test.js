/**
 * Created by dx on 2016/3/21.
 */
var myApp = angular.module("myApp",[],function($provide,$filterProvider,$controllerProvider){
    //ʹ�õ�����������function()��������һЩ������Ϣ����module����ʱ���Զ�����

    // �Զ��������
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

    // �Զ������
    $provide.provider("CustomService",function(){
        this.$get= function(){
            return{
                message:"CustomService Message"
            }
        }
    });
    // �Զ��幤��
    $provide.factory("CustomFactory", function () {
        // ���Է����κ���������
        return[1,2,3,4,5];
    });
    $provide.factory("Data",function(){
        return{
            message:'Hello world',
            city:[
                {
                    name:'�Ϻ�',
                    py:"shanghai"
                },
                {
                    name:'����',
                    py:"beijing"
                },
                {
                    name:"�Ĵ�",
                    py:"sichuang"
                }
            ]
        }
    });
    // �Զ������
    $provide.service("CustomService2",function(){
        // ֻ�ܷ��ض��󣬲��ܷ����ַ���
        return["�Ϻ�"];
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
                name:"����",
                age:24,
                city:"����"
            },
            {
                name:"����",
                age:14,
                city:"�Ϻ�"
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
    $scope.order = '-';// ����
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
        // ͨ��element����ת����jquery����
        angular.element($event.target).html('�л�״̬Ϊ'+$scope.status);
    };
    $scope.name="����";
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
    $scope.name="����";
});
myApp.directive('customTags',function(){
    return{
        resttict:'ECAM',
        templateUrl:'tmp/other.html',
        replace:true
    }
});
