

const userName = sessionStorage.getItem('userName');
document.getElementById('user-name-features').innerText = userName;


document.getElementById('add-money-btn').addEventListener('click', function() {
    toggleButtonColor('add-money-btn');
    toggleState('add-money-state');
});
  
document.getElementById('cash-out-btn').addEventListener('click', function() {
    toggleButtonColor('cash-out-btn');
    toggleState('cash-out-state');
});

document.getElementById('transaction-btn').addEventListener('click', function() {
    toggleButtonColor('transaction-btn');
    toggleState('transaction-state');
});


const userPin = sessionStorage.getItem('userPin');

document.getElementById('add-money-large-btn').addEventListener('click', function(event) {
    event.preventDefault();

    let addMoneyAmount = getValueFromInputField('add-money-amount');
    const addMoneyPin = getValueFromInputField('add-money-pin');

    addMoneyAmount = Number(addMoneyAmount);

    if(userPin === addMoneyPin && isNaN(addMoneyAmount) === false) {
        const balance = document.getElementById('balance');

        const balanceNumber = Number(balance.innerText);
        const newBalance = balanceNumber + addMoneyAmount;
        balance.innerText = newBalance;
        document.getElementById('addTemp').innerText = addMoneyAmount;
        document.getElementById('my_modal_3').showModal();

        document.getElementById('add-money-amount').value = '';
        document.getElementById('add-money-pin').value = '';
    }
    else {
        document.getElementById('my_modal_2').showModal();
    }
})

document.getElementById('cash-out-large-btn').addEventListener('click', function(event) {
    event.preventDefault();

    let cashOutAmount = getValueFromInputField('cash-out-amount');
    const cashOutPin = getValueFromInputField('cash-out-pin');

    cashOutAmount = Number(cashOutAmount);

    const balance = document.getElementById('balance');
    const balanceNumber = Number(balance.innerText);

    if(userPin === cashOutPin && isNaN(cashOutAmount) === false && cashOutAmount <= balanceNumber) {

        const newBalance = balanceNumber - cashOutAmount;
        balance.innerText = newBalance;
        document.getElementById('subtractTemp').innerText = cashOutAmount;
        document.getElementById('my_modal_4').showModal();

        document.getElementById('cash-out-amount').value = '';
        document.getElementById('cash-out-pin').value = '';
    }
    else {
        document.getElementById('my_modal_2').showModal();
    }
})



