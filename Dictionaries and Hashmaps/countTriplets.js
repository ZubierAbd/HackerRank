function countTriplets(arr, n) {
    let count = 0;

    //Given an array, find the number of triplets there are that are in geometric progession of each other. 
    //Loop over the array, starting at position one and ending at position arr.length - 2
    //check to make sure the three elements are geometic progressions of each other 
    //if they are, increment count by 1 if all 3 are fulfilling the condition 
    let dict = {}

    for (let i = 0; i < arr.length; i++) {
        dict[i] = (dict[i] || 0) + 1
    }

    //we loop over and find the number of each of the elements in the array 
    //then we check if that number times n exists in the dictionary. 
    //then we check if that number times n^2 exists in the dictionary 
    //if there are multiple numbers then we increment count for each of n^2 and n values 
    for (let i = 0; i < arr.length; i++) {
        let t2 = arr[i] * n;
        let t3 = arr[i] * n * n;

        if (dict[t2] !== 0 && dict[t3] !== 0) {
            if (dict[t2] == 1) {
                if (dict[t3] == 1) {
                    count++     //1,2,4 where n = 2
                } else {
                    if (dict[t3] == 1) {

                    }
                }
            }
        }
    }


    return count;

}

console.log(countTriplets([1, 2, 4, 8, 16], 2))