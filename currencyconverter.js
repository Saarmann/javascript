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