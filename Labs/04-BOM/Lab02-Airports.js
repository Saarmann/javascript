alert ("Implement solution in Airports.js script");


function getDepartureCity() {

	let myAirports = [];
	let options = "<option value='0'></option>";

	for(let i = 0; i < airports.length; i++){
	
		myAirports.push(airports[i].departure);
		options += "<option value="+myAirports[i]+">"+myAirports[i]+"</option>";
	}

	document.getElementById("slcDepartures").innerHTML = options;

}


function destinations() {

    let departureCity = document.getElementById("slcDepartures").value;
    let index = airports.findIndex(x => x.departure === departureCity);

    let destinations = [];
    let destinationOptions = "<option value='0'></option>";

    for (let i = 0; i < airports[index].destinations.length; i++) {
        
        destinations.push(airports[index].destinations[i]);
        destinationOptions += "<option value="+destinations[i]+">"+destinations[i]+"</option>";
    
    }
    document.getElementById("slcDestinations").innerHTML = destinationOptions;
}



