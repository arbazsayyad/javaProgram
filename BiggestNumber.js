const arr=[1,2,3,4,5,15]
const result=arr.reduce((acc,cur)=>acc<cur ? acc:cur)
console.log(result)