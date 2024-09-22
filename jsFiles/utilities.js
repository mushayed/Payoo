
function getValueFromInputField(id) {
    return document.getElementById(id).value;
}

function toggleButtonColor(clickedButtonId) {

    const buttonIds = ['add-money-btn', 'cash-out-btn', 'transaction-btn'];

    for (const btnId of buttonIds) {
        const button = document.getElementById(btnId);
  
        if (btnId === clickedButtonId) {
            button.classList.remove('btn-outline');
        } else {
            button.classList.add('btn-outline');
        }
    }
}

function toggleState(clickedStateId) {

    const stateIds = ['add-money-state', 'cash-out-state', 'transaction-state'];

    for(const stateId of stateIds) {
        const state = document.getElementById(stateId);

        if (stateId === clickedStateId) {
            state.classList.remove('hidden');
        } else {
            state.classList.add('hidden');
        }
    }
}

  
  