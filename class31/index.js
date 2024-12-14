document.getElementById('plaus').addEventListener('click',()=>{
    const numbers = document.getElementById('number');

    const  newNumber = numbers.value;
    const newNumberPars=parseFloat(newNumber);
    numbers.value = newNumberPars+1
//now i want to calculate with subtotal
    const subtotal= document.getElementById('subtotal');
    const newsubtotal= subtotal.innerText;
    const newSubtotalPars=parseFloat(newsubtotal);
    subtotal.innerText=numbers*newSubtotalPars
    //console.log(numbers)
})