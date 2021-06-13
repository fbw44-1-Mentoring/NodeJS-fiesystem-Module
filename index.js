/* console.log(global) */
/* console.log(process) */
console.log(process.argv[2])

/* let args= process.argv.slice(2)
console.log(args) */

let [operator, a,b] = process.argv.slice(2)

function sum (a,b){
    console.log(Number(a)+ Number(b))
}
/* 
if(process.argv[2]==="sum"){
    sum(process.argv[3] , process.argv[4])
} */

if(operator==="sum"){
    sum(a , b)
}

