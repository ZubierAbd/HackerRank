function timeConversion(s) {
    //Given a time in the form of HH:MM:SSAM or HH:MM:SSPM 
    //for am or PM we dont care about MM or SS only the first two chars and last two chars 
    //Strings are immutablke 
    let hours = s[0] + s[1]
    let AMPM = s[s.length - 2] + s[s.length - 1];
    let number = Number(hours)
    console.log(AMPM)
    if (AMPM != "AM") {
        number = number + 12
        if (number == 24) {
            number = "12"
        }
    } else {
        if (number == 12) {
            number = "00"
        } else if (number < 10) {
            number = "0" + number
        }
    }
    number = number.toString()
    s = s.substring(2, s.length - 2)
    let newS = number + s
    return newS

}


console.log(timeConversion("12:45:54PM"))