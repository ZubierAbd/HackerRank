function makingAnagrams(s1, s2) {
    //Function that takes two strings as input 
    //we need to find the minimum number of deletions we need to do to ensure that the two strings are identical 
    //Easiest way to do this is to count the number of letters in each string 
    //an anagram would have the same number of letters regardless of the order 
    //So we count the letters in each string and check the value is higher in one map or not. 
    //if it is higher, we subtract the difference until they are equal and 
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    ///Lower casing everything just in case so dont have to worry about different cases 
    let deletions = 0;
    let letterMapA = {}
    let letterMapB = {}

    for (let char of s1) {
        letterMapA[char] = (letterMapA[char] || 0) + 1
    }

    for (let char of s2) {
        letterMapB[char] = (letterMapB[char] || 0) + 1
    }

    let letterRemovedA = []
    let letterRemovedB = []

    //At this point we have both the values of the number of letters in each map 
    for (let letter in letterMapA) {
        if (!letterMapB[letter]) { ///letter of A is in B
            deletions += letterMapA[letter] //Delete the same number of letters which are in A which are not in B 
            letterRemovedA.push(letter)
            delete letterMapA[letter]
        }
    }

    for (let letter in letterMapB) {
        if (!letterMapA[letter]) {
            deletions += letterMapB[letter]
            letterRemovedB.push(letter)
            delete letterMapB[letter]
        }
    }


    for (let letter in letterMapA) {
        let difference = Math.abs(letterMapA[letter] - letterMapB[letter])
        deletions += difference
    }

    return deletions
}

let stringA = "fcrxzwscanmligyxyvym"
let stringB = "jxwtrhvujlmrpdoqbisbwhmgpmeoke"


console.log(makingAnagrams(stringA, stringB))
