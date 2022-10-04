const cekPalindrome = (kata) => {
    if (typeof kata !== 'string') return 'Data Invalid'

    for (let i = 0; i <= kata.length / 2; i++) {
        if (kata[i] !== kata[kata.length - 1 - i]) return 'is not Palindrome'
    }
    return ('Palindrome')
}

console.log(cekPalindrome('malam'))
console.log(cekPalindrome('siang'))
