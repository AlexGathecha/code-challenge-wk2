function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function filterPrimeNumbers(array) {
    let primeNumbers = [];

    for (let num of array) {
        if (isPrime(num)) {
            primeNumbers.push(num);
        }
    }

    return primeNumbers;
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterPrimeNumbers(inputArray)); 
