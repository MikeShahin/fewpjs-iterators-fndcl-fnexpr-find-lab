function superbowlWin(arr) {
    let game = arr.find(arr => arr.result === "W" )
    return !!game ? game.year : undefined
};
