function ConvertString(...arr){
   var newArr = arr;
   newArr[0] = 3;
   return arr
}
console.log(ConvertString(1,2));