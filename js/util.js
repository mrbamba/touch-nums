'use strict'
//common functions to be used everywhere

function initNums(count){
    var nums=[];
    for (var i=0;i<count;i++){
        nums.push(i+1);
    }
    console.log(nums)
}

function sumCol(mat, col) {
    var sum = 0
    for (var i = 0; i < mat.length; i++) {
        sum += mat[i][col];
    }
    return sum;
}

function sumRow(mat, row) {
    var sum = 0
    for (var j = 0; j < mat.length; j++) {
        sum += mat[row][j];
    }
    return sum
}

function sumPrimaryDiagonal(mat) {
    var sum = 0
    for (var d = 0; d < mat.length; d++) {
        sum += mat[d][d];
    }
    return sum;
}

// sumSecondaryDiagonal(magicSquare)
function sumSecondaryDiagonal(mat) {
    var sum = 0;
    for (var d = 0; d < mat.length; d++) {
        sum += mat[d][mat.length - d - 1]
    }
    return sum;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

// find neighbours
function countneighboursAround(mat, rowIdx, colIdx) {
    var neighboursCount = 0;
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i > mat.length - 1) continue
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j > mat[0].length - 1) continue
            if (i === rowIdx && j === colIdx) continue
            var cell = mat[i][j]
            if (cell === '*') neighboursCount++
        }
    }
    return neighboursCount
}
