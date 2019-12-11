function arrayProbability() {
    let mySymbolArray = ["A", "B", "C", "D", "E"];
    let myProbArray = [0.9,0.1,0.0,0.0,0.0];

    // let possibility = Math.random() * 100;
    // let probability = possibility / mySymbolArray.length;

    // let probabilityArray = [];

    let finalArray = [];

    // for(let i = 0; i<mySymbolArray.length; i++){
    //     let arrayElement = mySymbolArray[i] * myProbArray[i];
    //     if(arrayElement != 0) {
    //         finalArray.push()
    //     }
    //         return finalArray;

    // }

    
    let probability;
    for(let i = 0; i<mySymbolArray.length;i++){
        let chance = Math.random();
        probability = myProbArray[i];
        if(chance < probability) {
            finalArray.push(mySymbolArray[i]);
        }
                  

    }
        console.log(finalArray);
}