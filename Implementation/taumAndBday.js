function taumAndBday(b, w, bc, wc, z) {
    let totalCost = 0
    //b = number of necessary black gifts 
    //w = number of white gifts
    //bc = cost of black gift 
    //wc = cost of white gift 
    //z = conversion cost 
    //z + wc = cost to convert 1 white gift to black 
    //z + bc = cost to convert 1 black gift to white 
    if (z + bc < wc) {
        //we convert to white 
        totalCost += w * (z + bc)
    } else {
        totalCost += w * wc
    }

    if (z + wc < bc) {
        totalCost += b * (z + wc)
    } else {
        totalCost += b * bc
    }

    return totalCost

}

function taumBday(b, w, bc, wc, z) {
    const gifts = BigInt(b) + BigInt(w)

    const whiteGifts = gifts * BigInt(wc) + (BigInt(b) * BigInt(z));
    const blackGifts = gifts * BigInt(bc) + (BigInt(w) * BigInt(z));

    let min = BigInt(b) * BigInt(bc) + BigInt(w) * BigInt(wc);

    (blackGifts < min) && (min = blackGifts);
    (whiteGifts < min) && (min = whiteGifts);

    return min
}

console.log(taumAndBday(9, 6, 9, 1, 1))