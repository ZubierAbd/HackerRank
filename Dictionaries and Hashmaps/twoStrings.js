function twoStrings(str1, str2) {
    //Complete the function twoStrings in the editor below. It should return a string, 
    //either YES or NO based on whether the strings share a common substring.

    let s1HashMap = {}

    for (let i = 0; i < str1.length; i++) {
        let s1letter = str1[i]
        s1HashMap[s1letter] = true
    }

    for (let j = 0; j < str2.length; j++) {
        if (s1HashMap[str2[j]]) {
            return "YES"
        }
    }
    return "NO"

}

console.log(twoStrings("Hello World", "Hello"))