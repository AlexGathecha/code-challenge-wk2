function swapCase(inputString) {
    let result = '';
    
    for (let i = 0; i < inputString.length; i++) {

        if (inputString[i] === inputString[i].toUpperCase()) {

            result += inputString[i].toLowerCase();
        } else {

            result += inputString[i].toUpperCase();
        }
    }
    

    return result;
}


console.log(swapCase('The Quick Brown Fox'));