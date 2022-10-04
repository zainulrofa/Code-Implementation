const divideAndShort = (number) => {
    // validasi
    if (typeof number !== "number") return "Data Invalid"

    return parseInt(number.toString().split('0').map((el) => el.split('').sort().join('')).join(''))

}

console.log(divideAndShort(5956560159466056))
console.log(divideAndShort('5956560159466056'))
