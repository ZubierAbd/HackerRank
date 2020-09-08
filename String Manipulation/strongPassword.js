function strongPassword(s) {


    let count = 0;
    let n = s.length;

    let regexLower = /[a-z]/gm
    let regexUpper = /[A-Z]/gm
    let numberReg = /[0-9]/gm
    let specialReg = /[!@#$%^&*()-+]/gm

    if (!regexLower.test(s)) {
        count++
    }
    if (!regexUpper.test(s)) {
        console.log('failing upper test')
        count++
    }
    if (!numberReg.test(s)) {
        console.log('failing number test')
        count++
    }
    if (!specialReg.test(s)) {
        console.log('failing special char test')
        count++
    }
    return Math.max(6 - n, count)

}

console.log(strongPassword('AUzs-nV'))