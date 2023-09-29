//spread oprator 
// step:1 
const heroarr2=["Rabbi","Shuvo","Rana"]
const heroarr1=["Julfiker","Naism","tapus"]
heroarr1.push(...heroarr2)
console.log(heroarr1)


// step 2:    anathor niyom
const name1=["Julfiker1","Julfiker2","Julfiker3"]
const name2=[...name1,"Shuvo1","Shuvo2","Shuvo3"]
console.log(name2)

// Array Destructuring---
const [hero1,hero2]=name1
console.log(hero1)

// rest parameter.............
function myscore(...score:number[]):number{
   let sum:number=0
   score.map(n=> sum+=n)
   return  sum
}
console.log(myscore(1,3,8,8,44,99,22))

// --
function mystring(...strname:string[]):void{
     strname.map(name=>console.log(name))
}

mystring('Julfiker Rahaman Jim',"Ariful zaman shuvo","Tapus vai")