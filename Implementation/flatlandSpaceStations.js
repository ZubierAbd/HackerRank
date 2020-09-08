function flatlandSpaceStations(n, c) {
    //n = number of cities in the county 
    //m = contains a number of space seperated integers which are the indices where there are spaceports 
    let m = c.length
    if (n == m) return 0
    let array = new Array(n).fill(0)
    let maxValues = []
    for (let i = 0; i < m; i++) {
        let x = c[i]
        array[c[i]] = 1
    }

    console.log(array)
}

flatlandSpaceStations(5, [0, 4])