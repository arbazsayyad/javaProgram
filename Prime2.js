var numArray=[1,2,5,7,25,29]

let result =numArray.filter((item,ind)=>numArray.indexOf(item)/ind!==1 )

// for(var counter=0;  counter<=arr.length; counter++){
//     var notprime=false;
//     for(var i=2;i<=counter;i++){
//         if(counter%i===0 && i!==counter){
//             notprime=true;
//         }
//     }
//     if(notprime===false){
        
//         console.log(counter)

//     }7
// }

// numArray=numArray.filter((number)=>{
//     for(var i=2; i<=Math.sqrt(number);i++){
//         if(number%i===0)return false;
//     }
//     return true;
// });
console.log(result);