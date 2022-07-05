function checkPrime (num){
    if(num <= 1){
        return false;
    } else {
        for (let i=2; i < num ; i++ ){
            if(num % i == 0){
                return false;
            } else {
                return true;
            }
        }
    }
}

// console.log(checkPrime(5))

const arr = [7,9,11,13,17,21,23,29]
var newArr = [];
arr.forEach((elem)=>{
    var isPrime = checkPrime(elem);
    if(isPrime === true){
        return newArr.push(elem);
    }
    console.log(newArr)
})
