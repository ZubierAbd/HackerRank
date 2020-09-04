function newYearsChaos(array) {
    //[1,2,3,4,5]
    //One person can bribe at most two others  
    //[2,1,3,4,5]
    //Find min number of bribes that are necessary to do it 
    //Find if it is impossible or not 

    //To see if it is impossible, find out if any of the values are at most two distances away from index 
    const TOO_CHAOTIC = "Too Chaotic";
    let total = 0;

    for (let current_pos = 0; current_pos < array.length; i++) {
        const original_pos = array[current_pos] - 1
        const diff = original_pos - current_pos

        if (diff > 2) return TOO_CHAOTIC

        if (diff <= 0) {
            for (let i = Math.max(0, original_pos - 1); i < current_pos; i++) {
                const start_pos_of_fwd_person = array[i] - 1
                if (start_pos_of_fwd_person > original_pos) {
                    total++
                }
            }
        }
        return total
    }

    ///https://www.youtube.com/watch?v=vfcALtCXAwQ

}


console.log(newYearsChaos([1, 2, 5, 4, 3]))