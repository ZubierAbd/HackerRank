function modifiedKaprekarNumber(p, q) {
    //Given the range between p and q, find the number of modified K numbers between these two points 

    //A K number is special. If you square the number and then split it into two integers and add those integers together and see if you have original number or not

    let numberArray = []

    for (let i = p; i <= q; i++) {
        if (isKNumber(i)) {
            numberArray.push(i)
        }
    }

    console.log(numberArray)


    if (numberArray.length == 0) {
        console.log("INVALID RANGE.")
    } else {
        let newS = numberArray.join(' ')
        console.log(newS)
    }



    function isKNumber(n) {
        let squaredNum = n * n;
        let squaredNumStr = squaredNum + ""
        let left = squaredNumStr.substr(0, Math.floor(squaredNumStr.length / 2))
        let right = squaredNumStr.substr(Math.floor(squaredNumStr.length / 2))
        left = Number(left)
        right = Number(right)
        if (left + right == n) return true
        else {
            return false
        }
    }
}

console.log(modifiedKaprekarNumber(400, 700))