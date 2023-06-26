function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log('pin is not 4 digit',pin);
        return getPin();
    }
}
document.getElementById('generate-pin').addEventListener('click',function(){
    const pinValue = getPin();
    document.getElementById('display-pin').value = pinValue;
})
document.getElementById('calculator').addEventListener('click',function(event){
    // console.log(event.target.innerText);
    const number = event.target.innerText; 

    const calInput = document.getElementById('typed-numbers');
    // check number or Not
    if(isNaN(number)){
        if(number == 'C'){
            calInput.value = '';
        }
    }
    else{
        const previousCal = calInput.value;
        const newCal = previousCal + number;
        calInput.value = newCal;
    }
    // console.log(calInput);
    


})
