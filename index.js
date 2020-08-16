window.onload = function () {
    var tic = new tictactoe();
    var playbutton = document.getElementById("replay");
    playbutton.onclick = function () { tic.allclear(); };
    var box1 = document.getElementById('1');
    box1.onclick = function () { tic.print("1"); };
    var box2 = document.getElementById('2');
    box2.onclick = function () { tic.print("2"); };
    var box3 = document.getElementById('3');
    box3.onclick = function () { tic.print("3"); };
    var box4 = document.getElementById('4');
    box4.onclick = function () { tic.print("4"); };
    var box5 = document.getElementById('5');
    box5.onclick = function () { tic.print("5"); };
    var box6 = document.getElementById('6');
    box6.onclick = function () { tic.print("6"); };
    var box7 = document.getElementById('7');
    box7.onclick = function () { tic.print("7"); };
    var box8 = document.getElementById('8');
    box8.onclick = function () { tic.print("8"); };
    var box9 = document.getElementById('9');
    box9.onclick = function () { tic.print("9"); };
};
var tictactoe = /** @class */ (function () {
    function tictactoe() {
        this.manualcount = 0;
        this.winval = "";
        this.wholearr = ["123", "456", "789", "159", "357", "369", "258", "147"];
        this.winarr = [];
        this.alreadyselected = [];
        this.myVar = 0;
    }
    tictactoe.prototype.filterXO = function () {
        var box = document.querySelectorAll(".box");
        var totalX = "";
        var totalO = "";
        box.forEach(function (val) {
            if (val.innerHTML === 'X') {
                console.log(val.id, val.innerHTML);
                totalX += val.id;
            }
            else if (val.innerHTML === 'O') {
                console.log(val.id, val.innerHTML);
                totalO += val.id;
            }
        });
        if (!this.verify(totalX)) {
            if (this.verify(totalO)) {
                this.selectWinnerBoxes();
            }
        }
        else {
            this.selectWinnerBoxes();
        }
    };
    tictactoe.prototype.selectWinnerBoxes = function () {
        this.winarr = this.winval.split("");
        var first = document.getElementById(this.winarr[0]);
        first.classList.add("win");
        var second = document.getElementById(this.winarr[1]);
        second.classList.add("win");
        var third = document.getElementById(this.winarr[2]);
        third.classList.add("win");
        var replay = document.getElementById("turn");
        replay.innerHTML = third.innerHTML + " is a winner";
    };
    tictactoe.prototype.verify = function (total) {
        var inarr = [];
        var val = false;
        console.log("manualcount : " + this.manualcount);
        if (this.manualcount === 3) {
            val = (this.wholearr.indexOf(total) !== -1);
            this.winval = total;
            console.log(val);
        }
        else {
            inarr.push(total.slice(1, 4));
            inarr.push(total.slice(0, 3));
            inarr.push(total.split("")[0] + total.slice(2, 4));
            inarr.push(total.slice(0, 2) + total.split("")[3]);
            console.log(inarr);
            for (var i = 0; i < inarr.length; i++) {
                if (this.wholearr.indexOf(inarr[i]) !== -1) {
                    console.log(inarr[i] + " : " + (this.wholearr.indexOf(inarr[i]) !== -1));
                    val = (this.wholearr.indexOf(inarr[i]) !== -1);
                    this.winval = inarr[i];
                    break;
                }
                else {
                    console.log(inarr[i] + " : " + (this.wholearr.indexOf(inarr[i]) !== -1));
                    val = (this.wholearr.indexOf(inarr[i]) !== -1);
                }
            }
            console.log(val);
        }
        return val;
    };
    tictactoe.prototype.print = function (idval) {
        var replay = document.getElementById("turn");
        if (!((replay.innerHTML).indexOf("is a winner") !== -1)) {
            var enterval = document.getElementById(idval);
            enterval.innerHTML = "X";
            this.manualcount++;
            this.computer(idval);
        }
        else {
            this.allclear();
        }
    };
    tictactoe.prototype.computer = function (getid) {
        var _this = this;
        this.alreadyselected.push(getid);
        console.log("getid : " + getid);
        this.x = Math.floor((Math.random() * 9) + 1);
        if (this.manualcount < 5) {
            this.myVar = setInterval(function () { return _this.includescheck(_this.x); }, 10);
        }
    };
    tictactoe.prototype.includescheck = function (x) {
        console.log("inside includes check : " + this.alreadyselected);
        if (this.alreadyselected.indexOf(x.toString()) !== -1) {
            x = Math.floor((Math.random() * 9) + 1);
            console.log("Inside includes condn : " + x);
        }
        if (!(this.alreadyselected.indexOf(x.toString()) !== -1)) {
            console.log("clearinterval");
            clearInterval(this.myVar);
            var computerval = document.getElementById(x.toString());
            computerval.innerHTML = "O";
            this.alreadyselected.push(x.toString());
            console.log(this.alreadyselected);
            this.filterXO();
        }
    };
    tictactoe.prototype.allclear = function () {
        var box1 = document.getElementById('1');
        box1.innerHTML = "";
        var box2 = document.getElementById('2');
        box2.innerHTML = "";
        var box3 = document.getElementById('3');
        box3.innerHTML = "";
        var box4 = document.getElementById('4');
        box4.innerHTML = "";
        var box5 = document.getElementById('5');
        box5.innerHTML = "";
        var box6 = document.getElementById('6');
        box6.innerHTML = "";
        var box7 = document.getElementById('7');
        box7.innerHTML = "";
        var box8 = document.getElementById('8');
        box8.innerHTML = "";
        var box9 = document.getElementById('9');
        box9.innerHTML = "";
        if (this.winarr.length > 1) {
            var winbox1 = document.getElementById(this.winarr[0]);
            winbox1.classList.remove("win");
            var winbox2 = document.getElementById(this.winarr[1]);
            winbox2.classList.remove("win");
            var winbox3 = document.getElementById(this.winarr[2]);
            winbox3.classList.remove("win");
            var replay = document.getElementById("turn");
            replay.innerHTML = "Play";
        }
        this.alreadyselected = [];
        this.manualcount = 0;
    };
    return tictactoe;
}());
