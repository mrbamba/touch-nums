'use strict'
console.log('Day 10 - Touch Nums Exercise!');

var gNums;
var gNumCount;
var gTimerInterval;
var gTimer;


init()
function init() {
    gNumCount = 1;
    gTimerInterval = 0
    gTimer = 0
    pickBoard(16)

}

function initNums(count) {
    var nums = [];
    for (var i = 0; i < count; i++) {
        nums.push(i + 1);
    }
    shuffle(nums)
    return (nums)
}

function pickBoard(size) {

    if (size === 16) {
        gNums = initNums(16)
        renderBoard(4, 4)
    } else if (size === 25) {
        gNums = initNums(25)
        renderBoard(5, 5)

    } else {
        gNums = initNums(36)
        renderBoard(6, 6)

    }
}


function renderBoard(row, col) {
    var index = 0
    var strHTML = '';
    for (var i = 0; i < row; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < col; j++) {
            var num = gNums[index];
            strHTML += `<td data-num+"${num}" onclick="cellClicked(this, ${num})" class="unclicked" >${num}</td>`
            index++

        }
        strHTML += '</tr>'
    }
    var elTBody = document.querySelector(' .board')
    elTBody.innerHTML = strHTML;
}


function timer() {
    var elStopWatch = document.querySelector('.stopwatch')
    gTimerInterval = setInterval(function () {
        gTimer++
        elStopWatch.innerHTML = gTimer / 100
            , 10000
    }); 

}
function cellClicked(cell, num) {
    console.log(cell)
    if (num === 1) {
        timer()
    }
    if (+cell.innerText === gNumCount) {
        gNumCount++
        cell.classList.remove('unclicked')
        cell.classList.add('clicked')
        if (gNumCount > gNums.length) {
            console.log('Game Over');
            clearInterval(gTimerInterval);
            if (confirm('play again?')) {
                init()
            } else { console.log('Good Bye!') }


        }
    }
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
