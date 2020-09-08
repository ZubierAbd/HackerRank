function chocolateFeast(n, c, m) {
    //n = amount of starting money 
    //c = cost of a chocolate bar 
    //m = number of wrappers necessary to get another chocolate
    let count = 0;
    let value = Math.floor(n / c);
    while (true) {
        let focus = value + (count % m)
        count += value

        if (focus < m) break

        value = Math.floor(focus / m)
    }

    return count

}

console.log()