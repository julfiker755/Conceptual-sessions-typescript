// gemeric array tupple------------------1
/*
const mynumber:Array<number>=[55,33,2,9,0,3,5]
const mystr:Array<string>=['Julifker','shuvo','nasim','tapus','sonali']
const myboolen:Array<boolean>=[true,false,true,false]
*/

type myArray<T>=Array<T>

const mynumber:myArray<number>=[55,33,2,9,0,3,5]
const mystr:myArray<string>=['Julifker','shuvo','nasim','tapus','sonali']
const myboolen:myArray<boolean>=[true,false,true,false]

const myobj:myArray<{name:string,age:number}>=[{
    name:'julfiker',
    age:55
},{
    name:'tapus',
    age:99
}]




// tuple in Generic---------------------2
type mytuple<X,Y,Z>=[X,Y,Z]

const a:mytuple<string,boolean,number>=['julfiker',true,55]

type myobjtupple={name:string,age:number}
const b:mytuple<boolean,string,myobjtupple>=[true,'boss',{name:'Mr.X',age:55}]





// generic function--------------------3
// const add=<T>(num1:T,num2:T):T=>{
//     return (num1 as any)+ (num2 as any)
//   }
//   console.log(add<string>("4","5"))
//   console.log(add<number>(5,8))

const printinfo=<X,Y>(parm1:X,parm2:Y):X | Y | void=>{
    console.log(`parm1=${parm1}, parm2=${parm2}`)
}
printinfo<string,number>('julfiker',80)


// generic function 1 parameter pass
const printinfo1=<T>(parm:T):T[]=>{
  return [parm]
}
console.log(printinfo1('nasim'))


// generic function 2 parameter pass
const printinfo3=<X,Y>(parm1:X,parm2:Y):[X,Y]=>{
    return [parm1,parm2]
}
console.log(printinfo3('shuvo','julfiker'))



// generic interface---------------------4
interface Ime<T,U>{
    name:string,
    age:T,
    marks:number,
    isresult:U,
}

const myinformation:Ime<number,string>={
    name:'julfiker',
    age:55,
    marks:66,
    isresult:'pass'
}




// keyof ---------------------5
type Movetype={
    name:string,
    duration:number,
    categori:string

}

const datamove:Movetype={
    name:'Piriyo toma',
    duration:400,
    categori:'action'
}

type mymovekeyoftype=keyof Movetype // name | duration | categori

const mytextt:mymovekeyoftype='duration'
console.log(datamove[mytextt])




