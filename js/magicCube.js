/* main javascript */
var COLOR = {WHITE: 'white', RED: 'red', YELLOW: 'yellow', GREEN: 'green', BLUE: 'blue', 'ORANGE': 'orange'};

function moveToTar () {
    var _k = window.event;
    console.log(_k);
}
/**
 * Get cube array.
 * 
 * @returns
 */
function getCubes () {
    return document.getElementsByClassName('prod');
}

function initMagicCube (){
    var t = window.setInterval('fillColor()', 100);
}

var countFill = 0;
var colorCount = {};
var colorRandom = {};

function fillColor () {
    var cubes = getCubes();
    var len = cubes.length;
    for(var i = 0 ; i < len ; i++) {
        var color = getRandomColor();
        countFill++;
        /*console.log(color);*/
        cubes[i].style.backgroundColor = color;
    }
    if (countFill >= 1000){
        console.log(colorCount);
        console.log(colorRandom);
        colorCount = {};
        countFill = 0;
    }
}


function getRandomColor () {
    var tk;
    for (var key in COLOR) {
        if (Math.random() < getColorRandom(key)) {
            tk = key;
            break;
        }
        tk = key;
    }
    addColorCount(tk);
    return COLOR[tk];
} 

function getColorRandom (key) {
    if (typeof colorRandom[key] != 'number'){
        colorRandom[key] = 1.0 / length(COLOR);
    } else {
        return colorRandom[key];
    }
}

function addColorCount (key){
    if (typeof colorCount[key] == 'undefined' || !colorCount[key]){
        colorCount[key] = 1;
    } else {
        colorCount[key] = colorCount[key] + 1;
    }
}

function length(e){
    var len = 0;
    for (var key in e){
        len++;
    }
    return len--;
}

var $ = function(){

}

/*Object.prototype.length = function() {
    var len = 0;
    for (var key in this){
        len++;
    }
    return len--;
};*/