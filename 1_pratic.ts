/*Question::->Convert the following JavaScript array into a TypeScript tuple
 const userInfo = [101, "Ema", "John", true,  , "2023"];*/

 const userInfo:[number,string,string,boolean,undefined,string]= [101, "Ema", "John", true,  , "2023"]


//  Genaric tupple
type userInfotupple<x,y,z,a>=[x,y,z,a]
const uinfo:userInfotupple<number,string,string,boolean>= [101, "Ema", "John", true]