function fairRations(arr) {
    //Rules are you have to give loaves to make sure every person has an even number of loaves 
    //Use the minimum number of loaves to do it 
    //If you give loaf to someone, then the person before and after them also gets a loaf.
    let total = 0;

    for (let i = 0; i < B.length; i++) {
        if (arr[i] % 2 == 0) {
            //dont do anythingg if the value is even 
        } else {
            let prevVal = arr[i - 1]
            let nextVal = arr[i + 1]
            if (prevVal && prevVal % 2 != 0) {
                arr[i - 1] += 1
                arr[i] += 1
                total += 2
            } else if (nextVal && nextVal % 2 != 0) {
                arr[i + 1] += 1
                arr[i] += 1
                total += 2
            }
        }
    }
}