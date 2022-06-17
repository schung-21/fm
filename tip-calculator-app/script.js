

function validate() {
    var bill = document.forms['calculator']['bill'].value;
    var tipPercent = document.forms['calculator']['tip'].value;
    var customTip = document.getElementById('custom-tip').value;
    var people = document.forms['calculator']['people'].value;
    
    if (customTip) {tipPercent = customTip;}

    if (people == 0) {
        document.getElementById('people').style.border = '2px solid tomato';
        document.getElementById('err-msg').innerHTML = "Can't be zero";
    } else {
        document.getElementById('people').style.border = '2px solid transparent';
        document.getElementById('err-msg').innerHTML = "";
    }

    var tip = bill * (tipPercent / 100);
    var total = parseFloat(bill) + parseFloat(tip);

    var tipPer = tip / people;
    var totalPer = total / people;

    if (bill && tipPercent && people) {
        document.getElementById('tip-result').innerHTML = `$${tipPer.toFixed(2)}`;
        document.getElementById('total-result').innerHTML = `$${totalPer.toFixed(2)}`;
    }
}

var reset = document.querySelector('input[type="reset"]');
if (!bill && !tip && !people) {
    reset.style.opacity = "0.25";
} else if (bill || tip || people) {
    reset.style.opacity = '1';
}

function resetClick() {
    document.getElementById('tip-result').innerHTML = "$0.00";
    document.getElementById('total-result').innerHTML = "$0.00";
}