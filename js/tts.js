const btn = document.getElementById("b1");
const namebtn = document.getElementById("b1").getAttribute("name");
const namebtn2 = document.getElementById("b2").getAttribute("name");
const btn2 = document.getElementById("b2");

btn.addEventListener('click', function () {
    geserCek(namebtn)
});
btn2.addEventListener('click', function () {
    geserCek(namebtn2)
});
//event when fill the input


function geserCek(nbtn) {
    document.getElementById(nbtn).focus();
    const table = document.querySelectorAll('.' + nbtn);
    for (let i = 0; i < table.length; i++) {
        table[i].addEventListener('input', function () {
            if (i == table.length - 1) {
                var concatString = catString(nbtn);
                submitString(concatString, nbtn);
            } else {
                autoNext(i, nbtn);
            }

        });

    }
}


// for (let i = 0; i < table1.length; i++) {
//     let cnama = table1[i].className;
//     table1[i].addEventListener('input', function () {
//         if (i == table.length - 1) {
//             var concatString = catString(cnama);
//             submitString(concatString);
//         } else {
//             autoNext(i, cnama);
//         }

//     });

// }


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
function submitString(concat, tipe) {
    if (concat.toUpperCase() == "ABC" && tipe == "d1") {
        alert("jawaban anda benar");
    } else if (concat.toUpperCase() == "BCA" && tipe == "m1") {
        alert("jawaban anda benar");
    }
}