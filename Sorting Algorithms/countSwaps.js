function countSwaps(arr) {
    let count = 0;
    let n = arr.length
    const swap = (a, b) => {
        [arr[a], arr[b]] = [arr[b], arr[a]]
    }

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1);
                count++
            }
        }


    }
    console.log(`Array is sorted in ${count} swaps.`)
    console.log(`First Element: ${arr[0]}`)
    console.log(`Last Element: ${arr[arr.length - 1]}`)
}

let x = [23, 5, 3, 2, 1, 5, 36, 4]

console.log(countSwaps(x))