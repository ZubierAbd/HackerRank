function super_digit(n, k) {
    //Given an integer we define the super digit with the following rules
    //If x has one digit then its super digit is x 
    //otherwise the super digit of x is equal to the super digit of sum of the digits of x 

    //super digit of 9875 is 9+8+7+5 = 29 
    // 2+9 
    //11 
    //2
    //final answer comes to 2
    let value = 0;
    let multiplied = summer(n)
    multiplied = multiplied * k

    function summer(p) {
        p = p.toString();
        let sum = 0
        console.log(p)
        p.split('').forEach((e) => {
            sum += Number(e)
        })
        return sum
    }

    function superDigitHelper(n) {
        let Nstring = n.toString();
        if (Nstring.length == 1) {
            return n;
        } else {
            let x = summer(n)
            return superDigitHelper(x)
        }
    }


    value = superDigitHelper(multiplied)
    return value


}

console.log(super_digit(9875, 1))
