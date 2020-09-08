function sherLockAndTheValidString(s) {
    const YES = "YES"
    const No = "NO"
    let mapS = {}
    for (let letter of s) {
        mapS[letter] = (mapS[letter] || 0) + 1
    }

    let values = Object.values(mapS)
    let max = Math.max(...values)
    let min = Math.min(...values)
    let maxArray = []
    let minArray = []
    for (let i = 0; i < values.length; i++) {
        if (values[i] == min) {
            minArray.push(i)
        } else if (values[i] == max && max != min) {
            maxArray.push(i)
        }
    }
    //Checks 
    //If there are 2 max values which are different from min values return No
    //If there is one max value which is > 1 different from min value return No
    //If there is one min value which is different from min value delete min value from map 
    //If there is one max value and 

    console.log(mapS)
}


console.log(sherLockAndTheValidString('ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd'))