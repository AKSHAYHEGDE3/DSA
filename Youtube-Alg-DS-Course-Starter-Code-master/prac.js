var palindromePairs = function(words) {
    let arr = []
    for(let i=0;i<words.length;i++){
       for(let j=0;j<words.length;j++){
         let word = words[i] + words[j];
         if(word === word.split('').reverse().join('')){
            arr.push([i,j])
         }
         
       }
    }
};

// console.log(palindromePairs(["bat","tab","cat"]))
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
console.log(fruits)