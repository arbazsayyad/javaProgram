const arr=[1,2,3,4,5,6,7,8,9,10]

// const arr1=arr.map((item)=>{
//     if(item%2!==0){
//         return item*2.2
//     }else{return item}
// }
// )
// console.log(arr1)
const result=arr.map((item)=> (item%2!==0 )*2*item || item )
 
console.log(result);