function fazzFood(price, voucher, distance, tax) {
    // validasi
    if (typeof price !== "number" || typeof distance !== "number") return "Invalid Data"
    if (typeof voucher !== "string" && voucher !== null) return "Invalid Data"
    if (typeof tax !== "boolean") return "Invalid Data"

    // insialisasi
    let discount = 0
    let distanceCost = 0
    let restDistance = 0
    let subTotal = 0
    let totalTax = 0

    // Pengkondisian discount
    if (voucher) {
        if (voucher.toUpperCase() === 'FAZZFOOD50' && price >= 50000) {
            discount = price * 50 / 100
            if (discount > 50000) {
                discount = 50000
            }
        }
        if (voucher.toUpperCase() === 'DITRAKTIR60' && price >= 25000) {
            discount = price * 60 / 100
            if (discount > 30000) {
                discount = 30000
            }
        }
    }
    // Pengkondisian distance
    if (distance <= 2) {
        distanceCost = 5000
    } {
        restDistance = distance - 2
        distanceCost = 5000 + (restDistance * 3000)
    }
    // Pengkondisian tax
    if (tax) {
        totalTax = price * 5 / 100
    }
    subTotal = price - discount + distanceCost + totalTax

    return `
    Price           : ${price}
    Discount        :-${discount}
    Distance Cost   : ${distanceCost}
    Tax             : ${totalTax}
    -----------------------------
    SubTotal        : ${subTotal}`
}

console.log(fazzFood(75000, 'fazzfood50', 5, true))
