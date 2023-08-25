/******************************************************* ASSIGNMENT 1*************************************************************************** */
function checkNumber(number) {
    if (number > 0) {
        console.log("Positive");
    } else if (number < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}


checkNumber(5);     // Output: Positive
checkNumber(-2);    // Output: Negative
checkNumber(0);     // Output: Zero

/******************************************************* ASSIGNMENT 2*************************************************************************** */
function calculateFactorial(number) {
    if (number < 0) {
        return "Factorial is not defined for negative numbers.";
    } else if (number === 0 || number === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= number; i++) {
            factorial *= i;
        }
        return factorial;
    }
}


console.log(calculateFactorial(5));   // Output:  120
console.log(calculateFactorial(0));   // Output: 1 
console.log(calculateFactorial(1));   // Output: 1 
/******************************************************* ASSIGNMENT 3*************************************************************************** */
function findLargerNumber(a, b) {
    return a > b ? a : b;
}


console.log(findLargerNumber(5, 10));   // Output: 10
console.log(findLargerNumber(-2, 0));   // Output: 0
console.log(findLargerNumber(7, 7));    // Output: 7 (both numbers are equal)

/******************************************************* ASSIGNMENT 4*************************************************************************** */
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Compare the cleaned string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}


console.log(isPalindrome("mom"));                  // Output: true
console.log(isPalindrome("tenet"));                // Output: true
console.log(isPalindrome("python"));               // Output: false

/******************************************************* ASSIGNMENT 5*************************************************************************** */
function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    if (num <= 3) {
        return true;
    }

    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

function printPrimesUpToN(n) {
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}


printPrimesUpToN(10);   // Output: 2, 3, 5, 7, 11, 13, 17, 19

/******************************************************* ASSIGNMENT 6*************************************************************************** */
function simpleCalculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Can't divide by zero";
            }
        default:
            return "Invalid operator";
    }
}


console.log(simpleCalculator(5, 10, '+'));   // Output: 15
console.log(simpleCalculator(8, 3, '-'));    // Output: 5
console.log(simpleCalculator(4, 6, '*'));    // Output: 24
console.log(simpleCalculator(15, 3, '/'));   // Output: 5
console.log(simpleCalculator(20, 0, '/'));   // Output: Cannot divide by zero
console.log(simpleCalculator(5, 10, '%'));   // Output: Invalid operator

/******************************************************* ASSIGNMENT 7*************************************************************************** */
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vowelCount++;
        }
    }

    return vowelCount;
}


console.log(countVowels("i'm Rajveer Singhal"));   // Output: 6 
console.log(countVowels("JavaScript is awesome")); // Output: 8 

/******************************************************* ASSIGNMENT 8*************************************************************************** */
function isPerfectNumber(num) {
    if (num <= 0) {
        return false;
    }

    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum === num;
}


console.log(isPerfectNumber(28));   // Output: true (28 = 1 + 2 + 4 + 7 + 14)
console.log(isPerfectNumber(6));    // Output: true (6 = 1 + 2 + 3)
console.log(isPerfectNumber(12));   // Output: false (12 != 1 + 2 + 3 + 4 + 6)
console.log(isPerfectNumber(9));  // Output: false (9 != 1 + 3 + 9)

/******************************************************* ASSIGNMENT 9*************************************************************************** */
function fibonacciSeriesUpToN(n) {
    let fibSeries = [0, 1];

    while (fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2] <= n) {
        fibSeries.push(fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]);
    }

    console.log(fibSeries.join(', '));
}

fibonacciSeriesUpToN(50);   // Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
fibonacciSeriesUpToN(100);  // Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
fibonacciSeriesUpToN(100);  //Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

/******************************************************* ASSIGNMENT 10****************************************************************************/
function printMultiplicationTable(n) {
    if (n <= 0) {
        console.log("Please provide a positive integer.");
        return;
    }

    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}


printMultiplicationTable(5);

