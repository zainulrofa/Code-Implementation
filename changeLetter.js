const changeLetter = (word) => {
    if (typeof word !== "string") return 'invalid data'

    let print = ""
    for (let i = 0; i <= word.length - 1; i++) {
        if (word[i] === 'a') {
            print += "o"
            continue
        }
        print += word[i]
    }
    return (print)
}

console.log(changeLetter('jakarta'))
