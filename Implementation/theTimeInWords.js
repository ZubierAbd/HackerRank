function theTimeInWords(h, m) {
    //h:mm
    //h < 12
    //mm is the minutes 
    let output = ""

    let map = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "quarter",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        21: "twenty one",
        22: "twenty two",
        23: "twenty three",
        24: "twenty four",
        25: "twenty five",
        26: "twenty six",
        27: "twenty seven",
        28: "twenty eight",
        29: "twenty nine",
        30: "half"
    }

    ///5 O clock
    //one minute past five
    //ten minutes past five 
    //quarter past five 
    //29 mins past five 
    //half past five
    //quarter to five
    //

    if (m == 0) {
        output += map[h]
        output += " o' clock"
    } else if (m >= 1 && m <= 30) {
        output += map[m]
        if (m == 1) {
            output += " minute past "
        } else if (m == 30 || m == 15) {
            output += " past "

        }
        else {
            output += " minutes past "

        }
        output += map[h]
    } else if (m > 30) {
        let diff = 60 - m;
        output += map[diff]
        if (diff == 1) {
            output += " minute to "
        } else if (diff == 15) {
            output += " to "
        } else {
            output += " minutes to "
        }
        h += 1
        output += map[h]
    }

    console.log(output)
    return output
}

theTimeInWords(4, 59)