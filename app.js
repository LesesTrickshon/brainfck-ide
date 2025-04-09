var code;
let output = "";
let index = 0;
let savedIndex = 0;
let counter = 0;
let cell = [];
for (let i = 0; i < 255; i++){
    cell[i] = 0;
}
let length;

function runit(){
    // clearing everything
    code = "";
    output = "";
    index = 0;
    savedIndex = 0;
    for (let i = 0; i < 255; i++){
        cell[i] = 0;
    }
    counter = 0;

    document.getElementById("output").innerHTML = ""

    code = document.getElementById("code").value;
    length = code.length;
    while (index < length) {
        if (code.charAt(index) == "+") {
            if (cell[counter] < 254) {
                cell[counter]++;
            } else {
                cell[counter] = 0;
            }

        } else if (code.charAt(index) == "-") {
            if (cell[counter] > 0) {
                cell[counter]--;
            } else {
                cell[counter] = 254;
            }

        } else if (code.charAt(index) == ">") {
            if (counter < 254) {
                counter++;
            } else {
                counter = 0;
            }

        } else if (code.charAt(index) == "<") {
            if (counter > 0) {
                counter--;
            } else {
                counter = 254;
            }

        } else if (code.charAt(index) == "[") {
            savedIndex = index;

        } else if (code.charAt(index) == "]"){
            if (cell[counter] != 0){
                index = savedIndex;
            }

        } else if (code.charAt(index) == ".") {
            output += String.fromCharCode(cell[counter]);
        }

        index++;
    }
    document.getElementById("output").innerHTML = output;
}