const cekPalindrome = (kata) => {
    if (typeof kata !== 'string') return console.log('Data Invalid')

    for (let i = 0; i < kata.length / 2; i++) {
        if (kata[i] !== kata[kata.length - 1 - i]) return console.log('is not Palindrome')
    }
    return console.log('Palindrome')
}

cekPalindrome('malam')