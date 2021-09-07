// Inputs and Outputs Variables
var rInput = document.querySelector('#right-input input')
var lInput = document.querySelector('#left-input input')
var unitInputs = document.querySelectorAll('.unit-selector')
var calcContainer = document.querySelector('#calc-container')
// Units Select Variables
var rUnit = document.querySelector('#right-unit')
var lUnit = document.querySelector('#left-unit')

// Input

// Add Event for Each Unit Selector
var prevLTemp = lUnit.value
var prevRTemp = rUnit.value
var prevTemp = {left: lUnit.value, right: rUnit.value}
unitInputs.forEach( selector => selector.addEventListener('input', e =>{

    // Swap Units if selected the same units
    if (lUnit.value == rUnit.value){
        if (e.target == lUnit){
            let newLTemp = prevLTemp
            lUnit.value = rUnit.value
            rUnit.value = newLTemp
            
        }else if (e.target == rUnit){
            let newRTemp = prevRTemp
            rUnit.value = lUnit.value
            lUnit.value = newRTemp
            
        }
        prevTemp = {left: lUnit.value, right: rUnit.value}
        prevLTemp = lUnit.value
        prevRTemp = rUnit.value
    }
    calcValues(e)

}));

function calcValues(e) {
    // Pounds and Kilogram
    if(lUnit.value == 'lbs' && rUnit.value == 'kg'){
        if(e.target == lInput){
            rInput.value = lInput.value / 2.2046226218
        }else if (e.target == rInput){
            lInput.value = rInput.value * 2.2046226218
        }
    }
    else if (lUnit.value == 'kg' && rUnit.value == 'lbs'){
        if(e.target == lInput){
            rInput.value = lInput.value * 2.2046226218
        }else if (e.target == rInput){
            lInput.value = rInput.value / 2.2046226218
        }
    }
    // Pounds and Gram
    else if(lUnit.value == 'lbs' && rUnit.value == 'g'){
        if(e.target == lInput){
            rInput.value = lInput.value * 453.59237
        }else if (e.target == rInput){
            lInput.value = rInput.value / 453.59237
        }
    }else if(lUnit.value == 'g' && rUnit.value == 'lbs'){
        if(e.target == lInput){
            rInput.value = lInput.value / 453.59237
        }else if (e.target == rInput){
            lInput.value = rInput.value * 453.59237
        }
    }
    // Pounds and Ounce
    else if(lUnit.value == 'lbs' && rUnit.value == 'oz'){
        if(e.target == lInput){
            rInput.value = lInput.value * 16
        }else if (e.target == rInput){
            lInput.value = rInput.value / 16
        }
    }
    else if(lUnit.value == 'oz' && rUnit.value == 'lbs'){
        if(e.target == lInput){
            rInput.value = lInput.value / 16
        }else if (e.target == rInput){
            lInput.value = rInput.value * 16
        }
    }
    // Kilogram and Gram
    else if(lUnit.value == 'kg' && rUnit.value == 'g'){
        if(e.target == lInput){
            rInput.value = lInput.value * 100
        }else if (e.target == rInput){
            lInput.value = rInput.value / 100
        }
    }
    else if (lUnit.value == 'g' && rUnit.value =='kg'){
        if(e.target == lInput){
            rInput.value = lInput.value / 100
        }else if (e.target == rInput){
            lInput.value = rInput.value * 100
        }
    }
    // Kilogram and Ounce
    else if (lUnit.value == 'kg' && rUnit.value == 'oz'){
        if(e.target == lInput){
            rInput.value = lInput.value * 35.27396195
        }else if (e.target == rInput){
            lInput.value = rInput.value / 35.27396195
        }
    }
    else if (lUnit.value == 'oz' && rUnit.value =='kg'){
        if(e.target == lInput){
            rInput.value = lInput.value / 35.27396195
        }else if (e.target == rInput){
            lInput.value = rInput.value * 35.27396195
        }
    }
    // Gram and Ounce
    else if (lUnit.value == 'g' && rUnit.value == 'oz'){
        if(e.target == lInput){
            rInput.value = lInput.value * 0.03527396195
        }else if (e.target == rInput){
            lInput.value = rInput.value / 0.03527396195
        }
    }
    else if (lUnit.value == 'oz' && rUnit.value == 'g'){
        if(e.target == lInput){
            rInput.value = lInput.value / 0.03527396195
        }else if (e.target == rInput){
            lInput.value = rInput.value * 0.03527396195
        }
    }
}

calcContainer.addEventListener('input', (e)=>{
    // KG and LBS
    calcValues(e)

}, true);