const time=16508;
const hours=Math.floor(time/3600)   //1.

// console.log(hours) 

const remainingSecAfterhours=time%3600
console.log(remainingSecAfterhours)

const minutes=Math.floor(remainingSecAfterhours/60)  //2.
// console.log(minutes)

const remainingSecAfterminutes=remainingSecAfterhours%60
console.log(remainingSecAfterminutes)

const second=remainingSecAfterminutes //3.