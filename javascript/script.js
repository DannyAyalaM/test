const array = [4, 8, 0, 9, 2, 5, 0, 3, 3, 0];
const newEndCero = []
const newWithoutCero = []
const newArrayMenos1 = []

const endcero = () => {
    for (i in array) {
        if (array[i] !== 0) {
            newWithoutCero.push(array[i])
        } else if (array[i] === 0) {
            newEndCero.push(0)
        }
    }
    console.log("Array with ceros to final: ", newWithoutCero.concat(newEndCero))

}

const arrayToInt = () => {
    let value = newWithoutCero.join('')
    const number = parseInt(value)
    console.log("Array to int number: ", number)
}

const add1 = () => {
    const data = [4, 8, 9, 2, 5, 3, 9]
    let numAumentar = (data[data.length - 1] + 1).toString()

    if (numAumentar.indexOf("0") > 0) {
        numAumentar = numAumentar.replaceAll('0', '')
        data.splice(data.length - 1, 1, Number.parseInt(numAumentar))
    }

    console.log(data)

}

const indicePar = () => {
    for (i in newWithoutCero) {
        if (i % 2 == 0) {
            newArrayMenos1.push(newWithoutCero[i] * -1)
        } else {
            newArrayMenos1.push(newWithoutCero[i])
        }
    }
    console.log("Multiplication for -1 in position impar: ", newArrayMenos1)
}

const suma = () => {
    const datos = [-4, 8, -9, 2, -5, 8, -4, 9]
    let suma = 0;
    for (let i = 0; i < datos.length; i++) {
        let sumaAdentro = datos[i];
        for (let index = i + 1; index < datos.length; index++) {
            sumaAdentro = sumaAdentro + datos[index]
            if (sumaAdentro > suma) {
                suma = sumaAdentro
            }
        }
    }
    console.log(suma)
}


// add1()
// suma()
const myArray = [-4, 8, -9, 2, -5, 8, -4, 9]

const newArray = [...myArray]
myArray[0] = 0
console.log(myArray)
console.log(newArray)