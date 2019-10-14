//event when fill the input
const table = document.querySelectorAll('.d1');

for (let i = 0; i < table.length; i++) {
    var cnama = table[i].className;
    table[i].addEventListener('input', function () {
        if (i == table.length - 1) {
            var concatString = catString(cnama);
            submitString(concatString);
        } else {
            autoNext(i, cnama);
        }

    });

}


var row = document.getElementById('ih');
var cname = row.className;

// the id then will be filled with event listener classname
// row.addEventListener('input', function () {
//     var concatString = catString(cname);
//     submitString(concatString);
// });

//the input will automove to the next input when its fill
function autoNext(i, cn) {
    let d = document.querySelectorAll('.' + cn);
    d[i + 1].focus();
}

// concat input to string
function catString(cn) {
    var concat = "";
    let d = document.querySelectorAll('.' + cn);
    for (let i = 0; i < d.length; i++) {
        concat += d[i].value;
    }
    return concat;
}

//submit the concat string
function submitString(concat) {
    console.log(concat);
}