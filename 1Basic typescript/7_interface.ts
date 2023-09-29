interface herointerface{
    name:string;
    age:number;
}
const hero6:herointerface={
    name:'boss',
    age:66,
}
const hero7:herointerface={
    name:'boss',
    age:66,
}
// advance...
interface hero9 extends herointerface{
    gender:string
}

const hero10:hero9={
    name:'shuvo islam',
    age:88,
    gender:'female'
}