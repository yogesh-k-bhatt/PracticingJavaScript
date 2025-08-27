
function Counter(){
    var count=0;
    this.incrementCount = function(){
        count++;
        console.log(count);
    }
    this.decrementCount = function(){
        count--;
        console.log(count);
    }
}

var c1 = new Counter();
c1.incrementCount();
c1.incrementCount();
c1.incrementCount();
c1.incrementCount();
c1.decrementCount();

var c2 = new Counter();
c2.incrementCount();
c2.incrementCount();
