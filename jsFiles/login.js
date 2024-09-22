

document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const userName = getValueFromInputField('user-name');
    const userPin = getValueFromInputField('user-pin');

    const userPinNumber = Number(userPin)
    
    if(isNaN(userPinNumber) === false && userName.length > 1 && userName.length < 9 && userPin.length === 4) {
        sessionStorage.setItem('userName', userName);
        sessionStorage.setItem('userPin', userPin);

        window.location.href = 'features.html';
    }
    else {
        document.getElementById('my_modal_1').showModal();
    }
})



