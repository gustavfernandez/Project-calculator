// linea 1 - 39 -> funciones de las operaciones de la calculadora.

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
    let c = Number(a) + Number(b)
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

// Números y operaciones seleccionados por el usuario los guardaré en un array.
let numeros = []
let num = ""
let limpiar = false // Esta variable es para limpiar si se coloca un número dps del equal.
                    // Si se coloca un operator se mantiene el resultado anterior y se acumula.

const buttonsNum = document.querySelectorAll('.num');
buttonsNum.forEach((button) => {
    button.addEventListener('click', () => {
        // Si ya se puso el igual, se limpia la lista y el display al colocar un nuevo numero
        if (limpiar) {
            clearDisplay()
            numeros = []
            limpiar = false
            num = ""
        }
        num += button.id // num es el número que se agrega al array de numeros.
        addDisplay(button.id)
    })
})

const buttonsOperator = document.querySelectorAll('.operator');
buttonsOperator.forEach((button) => {
    button.addEventListener('click', () => {
        addDisplay(" " + button.textContent + " ")
        limpiar = false
        if (num != "") {
            numeros.push(Number(num), button.id)
            num = "" // se limpia el número para que se agregue otro.
            console.log(numeros) // verificar que se agrega al array.
        }
    })
})

const buttonEqual = document.querySelector('#igual');
buttonEqual.addEventListener('click', () => {
    if (num != "") {
    numeros.push(Number(num))
    console.log(numeros)
    total = calcular(numeros)
    // después de calcular, se limpia la lista
    limpiar = true
    numeros = []
    num = total // se deja num = total por si se quiere seguir realizando operaciones.
    }
})

const buttonClear = document.querySelector('#limpiar');
buttonClear.addEventListener('click', () => {
    numeros = []
    num = ""
    clearDisplay()
    console.log(numeros)
})

const buttonDot = document.querySelector('#dot');
buttonDot.addEventListener('click', () => {
    // Si ya se puso el igual, se limpia la lista y el display al colocar un nuevo numero
    if (limpiar) {
        clearDisplay()
        numeros = []
        limpiar = false
        num = ""
    }
    num += "." // num es el número que se agrega al array de numeros.
    addDisplay(".")

})

function addDisplay(text) {
    display = document.querySelector('.display-box');
    display.textContent += text;

}

function clearDisplay() {
    display = document.querySelector('.display-box');
    displayResult = document.querySelector('.display-result');
    display.textContent = "";
    displayResult.textContent = "";

}

function addResult(resultado) {
    displayResult = document.querySelector('.display-result');
    displayResult.textContent = resultado
}

// En esta función se calcula el resultado de todas las operaciones número por número de izq a derecha.
function calcular(numeros) {
    let total = numeros.splice(0,1)
    //Para calcular el resultado, primero separo la lista en grupo de 2.
    for (let i = 0; i < numeros.length; i += 2) {
        total = operate(numeros[i], total, numeros[i+1])

        if (total === "div by zero") {
            clearDisplay()
            return addDisplay("You can't divide by zero") // Error si se divide por 0.
        }
    }
    total = Math.round(total*1000)/1000
    addResult(` = ${total}`)
    return total
}