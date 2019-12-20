alert ("Implement solution in Lab03-Tables.js file ");
alert ("Test data connected: OrderNo: "+shipments[0].orderNo);

let newRows = 0;

function loadTable() {

    let myTable = document.getElementById("myTable");
    const buttons = "<a href=\"#\" class=\"btn-action glyphicons eye_open btn-info\"><i></i></a><a href=\"#\" class=\"btn-action glyphicons pencil btn-success\"><i></i></a><a href=\"#\" class=\"btn-action glyphicons remove_2 btn-danger\"><i></i></a>"
    let rows = newRows + 10;
    let maxTableRows = shipments.length;
    let tableRows;
    let i;

    if ((rows - 10) > (maxTableRows - 10)) {
        tableRows = maxTableRows;
        i = maxTableRows - 10;
    } else {
        if (rows < 10) {
            tablerows = 10;
            i = tableRows - 10;
        } else {
            tableRows = rows
            i = rows - 10;
        }
    }
    var columns = [];
    for (let i = 0; i < shipments.length; i++) {
        for (let key in shipments[i]) {
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
        for (let j = 0; j < (columns.length + 1); j++) {
            let tableCell = tableRow.insertCell();
            if (j == columns.length) {
                tableCell.innerHTML = buttons;
            } else {
                tableCell.innerHTML = shipments[i][columns[j]];
            }
        }
    }
}

function nextPage() {
    newRows = newRows + 10;
    clearTable();
    loadTable();
}

function previousPage() {
    newRows = newRows - 10;
    clearTable();
    loadTable();
}

function lastPage() {
    newRows = shipments.length + 10;
    clearTable();
    loadTable();
}

function firstPage() {
    newRows = 0;
    clearTable();
    loadTable();
}

function clearTable() {
    let myTable = document.getElementById("myTable");
    let rowCount = myTable.rows.length;
    while (rowCount > 1) { // if set to 0 deletes also table heads. 
        myTable.deleteRow(1);
    }
    
}




