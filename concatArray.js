const { template } = require("@babel/core");

function concatArray(array1, array2) {
  let arr1 = new Array()
  arr1 = array1
  let arr2 = new Array()
  arr2 = array2

  if(arr1==[]&&arr2==[]){
    return arr1
  }else if(array1 ==null && array2 == null){
    return undefined
  }else if(array1 == undefined && array2 == undefined){
    return undefined
  }
   else if((array1 ==null || array1 == undefined) && (array2 != null || array2 != undefined)){
    return arr2
  } else if ((array2 ==null || array2 == undefined) && (array1 != null || array1 != undefined)){
    return arr1
  }
  else{
    
    return arr1.concat(arr2)
  }
  
}
module.exports = concatArray;