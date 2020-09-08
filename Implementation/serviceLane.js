function serviceLane(n, cases) {
    //cases is an array of arrays with start as arr[0] and arr[1]
    let width = []

    function findMin(arr, start, end) {
        let min = arr[start]
        for (let i = start; i < end; i++) {
            if (arr[i] < min) {
                min = arr[i]
            }
        }
        return min
    }
}