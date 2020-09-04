//given an array of integers find and print the maximum number of integers you can select from the array such that the difference beteween them is 1 or less

//[1,1,1,2,6,6,7]
//this has two subarrays [1,1,1,2] && [6,6,7]


function pickingNumbers(arr) {
    let maxCount = 0;
    arr = arr.sort((a, b) => a - b)
    let count;

    for (let i = 0; i < arr.length; i++) {
        count = 0
        for (let j = i + 1; i < arr.length; j++) {
            if (arr[j] - arr[i] <= 1) {
                count++
                if (count > maxCount) {
                    maxCount = count;
                }
            } else {
                count = 0;
                i = j
                break
            }
        }
    }
    return maxCount

}

console.log(pickingNumbers([1, 1, 1, 1, 2, 6, 6, 7]))