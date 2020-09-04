const sockMerchant = (array) => {
    //given a pair of integers, each number representing a color, how many socks can this be sold
    //[1,2,1,1,1,2,4,2,3]
    //so we need to find the even number of socks 
    //we can use frequency counter 

    let fc = {}
    let pairs = 0

    for (let value of array) {
        fc[value] = (fc[value] || 0) + 1
    }

    //now we have the number of pairs 
    console.log(fc)

    for (let value in fc) {
        console.log(value);
        let operand = Math.floor(fc[value] / 2)
        pairs += operand
    }

    //pairs = 4 + 0 + 1 + 0 + 0
    console.log(pairs)
    return pairs

}


sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])