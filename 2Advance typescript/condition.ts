type typeA=string
type typeB=typeA extends boolean ? boolean :null


// Nested condition
type typeC=boolean
type typeD=string
type typeE=number

type result=typeC extends boolean  ? boolean : typeD extends string ? string : typeE extends number ? number : 'no result'