// concat 

let device = ['Mobile','Laptop','Desktop','Tablet'];
let parts = ['Motherbord','Memory','Battry','Speaker'];

console.log(device.concat(parts));

// copywithin

let ans = device.copyWithin(2,0,4);
console.log(ans);

// constructer

console.log(parts.constructor);

// entries

let ans1 = device.entries();

for(let x of ans1) {
    console.log(x);
}

// evrey

let chocolate = [10,3,20,5,14]

console.log(chocolate.every(myFunction));

function myFunction (choco) {
    return choco > 5 ;
}

// fill

let amount = [50,60,80,90,100,110]

console.log(amount.fill(150,2,4));

// filter

console.log(chocolate.filter(myFunction));

function myFunction (choco) {
    return choco > 5 ;
}

//findIndex()

console.log(chocolate.findIndex(myFunction));

function myFunction (choco) {
    return choco > 15 ;
}

// forEach 

