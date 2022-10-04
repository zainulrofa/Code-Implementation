const divideAndShort = (number) => {
    if (typeof number !== "number") return console.log("Data Invalid")

//     let arr = number.toString().split('')
//     let arrNum = []
//     for (let i = 0; i < arr.length; i++) {
//         arrNum.push(parseInt(arr[i]))
//     }
//     arrNum.sort((a, b) => {
//         return a - b
//     })
//     return console.log(arrNum)
    
     return console.log(
        number.toString().split('0').map((el) => el.split('').sort().join('')).join('')
    )
}

divideAndShort(5956560159466056)
