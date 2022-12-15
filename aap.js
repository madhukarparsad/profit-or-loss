const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const button = document.querySelector("#check-button");
const outPut = document.querySelector("#out-put");

button.addEventListener("click",submitter);

function submitter(){
    var IP = (initialPrice.value);
    var SQ = (stockQuantity.value);
    var CP = (currentPrice.value);

    calculator(IP, SQ, CP);
}

function calculator(initial, quantity, current){
    if (initial < current) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;

        outputter("Hey, the profit is "+profit+" and the percent is "+profitPercentage+"%");
    } else if (initial > current) {
        var loss = (initial - current) * quantity;
        var losspercentage = (loss / initial) * 100;

        outputter("Hey, the loss is "+loss+" and the percent is "+losspercentage+"%"); 
    } else {
        outputter("No pain No gain and No gain No pain");
    } 
}
function outputter(shown) {
    outPut.innerText = shown ;
    console.log(shown)
}
