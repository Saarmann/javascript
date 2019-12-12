alert ("Implement solution in Airports.js script");


function setDeparture() {
    

    let airports = ["1","2","3","4","5"];

    let options = "<option value='0'></option>";

    for(i=0; i < airports.length; i++) {

        options += "<option value="+"airports[i]"+">"+airports[i]+"</option>";


    }
        document.getElementById("slcDepartures").innerHTML = options;

}




