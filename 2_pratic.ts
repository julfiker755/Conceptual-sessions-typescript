/*2.Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8], the function should return a new array with the elements 2 and 4 because they are present in both arrays.*/



type comparetype=(array1:number[],array2:number[])=>number[]


const compare:comparetype=(array1,array2)=>{
    const comparearray=array1.filter(ele=>array2.includes(ele))
    return comparearray
}
const array1:number[]=[0,1,2,3,4,5]
const array2:number[]=[9,3,8,1,0,5]

const output:number[]=compare(array1,array2)
console.log(output)





//Optional******** for example other 3 types array

type comparetype1=(array3:number[],array4:number[],array5:number[])=>number[]

const compare1:comparetype1=(array3,array4,array5)=>{
    const comparearray=array3.filter(ele=>array4.includes(ele) && array5.includes(ele))
    return comparearray
}
const array11:number[]=[0,1,2,3,4,5]
const array12:number[]=[9,3,8,1,0,5]
const array13:number[]=[10,3,8,1,0,8]

const output1:number[]=compare1(array11,array12,array13)
console.log(output1)