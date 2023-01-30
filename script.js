
function operate(operator, num1, num2) {

    if (operator === "suma") {
        result = suma(num1, num2)
    } else if (operator === "resta") {
        result = resta(num1, num2)
    } else if (operator === "division") {
        result = division(num1, num2)
    } else if (operator === "multiplicacion") {
        result = multipicacion(num1, num2)
    }

    return result
}

function suma(a, b){
    let c = a + b
    return c
}

function resta(a, b) {
    let c = a - b
    return c
}

function division(a, b) {
    if (b === 0) {
        return "div by zero"
    }
    let c = a/b
    return c
}

function multipicacion(a, b) {
    let c = a * b
    return c
}