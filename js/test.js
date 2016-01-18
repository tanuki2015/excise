// function add(x, y) {
//   if (typeof y === "undefined"){
//     return function(y){
//       return x + y;
//     }
//   }
//   return x + y;
// }
//
// var add10 = add(10);

//构造函数的私有属性
// function Person(name) {
//     var nickName = "alibaba";
//     this.name = name;
//     this.getNickName = function() {
//         return nickName;
//     }
// }
//
// var person1 = new Person();
// console.log(person1.name);
// var person1NickName = person1.getNickName();
// console.log(person1NickName);

//对象的私有属性
// var obj = (function() {
//     var privateName = "hahahaha";
//     return {
//         getPrivateName: function() {
//             return privateName;
//         }
//     }
// })();
//
// var name = obj.getPrivateName();
// console.log(name);

// js编程精解习题
// var excise = (function() {
//     return {
//         no1: function() {
//             var count = 0,
//                 result = 1;
//
//             while (count < 10) {
//                 result = result * 2;
//                 count++;
//             }
//             return result;
//         },
//         no2: function(){
//             var char = "#";
//             for(var i=0; i<7;i++){
//                 console.log(char);
//                 char += "#";
//             }
//         }
//     }
// })();
// var num = excise.no1();
// console.log(num);
// excise.no2();

var practice = (function() {
    //私有属性
    //...
    var div3or5 = function() {
        for (var i = 1; i <= 100; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                console.log("FizzBuzz");
                continue;
            } else if (i % 5 == 0) {
                console.log("Buzz");
                continue;
            } else if (i % 3 == 0) {
                console.log("Fizz");
            }
            console.log(i);
        }
    };

    var chessboard = function(row, column) {

            var oddLine = function() {
                var line = "";
                for (var i = 0; i < column; i++) {
                    line += "# ";
                }
                return line;
            }

            var evenLine = function() {
                var line = "";
                for (var i = 0; i < column; i++) {
                    line += " #"
                }
                return line;
            }

            var boardStr = function() {
                var str = "";
                for (var i = 0; i < row; i++) {
                    if (i % 2 == 0) {
                        str += oddLine(column) + "\n";
                    } else {
                        str += evenLine(column) + "\n"
                    }
                }
                return str;
            }

            return boardStr(); //无需传惨，在闭包中。
        }

        //3.13.1
        function min(a,b) {
            return a <= b ? a: b;
        }

        //3.13.2
        function isEven(number) {
            var number = Number(number);

            if(!isNaN(number)){
                if(number == 0){
                    return true;
                }
                else if(number ==1){
                    return false;
                }
                else if(number <0){
                    return isEven(-number); //负数的情况转换成正数。
                }
                else{
                    return isEven(number-2);
                }
            }
            //记得递归的每一步都必须return，否则得不到返回值。
        }

        //3.13.3
        function countBs(str) {
            var count = 0;
            for(var i = 0; i<str.length; i++){
                if(str.charAt(i) === "B"){
                    count++;
                }
            }
            return count;
        }
        function countChar(str,char){
            var count = 0;
            for(var i=0, len = str.length; i<len; i++){
                if(str.charAt(i) == char){
                    count++;
                }
            }
            return count;
        }

        //返回一个对象，提供公共接口
    return {
        div3or5: div3or5,
        chessboard: chessboard,
        min: min,
        isEven: isEven,
        countBs: countBs,
        countChar: countChar

    }
})();

// var board = practice.chessboard(8,8);
// console.log(board);
// console.log(practice.min(9,6));
// console.log(practice.isEven(-1));
console.log(practice.countBs("asdfBBasdf"));
console.log(practice.countChar("asdfBBasdf","g"));
