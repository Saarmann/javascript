alert ("Implement solution in Lab03-Tables.js file ");
alert ("Test data connected: OrderNo: "+shipments[0].orderNo);

function loadTable() {

let myTable = document.getElementById("myTable");
const buttons = "<a href=\"#\" class=\"btn-action glyphicons eye_open btn-info\"><i></i></a>
                <a href=\"#\" class=\"btn-action glyphicons pencil btn-success\"><i></i></a>
                <a href=\"#\" class=\"btn-action glyphicons remove_2 btn-danger\"><i></i></a>"

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
    
    for (let i = 0; i < shipments.length; i++) {

        tableRow = myTable.insertRow();

        // fill cells in table
        for(let j = 0; j < (columns.length); j++ ) {
        let tableCell = tableRow.insertCell();
        if(j == columns.length) {
            tableCell.innerHTML = buttons;
        } else {
            tableCell.innerHTML = shipments[i][columns[j]];
        }            
       
    }
    
}    

}


