

function countInversions(arr) {
    let inversions = 0;
    function merge(arr1, arr2) {
        let newArr = []
        let i = 0;
        let j = 0;
        while (i < arr1.length && j < arr2.length) {
            if (arr2[j] > arr1[i]) {
                newArr.push(arr1[i])
                inversions++
                i++
            } else {
                newArr.push(arr2[j])
                inversions++
                j++
            }
        }
        while (i < arr1.length) {
            newArr.push(arr1[i])
            i++
        }
        while (j < arr2.length) {
            newArr.push(arr2[j])
            j++
        }
        return newArr
    }

    function mergeSort(arr) {
        if (arr.length <= 1) return arr
        let middle = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0, middle))
        let right = mergeSort(arr.slice(middle))
        return merge(left, right)
    }

    mergeSort(arr);
    return inversions - 1
}


let array = [2, 4, 1]

console.log(countInversions(array))