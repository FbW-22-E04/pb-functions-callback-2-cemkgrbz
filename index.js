
function squareNumber(n){
    return n*n;
}

function sqaure(arr, cb){
    let newArr = []
    for(let i of arr){
        newArr.push(cb(i))
    } console.log(newArr);
}
const array = [1, 2, 3, 4, 5, 6]
sqaure(array,squareNumber)  // return [1,4,9,16,25]