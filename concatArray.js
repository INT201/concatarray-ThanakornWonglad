const { template } = require("@babel/core");

function concatArray(array1, array2) {
  let arr1 = new Array()
  arr1 = array1
  let arr2 = new Array()
  arr2 = array2
  //code here
  if (arr1 == [] && arr2 !== []) {
    return arr2;
  } else if (arr1 !== [] && arr2 == []) {
    return arr1;
  }else if(arr1 != [] && arr2 != []){
    return arr1.concat(arr2)
  }else{
    return 'empty array'
  }
}
module.exports = concatArray;