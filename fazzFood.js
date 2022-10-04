function fazzFood(harga, voucher, jarak, pajak) {
    if (typeof harga !== "number" || typeof jarak !== "number") return console.log("Data yang ada input salah")
    if (!(voucher === null || typeof voucher === "string")) return console.log("Data yang ada input salah")
    if (typeof pajak !== "boolean") return console.log("Data yang ada input salah")

    // let voucherLower = voucher.toLowerCase()
    let potongan = 0;
    let biayaAntar = 0
    let jarakSisa = 0
    let subTotal = 0
    let totalPajak = 0

    if (voucher.toUpperCase() === 'FAZZFOOD50') {
        potongan = harga * 50 / 100
        if (potongan > 50000) {
            potongan = 50000
        }
    }
    if (voucher.toUpperCase() === 'DITRAKTIR60') {
        potongan = harga * 60 / 100
        if (potongan > 30000) {
            potongan = 30000
        }
    }

    if (jarak <= 2) {
        biayaAntar = 5000
    } {
        jarakSisa = jarak - 2
        biayaAntar = 5000 + (jarakSisa * 3000)
    }

    if (pajak) {
        totalPajak = harga * 5 / 100
        subTotal = harga + totalPajak - potongan + biayaAntar
    } else {
        subTotal = harga - potongan + biayaAntar
    }
    console.log(`Harga: ${harga}`)
    console.log(`Potongan: ${potongan}`)
    console.log(`Biaya Antar: ${biayaAntar}`)
    console.log(`Pajak: ${totalPajak}`)
    console.log(`SubTotal: ${subTotal}`)
}

fazzFood(75000, 'fazzfood50', 5, true)