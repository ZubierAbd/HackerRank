function camelCase(s) {
    //return number of words which are in the thingy 
    let count = 0;
    for (let letter of s) {
        if (letter == letter.toUpperCase()) {
            count += 1
        }
    }
    return count + 1 //Adding one as the first word is always small letter
}


console.log(camelCase('saimaIsANiceGirl'))