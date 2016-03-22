/**
 * Created by d on 2016/3/19.
 */
var myApp = angular.module("myApp",[]);
myApp.controller("CartController",function($scope){
    $scope.cart = [
        {id:1000,name:"iphone5s",quantity:3, price:4399},
        {id:3300,name:"iphone5",quantity:30, price:3399},
        {id:21,name:"mac",quantity:13, price:10399},
        {id:200,name:"ipad",quantity:23, price:4099}
    ];
    $scope.totalPrice = function(){
        var total =0;
        angular.forEach($scope.cart,function(item){
            total += item.quantity * item.price;
        });
        return total;
    };
    $scope.totalQuantity = function(){
        var total = 0;
        angular.forEach($scope.cart,function(item){
            total += parseInt(item.quantity) ;
        });
        return total;
    };
    $scope.remove =function(id){
        var index = findIndex(id);
        if(index!== -1){
            //删除数组中的数据
            $scope.cart.splice(index,1);
        }
    };
    $scope.add =function(id){
    var index = findIndex(id);
        if(index !=-1){
            $scope.cart[index].quantity++;
        }

    };
    $scope.reduce =function(id){
        var index = findIndex(id);
        if(index1= -1){
            var item = $scope.cart[index];
            if(item.quantity>1){
                $scope.cart[index].quantity--;
            }else{
                //$scope.cart[index].quantity = 0;
                var returnKey = confirm("从购物车内删除该产品");
                if (returnKey){
                    $scope.remove(id);
                }
            }
        }
    };

    //找一个元素的索引
   var findIndex = function(id){
        var index = -1;
        angular.forEach($scope.cart,function(item ,key){
            console.log(key);
            if(item.id === id){
                index = key;
                return
            }
        });
        return index;
    };
    $scope.$watch('cart',function(newValue,oldValue){
        //console.log(newValue);
        angular.forEach(newValue,function(item,key){
            if(item.quantity <1){
                var returnKey = confirm("从购物车内删除该产品");
                if(returnKey){
                    $scope.remove(item.id);
                }else{
                    item.quantity = oldValue[key].quantity;
                }
            }
        })
    },true);
});