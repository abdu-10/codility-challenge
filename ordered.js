function countCharacter(input) {
    const charCounts = {};
    //TRY COUNT OCCURENNCES
    for (let i=0; i < input.length; i++){
     const char = input.charAt(i)
    if (charCounts[char]){
    charCounts[char]++
    } else{
    charCounts[char] = 1
    }
    const result = Object.keys(charCounts).map( char => [char, charCounts[char]])
    return result;
    }
}