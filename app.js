console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        continue;
    } else {
        console.log(i);
    }
    
}


console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    } else {
        if (i % 3 == 0) {
            console.log("FIZZ");
        } else if (i % 5 == 0) {
            console.log("BUZZ");
        } else {
            console.log(i);

        }
    }
    
}



// Ex-3 
let i = 1;
while (i <= 100) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}


let num = 1;
do{
    if (num % 3 == 0 && num % 5 == 0) {
        console.log("FIZZBUZZ");
    } else if (num % 3 == 0) {
        console.log("FIZZ");
    } else if (num % 5 == 0) {
        console.log("BUZZ");
    }
    else {
        console.log(num);
    }
    num++;
}
while(num <= 100);

 // Ex 4
  
 let numb = Math.round(Math.random() * 500);
 let n = Math.round(Math.random() * (500 - 100) + 100);

 let foundVal = false;
 for (let i = 1; i <= n; i++) {
    if(i == numb) {
        console.log("Found Value");
        foundVal = true;
        break;
    }
    else {
        foundVal = false;
    }
 }
 if(foundVal == false) {
    console.log("Did not find value");
 }
    


 // Ex-5
 let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
 let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
 let end = Math.round(Math.random() * (1000 - 1) + 1);
 let start = Math.round(Math.random() * (10 - 1) + 1);

 console.log("Fizz Divisor: ");
 console.log(fizzDivisor);
 console.log("Bizz Divisor: ");
 console.log(buzzDivisor);
 console.log("Starting Number: ");
 console.log(start);
 console.log("Ending number: ");
 console.log(end);
 console.log("Solution: ");
 

 for (let i = start; i <= end; i++) {

    if (i % fizzDivisor == 0 && i % buzzDivisor === 0) {
        console.log(`${i} FIZZBUZZ`);
    } else if (i % fizzDivisor == 0) {
        console.log(`${i} FIZZ`);
    }else if (i % buzzDivisor == 0) {
        console.log(`${i} BUZZ`);
    }
    else {
        console.log(`${i}`);
    }

    }

    

 
 

 