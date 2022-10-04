const changeLetter = (word) => {
    if (typeof word !== "string") return console.log('invalid data')

    let print = ""
    for (let i = 0; i <= word.length; i++) {
        if (word[i] === 'a') {
            print = print + "o"
        } else {
            print = print + word[i]
        }
    }
    return console.log(print)
    // console.log(newWord = word.replace(/a/g, 'o'))
}

changeLetter('jakarta')
