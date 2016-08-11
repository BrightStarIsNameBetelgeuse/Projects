/*generate PI up to decimal place.*/

function Fibonacci () {
    this.prev = 0;
    this.cur = 1;
    this.buf = 0;
    this.timer = 1000;


    this.runInfinite = function () {
        var that = this;
        setTimeout(function(){
            console.log(that.cur);
            that.buf = that.cur;
            that.cur = that.cur + that.prev;
            that.prev = that.buf;
            $('#fibonacci').append('<p>'+that.cur+'</p>');
            window.scrollTo(0,document.body.scrollHeight);
            that.runInfinite();
        },this.timer);
    };

    this.runToNum = function(num) {
        console.log(this.cur);
        this.buf = this.cur;
        this.cur = this.cur + this.prev;
        this.prev = this.buf;
        $('#fibonacci').append('<p>'+this.cur+'</p>');
        if(num > this.cur)
            this.runToNum(num);
    }
}

var getNewPI = function(number){
    var pi = Math.PI;
    var piStr = pi.toString();
    return piStr.slice(0, piStr.lastIndexOf(number) + 1);
};

var getNewExp = function(number){
    var exp = Math.E;
    var expStr = exp.toString();
    return expStr.slice(0, expStr.lastIndexOf(number) + 1);
};

var getNumberSequenceFibonacci = function(num){
    var fib = new Fibonacci();
    //fib.runToNum(1000);
    fib.runInfinite();
};

var getNumberFibonacci = function(num){
    var prev = 0;

    var fib = function(cur) {
        prev = cur;
        cur+=prev;
        console.log(cur);
        if(num > cur)
            fib(cur);
    };
    fib(1);
};


$(document).ready(function(){
    console.log(getNewPI(1));
    console.log(getNewExp(8));
    getNumberSequenceFibonacci(8);
    getNumberFibonacci(99);
});
