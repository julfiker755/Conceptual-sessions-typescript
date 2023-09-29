/*
Note::
1.union==  |
2.intersetion== &
*/
type Herotypea={
    name:string,
    age:number
}
type Herotypeb= Herotypea &{
    gender:string,
    isMarrid:boolean
}

const HeroA:Herotypea={
    name:'arifull islam',
    age:66,
}
const HeroB:Herotypeb={
    name:'tapus islam',
    age:90,
    gender:'male',
    isMarrid:true,
}

// union 
const Heroab:Herotypea | Herotypeb={
    name:'julfiker islam',
    age:66,
    gender:'male',
    isMarrid:false,
}