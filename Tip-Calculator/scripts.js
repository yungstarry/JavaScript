function calculate() {
  // Get the values of the input fields
  let amount = parseFloat(document.getElementById("amount").value);
  let guests = parseFloat(document.getElementById("guest").value);
  let quality = parseFloat(document.getElementById("quality").value);
  let tipAmount = document.getElementById('tip-amount');

  // Calculate the tip amount per guest
  let tip = ((amount * quality) / (guests)).toFixed(2);
    amount = '';
    guests = '';
    quality = '';
    if(tip === 'NaN'){
        tipAmount.innerHTML = 'Tip $0 each';
        showTipAmount(tipAmount);
    }
    else{
        tipAmount.innerHTML = 'Tip $' + tip + ' each';
        showTipAmount(tipAmount);
    }
  
}

showTipAmount = (tipAmount) =>{
    let x = tipAmount
    x.className = 'show';
    setTimeout(function(){x.className= x.className.replace('show', '');}, 5000)
}
