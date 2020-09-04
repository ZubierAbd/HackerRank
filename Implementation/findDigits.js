function findDigits(n) {
    let count = 0;
    let sN = n + ""
    for (let digit of sN) {
        let digitN = Number(digit);
        if (n % digitN == 0) {
            count++;
        }
    }
    return count
}

console.log(findDigits(1012))