alert ("Implement solution in Lab03-Tables.js file ");
alert ("Test data connected: OrderNo: "+shipments[0].orderNo);

var rows = 10;

function loadTable() {

let myTable = document.getElementById("myTable");
const buttons = "<a href=\"#\" class=\"btn-action glyphicons eye_open btn-info\"><i></i></a><a href=\"#\" class=\"btn-action glyphicons pencil btn-success\"><i></i></a><a href=\"#\" class=\"btn-action glyphicons remove_2 btn-danger\"><i></i></a>"
//document.getElementById("nextButton").addEventListener("click", );
 

let maxTableRows = shipments.length;
var tableRows;

if ((rows - 10) > (200 - 10)) {
    var tableRows = maxTableRows;
    var i = maxTableRows - 10;
} else {
    var tableRows = rows
    var i = rows - 10;
}

var columns = [];
for (let i = 0; i < shipments.length; i++) {
    for(let key in shipments[i]){
        if (columns.indexOf(key) === -1) {
            columns.push(key);
        }
    }
}

// create table rows
let tableRow = myTable.insertRow(); 
    

    for (i; i < tableRows; i++) {

        tableRow = myTable.insertRow();

        // fill cells in table
        for(let j = 0; j < (columns.length+1); j++ ) {
            let tableCell = tableRow.insertCell();
            if(j == columns.length) {
                tableCell.innerHTML = buttons;
            } else {
                tableCell.innerHTML = shipments[i][columns[j]];
            }            
        }          
    }    


}

function loadTableNextPage() {

let myTable = document.getElementById("myTable");
const buttons = "<a href=\"#\" class=\"btn-action glyphicons eye_open btn-info\"><i></i></a><a href=\"#\" class=\"btn-action glyphicons pencil btn-success\"><i></i></a><a href=\"#\" class=\"btn-action glyphicons remove_2 btn-danger\"><i></i></a>"
//document.getElementById("nextButton").addEventListener("click", );
 
var rows = 150;
let maxTableRows = shipments.length;
var tableRows;

if ((rows - 10) > (200 - 10)) {
    var tableRows = maxTableRows;
    var i = maxTableRows - 10;
} else {
    var tableRows = rows
    var i = rows - 10;
}

var columns = [];
for (let i = 0; i < shipments.length; i++) {
    for(let key in shipments[i]){
        if (columns.indexOf(key) === -1) {
            columns.push(key);
        }
    }
}

// create table rows
let tableRow = myTable.insertRow(); 
    

    for (i; i < tableRows; i++) {

        tableRow = myTable.insertRow();

        // fill cells in table
        for(let j = 0; j < (columns.length+1); j++ ) {
            let tableCell = tableRow.insertCell();
            if(j == columns.length) {
                tableCell.innerHTML = buttons;
            } else {
                tableCell.innerHTML = shipments[i][columns[j]];
            }            
        }          
    }    

}


function nextPage() {

    var rows = rows + 10;
    loadTableNextPage();
}

function previousPage() {



}

function lastPage () {



}

function firstPage() {



}

function clearTable() {

    document.getElementById("myTable");
    

}