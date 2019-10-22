const btn = document.querySelectorAll("body button");

btn.forEach(function (pil) {
    pil.addEventListener('click', function () {
        let namebtn = pil.getAttribute('name');
        geserCek(namebtn);
    });
});

//event when fill the input


function geserCek(nbtn) {
    if (document.getElementById(nbtn).disabled == true) {
        autoNext(0, nbtn);
    } else {
        document.getElementById(nbtn).select();
    }

    const table = document.querySelectorAll('.' + nbtn);
    for (let i = 0; i < table.length; i++) {
        table[i].addEventListener('input', function () {
            if (i == table.length - 1) {
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);


            } else if (i == table.length - 2 && table[table.length - 1].disabled == true) {
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);

            } else {
                autoNext(i, nbtn);
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);
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



// the id then will be filled with event listener classname
// row.addEventListener('input', function () {
//     var concatString = catString(cname);
//     submitString(concatString);
// });

//the input will automove to the next input when its fill
function autoNext(i, cn) {
    let d = document.querySelectorAll('.' + cn);
    if (d[i + 1].disabled == true) {
        d[i + 2].select();

    } else {
        d[i + 1].select();
    }

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
function submitString(concat, tipe, table) {
    if (concat.toUpperCase() == "ABC" && tipe == "d1") {
        alert("jawaban anda benar");
        for (let j = 0; j < table.length; j++) {
            table[j].disabled = true;
        }
    } else if (concat.toUpperCase() == "BCA" && tipe == "m1") {
        alert("jawaban anda benar");
        for (let j = 0; j < table.length; j++) {
            table[j].disabled = true;
        }
    } else if (concat.toUpperCase() == "ETNIS" && tipe == "d2") {
        for (let j = 0; j < table.length; j++) {
            table[j].disabled = true;
        }
    } else if (concat.toUpperCase() == "ADERA" && tipe == "d3") {
        for (let j = 0; j < table.length; j++) {
            table[j].disabled = true;
        }
    } else if (concat.toUpperCase() == "TKA" && tipe == "m2") {
        for (let j = 0; j < table.length; j++) {
            table[j].disabled = true;
        }
    } else if (concat.toUpperCase() == "RAM" && tipe == "m3") {
        for (let j = 0; j < table.length; j++) {
            table[j].disabled = true;
        }
    } else if (concat.toUpperCase() == "LAMPUNG" && tipe == "d4") {
        for (let j = 0; j < table.length; j++) {
            table[j].disabled = true;
        }
    } else if (concat.toUpperCase() == "EROPA" && tipe == "m4") {
        for (let j = 0; j < table.length; j++) {
            table[j].disabled = true;
        }
    } else if (concat.toUpperCase() == "NOBEL" && tipe == "m5") {
        for (let j = 0; j < table.length; j++) {
            table[j].disabled = true;
        }
    }

}