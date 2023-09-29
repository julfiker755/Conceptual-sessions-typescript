const heroObj:{
    heroname:string,
    readonly age:number,
    professtion:string,
    isMarried?:boolean
}={
    heroname:'Sakip',
    age:44,
    professtion:'actor',
    isMarried:false,
}

// object Destructuring---
const {heroname,age}=heroObj

console.log(age)
