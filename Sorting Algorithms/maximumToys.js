//Mark has some money and he wants to buy the maximum amount of toys for his son. 
//The prices come in an array of prices. 
//The solution would be to sort the array in ascending order starting from the lowest and then from there, keep subtracting the price


function maximumToys(arr, budget) {
    let count = 0;
    arr = arr.sort((a, b) => a - b)
    while (count < arr.length) {
        budget -= arr[count]
        if (budget > 0) {
            count++
        } else {
            break
        }
    }

    return count
}


let axs = [4, 2, 1, 4, 5, 6]

console.log(maximumToys(axs, 10))