function fraudlentActivity(expenditure, d) {
    //expenditure is the list of the expenditures which might or might not be fraudulent 
    //D is the length of the window we need to take into consideration 
    //
    function getMedianx2(countArr, days) {
        let sum = 0
        for (let i = 0; i < countArr.length; i++) {
            sum += countArr[i]
            if (sum * 2 === days) return (i * 2 + 1)
            if (sum * 2 > days) return (i * 2)
        }
    }

    const countArr = new Array(201).fill(0)
    let notifications = 0;

    for (let i = 0; i < d; i++) {
        countArr[expenditure[i]]++
    }

    console.log(countArr)

    for (let i = d; i < expenditure.length; i++) {
        const medianx2 = getMedianx2(countArr, d)

        if (expenditure[i] >= medianx2)
            notifications++
        if (i === expenditure.length - 1) break
        countArr[expenditure[i - d]]--
        countArr[expenditure[i]]++
    }

    console.log(notifications)
    return notifications

}

fraudlentActivity([10, 20, 30, 40, 50, 60], 3)
fraudlentActivity([2, 3, 4, 2, 3, 6, 8, 4, 5], 5)


//No idea what the fuck is going on here 
//https://medium.com/weekly-webtips/sorting-code-challenge-breakdown-19229b32be02