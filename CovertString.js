function ConvertString(...arr){
   var newArr = arr;
   newArr[0] = 2;
   return arr
}
console.log(ConvertString(1,2));