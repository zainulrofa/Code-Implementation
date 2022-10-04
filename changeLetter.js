const changeLetter = (word) => {
    if (typeof word !== "string") return console.log('invalid data')

    for (let i = 0; i <= word.length - 1; i++) {
        if (word[i] === 'a') {
            return console.log(word['a'] = 'o')
        }
    }

    // console.log(newWord = word.replace(/a/g, 'o'))
}

changeLetter('jakarta')