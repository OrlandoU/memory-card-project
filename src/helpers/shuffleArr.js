export default function shuffleArr(arr) {
    
    let shuffledArr = [...arr]
    let arrCopy = [...arr]
    
    while(shuffledArr.join('') === arr.join('')){
        shuffledArr = arrCopy.sort(function () {
            return Math.random() - 0.5;
        })
    }
    return shuffledArr
}