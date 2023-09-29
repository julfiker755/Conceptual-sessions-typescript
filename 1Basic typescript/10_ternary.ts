const isHeroAvailable:boolean=false;

// if(isHeroAvailable){
//  console.log('so book now')
// }else{
//     console.log('you can not book now')
// }
const checkavailable=isHeroAvailable ? 'Book now':'Not Book now'
console.log(checkavailable)



// Nullish coalescing operator  ??
// null and undifined jono use hoy..
const inputsometing:unknown="Log in";
const checkinputsometing= inputsometing ?? 'You are so---'
console.log(checkinputsometing)