/* Name: Zachary Palmer
Date: 11/25/18
Assignment: 7
Class: GUI 1
*/

// Validate input and create table based on 4 index inputs
function generateTable(topStart, topEnd, sideStart, sideEnd) {

    document.getElementById("outputTable").innerHTML = "";

    if (Number(topStart) > Number(topEnd)) {
        console.log("swapping top values")
        var tempStart = topStart;
        topStart = topEnd;
        topEnd = tempStart;
        document.getElementById("inputtedVals").innerHTML =
        "<h4>Swapping Top Values!</h4>";
    }
    if (Number(sideStart) > Number(sideEnd)) {
        console.log("swapping top values")
        var tempStart = sideStart;
        sideStart = sideEnd;
        sideEnd = tempStart;
        document.getElementById("inputtedVals").innerHTML +=
        "<h4>Swapping Side Values!</h4>";
    }   
    //If any values are blank then abort 
    //table creation and print out error msg
    if (sideStart == "" ||
        sideEnd == "" ||
        topStart == "" ||
        topEnd == "") {
        document.getElementById("inputtedVals").innerHTML =
            "";
    }
    //If any starting values are higher than ending values 
    //then abort table creation and print error msg
        //All validation has passed so create table and place in HTML
        else {
            topStart = Number(topStart);
            topEnd = Number(topEnd);
            sideStart = Number(sideStart);
            sideEnd = Number(sideEnd);
            document.getElementById("inputtedVals").innerHTML +=
                "<h4>Creating multiplication table by multiplying all values from " +
                topStart + " to " + topEnd + " by all values from " +
                sideStart + " to " + sideEnd + "...</h4>";

            //loop through all the inputted indexes creating the multiplicaiton table
            var table = document.getElementById("outputTable");
            for (var i = sideStart; i <= sideEnd; i++) {
                var row = table.insertRow(i - sideStart);
                for (var e = topStart; e <= topEnd; e++) {
                    var cell = row.insertCell(e - topStart);
                    cell.innerHTML = i * e;
                }
                var cell = row.insertCell(0);
                cell.innerHTML = i;
            }

            //insert the first row on the top showing the range
            var firstRow = table.insertRow(0);
            for (let j = topStart; j <= topEnd; j++) {
                var cell = firstRow.insertCell(j - topStart);
                cell.innerHTML = j;
            }

            //in the upper right cell insert a multiplication sign
            var cell = firstRow.insertCell(0);
            cell.innerHTML = "X";
        }
}

//Process form when submit button is pressed and return false so 
// page is not refreshed
function processForm(e) {
    if (e.preventDefault) e.preventDefault();
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    var num4 = document.getElementById('num4').value;
    generateTable(num1, num2, num3, num4);
    return false;
}

var form = document.getElementById('inputForm');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}

$(function () {
    $("form[name='inputForm']").validate({
        //validation rules
        rules: {
            num1: {
                required: true,
                digits: true
            },
            num2: {
                required: true,
                digits: true
            },
            num3: {
                required: true,
                digits: true
            },
            num4: {
                required: true,
                digits: true
            }
        },
        //validation error messages
        messages: {
            num1: {
                required: "<br><h3>Cannot leave this blank!</h3></br>",
                digits: "<br><h3>Must be a digit!</h3></br>"
            },
            num2: {
                required: "<br><h3>Cannot leave this blank!</h3></br>",
                digits: "<br><h3>Must be a digit!</h3></br>"
            },
            num3: {
                required: "<br><h3>Cannot leave this blank!</h3></br>",
                digits: "<br><h3>Must be a digit!</h3></br>"
            },
            num4: {
                required: "<br><h3>Cannot leave this blank!</h3></br>",
                digits: "<br><h3>Must be a digit!</h3></br>"
            }
        }
    });
});