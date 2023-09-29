const thinksometing:unknown=45.95795
const check=thinksometing as number
console.log(check.toFixed(3))

// --
const thinkstringsometiong:unknown='Julfiker Rahaman Jim'
const check2=thinkstringsometiong as string
console.log(check2)


// big pratic for my code
const mylakynumm=(num:string | number):number | string | void=>{
    if(typeof num === 'string'){
        return `I am string ${num}`
    }else if (typeof num === 'number'){
        return `I am a number ${num}`
    }
}
const checkmylkynum=mylakynumm(5) as number
console.log(checkmylkynum)