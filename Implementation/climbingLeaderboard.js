function climbingLeaderBoard(scores, alice) {
    //Given a set of scores and a number of games which alice has played, return 
    console.log(scores)
    console.log(alice)
    let maxScore = Math.max(...scores)
    let minScore = Math.min(...scores)
    let rank = scores.length
    return rank
}


climbingLeaderBoard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])