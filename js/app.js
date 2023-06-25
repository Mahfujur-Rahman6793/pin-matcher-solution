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
