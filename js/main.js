/*generate PI up to decimal place.*/

function Tasks() {

    var getPITask = function(num){
        var pi = Math.PI;
        var piStr = pi.toString();
        return piStr.slice(0, piStr.lastIndexOf(num) + 1);
    };
    var getExpTask = function(num){
        var exp = Math.E;
        var expStr = exp.toString();
        return expStr.slice(0, expStr.lastIndexOf(num) + 1);
    };
    var fibonacciTask = function() {
        this.prev = 0;
        this.cur = 1;
        this.buf = 0;
        this.timer = 1000;


        this.runInfinite = function () {
            var that = this;
            setTimeout(function () {
                console.log(that.cur);
                that.buf = that.cur;
                that.cur = that.cur + that.prev;
                that.prev = that.buf;
                $('#fibonacci').append('<p>' + that.cur + '</p>');
                window.scrollTo(0, document.body.scrollHeight);
                that.runInfinite();
            }, this.timer);
        };

        this.runToNum = function (num) {
            console.log(this.cur);
            this.buf = this.cur;
            this.cur = this.cur + this.prev;
            this.prev = this.buf;
            $('#fibonacci').append('<p>' + this.cur + '</p>');
            if (num > this.cur)
                this.runToNum(num);
        }
    }
}

function Fibonacci() {
    this.prev = 0;
    this.cur = 1;
    this.buf = 0;
    this.timer = 1000;


    this.runInfinite = function () {
        var that = this;
        setTimeout(function () {
            console.log(that.cur);
            that.buf = that.cur;
            that.cur = that.cur + that.prev;
            that.prev = that.buf;
            $('#fibonacci').append('<p>' + that.cur + '</p>');
            window.scrollTo(0, document.body.scrollHeight);
            that.runInfinite();
        }, this.timer);
    };

    this.runToNum = function (num) {
        console.log(this.cur);
        this.buf = this.cur;
        this.cur = this.cur + this.prev;
        this.prev = this.buf;
        $('#fibonacci').append('<p>' + this.cur + '</p>');
        if (num > this.cur)
            this.runToNum(num);
    }
}

var getNewExp = function (number) {
    var exp = Math.E;
    var expStr = exp.toString();
    return expStr.slice(0, expStr.lastIndexOf(number) + 1);
};

var getNumberSequenceFibonacci = function (num) {
    var fib = new Fibonacci();
    //fib.runToNum(1000);
    fib.runInfinite();
};

var getNumberFibonacci = function (num) {
    var prev = 0;

    var fib = function (cur) {
        prev = cur;
        cur += prev;
        console.log(cur);
        if (num > cur)
            fib(cur);
    };
    fib(1);
};


$(document).ready(function () {

    var input_block = $('#input'),
        result_block = $('#prime-result');
    var array = [];
    $('#submit').on('click', function () {
        var value = input_block.val(),
            text="";
        array = [];
        result_block.val("");

        while (!(value % 2) && (value > 2)) {
            array.push(2);
            value = value / 2;
        }
        while (!(value % 3) && (value > 3)) {
            array.push(3);
            value = value / 3;
        }
        while (!(value % 5) && (value > 5)) {
            array.push(5);
            value = value / 5;
        }
        while (!(value % 7) && (value > 7)) {
            array.push(7);
            value = value / 7;
        }
        array.push(value);
        for (var i = 0; i < array.length; i++) {
            result_block.text(array[i]);
            text += array[i].toString();
            if(i != array.length-1) {
                text += " x ";
            }
        }
        result_block.text(text);
    });

    $('#clear').on('click', function(){
        $('#prime-result').text('');
    });

    describe('pow', function(){

    });
});
