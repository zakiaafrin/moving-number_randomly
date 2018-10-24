var button = document.querySelector('.start');
var matrix = document.querySelector('#matrix');
var previous_X = 0;
var previous_Y = 0;

var table = new Array(30);
for (var i = 0; i < 30; i++){ 
table[i] = new Array(30).fill( 0 );
}

function clickButton() {
    matrix.innerHTML = table[0].join(" &nbsp; ") + '<br/>' + table[1].join(" &nbsp; ") + '<br/>' + table[2].join(" &nbsp; ") + '<br/>' + table[3].join(" &nbsp; ") + '<br/>' + table[4].join(" &nbsp; ") + '<br/>' + table[5].join(" &nbsp; ") + '<br/>' + table[6].join(" &nbsp; ") + '<br/>' + table[7].join(" &nbsp; ") + '<br/>' + table[8].join(" &nbsp; ") + '<br/>' + table[9].join(" &nbsp; ") + '<br/>' + table[10].join(" &nbsp; ") + '<br/>' + table[11].join(" &nbsp; ") + '<br/>' + table[12].join(" &nbsp; ") + '<br/>' + table[13].join(" &nbsp; ") + '<br/>' + table[14].join(" &nbsp; ") + '<br/>' + table[15].join(" &nbsp; ") + '<br/>' + table[16].join(" &nbsp; ") + '<br/>' + table[17].join(" &nbsp; ") + '<br/>' + table[18].join(" &nbsp; ") + '<br/>' + table[19].join(" &nbsp; ") + '<br/>' + table[20].join(" &nbsp; ") + '<br/>' + table[21].join(" &nbsp; ") + '<br/>' + table[22].join(" &nbsp; ") + '<br/>' + table[23].join(" &nbsp; ") + '<br/>' + table[24].join(" &nbsp; ") + '<br/>' + table[25].join(" &nbsp; ") + '<br/>' + table[26].join(" &nbsp; ") + '<br/>' + table[27].join(" &nbsp; ") + '<br/>' + table[28].join(" &nbsp; ") + '<br/>' + table[29].join(" &nbsp; ");

 
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