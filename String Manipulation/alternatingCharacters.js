function alternatingCharacters(s1) {
    //You are given a string of letters A and B. Find the number of deletions required to make sure that the string has alternating characters
    //How we are coming to this problem is we are creating a new string only when the characters alternate.
    let newString = []
    let currentLetter = s1[0]
    newString.push(currentLetter)
    for (let i = 1; i < s1.length; i++) {
        if (s1[i] != currentLetter) {
            newString.push(s1[i])
            currentLetter = s1[i]
        }
    }

    console.log(s1)
    console.log(newString.join())
    return s1.length - newString.length
}


console.log(alternatingCharacters("AAAA"))