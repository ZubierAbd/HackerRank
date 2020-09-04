function ransomNotes(magazine, note) {
    //Takes two array of strings and sees if the second one is a subset of the first one 
    const YES = "YES"
    const NO = "NO"
    //m = array of strings case sensitive 
    //s = array of strings case sensitive 

    let dictM = {}
    let dictS = {}

    for (let word of magazine) {
        dictM[word] = (dictM[word] || 0) + 1
    }

    for (let word of note) {
        dictS[word] = (dictS[word] || 0) + 1
    }

    for (let word in dictS) {
        if (!dictM[word]) {
            return NO
        }
    }
    return YES
}


let m = "I have a lovely bunch of coconuts"
m = m.split(' ')

let s = "I have a"
s = s.split(' ')

console.log(m, s)

console.log(ransomNotes(m, s))