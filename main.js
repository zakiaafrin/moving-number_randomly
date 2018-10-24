var button = document.querySelector('.start');
var matrix = document.querySelector('#matrix');
var previous_X = 0;
var previous_Y = 0;

var table = new Array(30);
for (var i = 0; i < 30; i++){ 
table[i] = new Array(30).fill( 0 );
}

function clickButton() {
    matrix.innerHTML = table[0].join(" ") + '<br/>' + table[1].join(" ") + '<br/>' + table[2].join(" ") + '<br/>' + table[3].join(" ") + '<br/>' + table[4].join(" ") + '<br/>' + table[5].join(" ") + '<br/>' + table[6].join(" ") + '<br/>' + table[7].join(" ") + '<br/>' + table[8].join(" ") + '<br/>' + table[9].join(" ") + '<br/>' + table[10].join(" ") + '<br/>' + table[11].join(" ") + '<br/>' + table[12].join(" ") + '<br/>' + table[13].join(" ") + '<br/>' + table[14].join(" ") + '<br/>' + table[15].join(" ") + '<br/>' + table[16].join(" ") + '<br/>' + table[17].join(" ") + '<br/>' + table[18].join(" ") + '<br/>' + table[19].join(" ") + '<br/>' + table[20].join(" ") + '<br/>' + table[21].join(" ") + '<br/>' + table[22].join(" ") + '<br/>' + table[23].join(" ") + '<br/>' + table[24].join(" ") + '<br/>' + table[25].join(" ") + '<br/>' + table[26].join(" ") + '<br/>' + table[27].join(" ") + '<br/>' + table[28].join(" ") + '<br/>' + table[29].join(" ");

 
    setTimeout(() => {
        var position_X = 15;
        var position_Y = 15;
        table[previous_X][previous_Y] = 0;
        position_X += Math.floor(Math.random() * 2);
        position_Y += Math.floor(Math.random() * 2);
        table[position_X][position_Y] = 1;
        previous_X = position_X;
        previous_Y = position_Y
    
        clickButton();
    }, 1000);
 }

// document.write(table[15].splice(15, 1, 1));

button.addEventListener('click', function (e) {
    clickButton();
})