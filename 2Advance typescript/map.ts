const myluckynumbers=[4,6,8,2,5,9]
const checkmyluckynumbers=myluckynumbers.map(n=>n.toString())
console.log(checkmyluckynumbers)

type listOfFriend = {
    friend1: string;
    friend2: string;
    friend3: string;
    friend4: number;
}


type listOfFriendReadOnly = {
    readonly [key in keyof listOfFriend] : listOfFriend[key] 
    // friend1 : string
    // friend2 : string
    // friend3 : string
    // friend4 : number
}

const friendList:listOfFriend = {
    friend1: "abcc",
    friend2: 'def',
    friend3: 'pqr',
    friend4: 23
}

//friendList.friend1 = 'fahim';
console.log(friendList);