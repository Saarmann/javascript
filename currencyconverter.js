function convertEurUsd(){
    
    let eur = document.getElementById("eur").value;
    let usdAmount = eur * 1.10862;


    document.getElementById("usd").value = usdAmount;
}

function convertUsdEur(){
    
    let usd = document.getElementById("usd").value;
    let eurAmount = usd / 1.10862;


    document.getElementById("eur").value = eurAmount;
}

// function convertUsdEur(){ //under one button
    
//     let usd = document.getElementById("usd").value;
//     let eur = document.getElementById("eur").value;

//     // let eurAmount = usd / 1.10862;
//     // let usdAmount = eur * 1.10862;

//     if(eur != null) {
//         let eurAmount = usd / 1.10862;
//         return document.getElementById("usd").value = eurAmount;

//     } else {
//         let usdAmount = eur * 1.10862;
//         return document.getElementById("eur").value = usdAmount;
//     }

// }