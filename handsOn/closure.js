
function timer(){
    for(var i=1; i<=5; i++){
        function closure(j){
            setTimeout(function(){
                console.log(j);
            }, j*1000);
        }
        closure(i);
    }
    console.log("Timer:");
}
timer();


/*

function f(){
    const a=10;
    setTimeout(function() {
        console.log(a);
    }, 3000);
    console.log("Just wait");
}
f();
console.log("Wait again");

function x(){
    var b=20;
    function y(){
        var a=10;
        function z(){
            console.log(a, b);
        }
        z();
    }
    y();
}
x();

function a(){
    var x=10;
    return function b(){
        console.log(x);
    }
    //b();
}
var c=a();
console.log(c);
c();

*/