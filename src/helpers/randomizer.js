export default function randomizer(size){
    let charArr = new Set()
    while(charArr.size < size){
        charArr.add(getRandomNum())
    }
    return charArr
}

function getRandomNum(){
    return Math.trunc(Math.random() * 826 + 1)
}