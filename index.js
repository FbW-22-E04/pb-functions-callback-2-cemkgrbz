//1

function squareNumber(n){
    return n*n;
}

console.log(squareNumber(5));

//2

function square(arr, cb){
    let newArr = []
    for(let i of arr){
        newArr.push(cb(i))
    } console.log(newArr);
}
const array = [1, 2, 3, 4, 5, 6]
square(array,squareNumber)  // return [1,4,9,16,25]