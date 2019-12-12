var airports = new Array(6);
				

airports[0]={
	"departure":"Roma",
	"destinations":["Berlin","Madrid","Paris","Tallinn","San Petersburgh","London","Edimburgh","Prague","Valencia","Stockholm"]
};


airports[1]={
	"departure":"London",
	"destinations":[
	"Barcelona","Frankfurt","Kopenhaven","Stuttgart",
	"Roma","Pisa","Prague","Bruxelles","Marseille"]
};


airports[2]={
	"departure":"Frankfurt",
	"destinations":[
	"Riga","Lisbona","Paris","Roma","Venezia",
	"London","Helsinki","Sofia","Siviglia","Rennes"]
};

airports[3]={
	"departure":"Madrid",
	"destinations":[
	"Berlin","London","Bordeaux","Tallinn","Oslo",
	"Firenze","Milano","Genova","Zurich","Stockholm"]
};

airports[4]={
	"departure":"Berlin",
	"destinations":[
	"Dresden","Svolvaer","Paris","Moscow","Pisa",
	"Londra","Helsinki","Dublin","Stuttgart","Stockholm"]
};

airports[5]={
	"departure":"Paris",
	"destinations":[
	"Pisa","Madrid","Berlin","Zurich","Tallinn",
	"London","Munich","Athena","Bern","Basel"]
};
	
	
	
function departurePlaces(airports){

	let departures = [];

	for(let i = 0; i< airports.length; i++){

		departures.push(airports[i].departure);

	}
	console.log(departures)
}

function setDeparture() {
    
    var myAirports = ["1","2","3","4","5"];
    let options = "<option value='0'></option>";

    for(let i=0; i < myAirports.length; i++) {

        options += "<option value="+"myAirports[i]"+">"+myAirports[i]+"</option>";


    }
        document.getElementById("slcDepartures").innerHTML = options;

}

// function myAirport (){
	
// 	let cities = [];

// 	for (let i = 0; i < departures.length

// }