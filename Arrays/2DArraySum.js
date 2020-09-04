//Given a 6*6 2D array we define an hourglass to be a subset of values with indices falling in the hourglass pattern of a numpad
//In the 6 by 6 array of values we go over the array and then sum everything, put it in a different array and find a max of it 
//first thing we define a helper function that hourglass sums the elements of the array 

function hourGlassSum(arr) {
    let hourglasses = []

    for (let row = 0; row <= 3; row++) {
        for (let col = 0; col <= 3; col++) {
            let sum = 0;
            sum += arr[row][col];
            sum += arr[row][col + 1];
            sum += arr[row][col + 2];
            sum += arr[row + 1][col + 1];
            sum += arr[row + 2][col];
            sum += arr[row + 2][col + 1];
            sum += arr[row + 2][col + 2];
            hourglasses.push(sum)
        }
    }

    return Math.max(...hourglasses)
}

//https://medium.com/@codingwithmanny/how-to-solve-the-2d-array-hourglass-code-challenge-15389fdf77b5