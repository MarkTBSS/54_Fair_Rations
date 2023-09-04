function fairRations(B) {
    function oddNumber(a) { return a % 2 !== 0 }
    var fullLength = B.length                                 
    var oddArray = []
    oddArray = B.filter(oddNumber)
    var oddArrayLength = oddArray.length                    
    var evenArrayLength = fullLength - oddArray.length                     

    if (fullLength >= 2 && 
        (fullLength % 2 !== 0 && (oddArrayLength % 2 === 0 ) ||
        fullLength % 2 === 0 && (evenArrayLength % 2 === 0 ))) { 
        
        var counter = 0
        for (var i = 0; i < (fullLength - 1); i++){
            if (B[i] % 2 !== 0) {
                B[i]++
                B[i+1]++
                counter = counter + 2
            }
            console.log(B)
        }
        return counter 
    }
    return 'NO'
}

B = [2, 3, 4, 5, 6]
console.log(fairRations(B))
