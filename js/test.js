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
// console.log(practice.countBs("asdfBBasdf"));
// console.log(practice.countChar("asdfBBasdf","g"));

//4.7松鼠人记录
//第一步：用一个数组存储每天的日志
var journal = [];

//第二步：写一个方法，把每天的记录存储到journal,
//每天的记录用一个对象表示,包括一个每日事件数组，和一个是否变身的布尔属性。
//{events: [event1,event2,event3...], squirrel: true/false}
function addEntry(events, didTurnIntoASquirrel){
    journal.push({
        events: events,
        squirrel: didTurnIntoASquirrel
    });
}
//每天调用addEntry添加当天的事件：
addEntry(["work","touched tree","pizza","running","television,"], false );

//这样，一段时间后我们有了下面的数据：
/*
journal = [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  ......
  ]
*/

var JOURNAL = [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","computer","work"],"squirrel":false},
  {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["cauliflower","reading","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
  {"events":["spaghetti","nachos","work"],"squirrel":false},
  {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
  {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
  {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["pizza","ice cream","computer","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work"],"squirrel":false},
  {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["potatoes","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","work"],"squirrel":false},
  {"events":["pizza","beer","work","dentist"],"squirrel":false},
  {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
  {"events":["lasagna","peanuts","work"],"squirrel":true},
  {"events":["pizza","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
  {"events":["pizza","cycling","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","peanuts","candy","work"],"squirrel":true},
  {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
  {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
  {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","candy","work"],"squirrel":false},
  {"events":["potatoes","nachos","work"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
  {"events":["brussel sprouts","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
  {"events":["candy","brushed teeth","work"],"squirrel":false},
  {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
  {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
  {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
  {"events":["brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
  {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","reading","weekend"],"squirrel":false},
  {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
  {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];

/*
* 第三步，计算两个变量之间的关联性，比如吃pizza和变身之间，两者的状态分别用‘0’表示
* true，‘1’表示false，那么两者各有0,1两种状态，组合后有4种状态。
* 这四种状态又用二进制来表示的话，分别对应00,01,10,11，也就是十进制0,1,2,3。
*
* 那么，可以用数组下标的0~3来表示，因此，一个数组的前4个就可以存储这个状态。
* 根据46页的公式，转换成如下js代码
*/
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}
// 用法如下：
// console.log(phi([76,9,4,1])); //0.06859943405700354

/*
* 第四步，上面phi函数的参数是人工计算的，下面让计算机来帮我们算，遍历整个journal
* 数据, 把特定的事件，比如pizza和变身的4种状态找出来，分别填入一个数组的前四个格
* 子，注意只需要一次循环就可以搞定：
* 1. 在一天的事件中，二进制左边一位表示是否变身，右边一位表示是否有特定事件。
* 2.用上面的方式循环所有的数据就可以了
*/

/*
* 遍历事件，取得相关性数组数据
*
* @param {String} event name
* @param {Boolean} turn into squirrel or not
* @return {Array} relative data
*/
function hasEvent(event, entry){
    // 工具函数，查看每一天的事件中是否有特定事件发生
    return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal){
    var table = [0,0,0,0];
    for(var i=0, max=journal.length; i<max; i++){
        var entry = journal[i];
        var index = 0; //index只取4种状态的一种，然后存放到table数组中即可
        if(hasEvent(event, entry)){
            index++; //表示01的状态
        }
        if(entry.squirrel){
            index += 2; //表示11的状态
        }
        table[index]++;
    }
    return table;
}
// console.log(tableFor("pizza", JOURNAL)); //[76, 9, 4, 1]

/*
* 第五步，上面可以单个的得出事件的相关性，现在需要让计算机自动的把所有的相关性
* 都计算并保存起来，以方便查看他们之间的关联程度，这个简单，用一个对象保存事件
* 名和值,并且属性名字就是事件名字
*/
var map = {};
function storePhi(event, Phi){
    map[event] = Phi;
}
// storePhi("pizza", 0.069);
// console.dir(map);

/*
* 第六步，建立一个phis对象保存所有事件的相关性，遍历JOURNAL中所有的事件，一旦
* 发现其不在phis中，就计算其相关性并添加到phis中。
*/
function gatherCorrelations(journal){
    var phis = {};
    for(var entry = 0; entry<journal.length; entry++){
        var events = journal[entry].events;
        for(var i=0; i<events.length; i++){
            var event = events[i];
            if(!(event in phis)){
                phis[event] = phi(tableFor(event, journal));
            }
        }
    }
    return phis;
}
var correlations = gatherCorrelations(JOURNAL);
console.dir(correlations);

//4.17练习
var practice4 = (function() {
    function range(start, end) {
        var numbers = [];
        for (var i = start; i <= end; i++) {
            numbers.push(i);
        }
        return numbers;
    }

    function rangeStep(start, end, step){
        var numbers = [];
        step = step < 0 ? -step: step;
        for(var i = start; i<=end; i += step){
            numbers.push(i);
        }
        return numbers;
    }

    function sum(arr){
        var result = 0;
        for(var i = 0, max = arr.length; i<max; i++){
            result += arr[i];
        }
        return result;
    }

    function reverseArray(Arr) {
        var newArray = [];
        for(var i = Arr.length; i>0; i--){
            newArray.push(Arr[i-1]);
        }
        return newArray;
    }

    function reverseArrayInPlace(Arr) {
        for(var i = 0; i < Math.floor(Arr.length/2); i++ ){
            var temp = Arr[i];
            Arr[i] = Arr[Arr.length-1-i];
            Arr[Arr.length-1-i] = temp;
        }
        return Arr;
    }

    function arrayToList(array) {
      var list = null;
      for (var i = array.length - 1; i >= 0; i--)
        list = {value: array[i], rest: list};
      return list;
    }


    return {
        range: range,
        rangeStep: rangeStep,
        sum: sum,
        reverseArray: reverseArray,
        reverseArrayInPlace: reverseArrayInPlace,
        arrayToList: arrayToList
    }
})();

// console.log(practice4.sum(practice4.range(1, 10)));
// console.log(practice4.rangeStep(1, 10,-2));
// console.log(practice4.reverseArray([1,2,3,4,5]));
// var arr = [1,2,3,4,5];
// practice4.reverseArrayInPlace(arr);
// console.log(arr);

console.dir(practice4.arrayToList([1,2,3]));
