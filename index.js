

function currency(){
    let currencyValue = document.getElementById("currency").value
    if (currencyValue === ""){
        document.querySelector("#result").innerHTML = "Please enter a valid ammount.";
    } else {
    if (currencyValue === "Euro"){
        let ammount = document.getElementById("usd").value;
        let total =  ammount * 1.08;
        document.querySelector("#result").innerHTML = "€ " + total.toFixed(2) + " Euros";
    }
    else if (currencyValue === "Peso"){
        let ammount2 = document.getElementById("usd").value;
        let total2 =  ammount2 * 17.04;
        document.querySelector("#result").innerHTML = "$ " + total2.toFixed(2) + " Mexican Pesos";
    }
    else if (currencyValue === "Pound"){
        let ammount3 = document.getElementById("usd").value;
        let total3 =  ammount3 * 0.79;
        document.querySelector("#result").innerHTML = "£ " + total3.toFixed(2) + " Pounds Sterling";
    }
    else if(currencyValue === "Yuan"){
        let ammount4 = document.getElementById("usd").value;
        let total4 =  ammount4 * 7.19;
        document.querySelector("#result").innerHTML = "¥ " + total4.toFixed(2) + " Yuan";
    }
    else if (currencyValue === "Yen"){
        let ammount5 = document.getElementById("usd").value;
        let total5 =  ammount5 * 149.94;
        document.querySelector("#result").innerHTML = "¥ " + total5.toFixed(2) + " Yen";
    }
    }
}

