// null ----------------
const mytext=(text:string | null):void=>{
    if(text === null){
        console.log("Sorry,You are no text")
    }else{
        console.log(`My text ${text}`)
    }
    
}
mytext(null)

// unkown  ---------------
const myguesssometing=(myguess:unknown):void=>{
    if(typeof myguess === 'string'){
        console.log("String="+ myguess)
    }else if(typeof myguess === 'number'){
        console.log("Number="+ myguess)
    }else if(typeof myguess === 'boolean'){
        console.log("Boolean="+ myguess)
    }else if(typeof myguess === 'object'){
        console.log(myguess)
    }
}
myguesssometing(true)
