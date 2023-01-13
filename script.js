


// FIND MAX-MIN ELEMENT WITHOUT ANY METHOD


const findMaxMin = () =>{
    
let str = prompt(`EDEDLERI DAXIL ET
EDEDLER ARASINDA "," (VERGUL) ISTIFADE ET`);

// sozun massive cevrilmesi
let arr = str.split(",");
console.log("daxil edilen setir", arr);


// simvol massivinin eded massivine cevrilmesi
for(var i in arr){

    arr[i] = Number(arr[i])
}
console.log("Number tipine cevrilmis massiv",arr);

// NAN elementlerin cixarilmasi
for(var i=0;i<arr.length;i++){

    if(isNaN(arr[i])){
        arr.splice(i,1)
       i--;
    } 
}
console.log("NAN elementler cixarilmis massiv",arr);

// max elementin tapilmasi
let max = arr[0];

for(value of arr){
    if(value > max){
        max = value;
    }
}
console.log("max element: ",max)


// min elementin tapilmasi
let min = arr[0];

for(value of arr){
    if(value <  min){
        min = value;
    }
}
console.log("min element: ",min)
}


// findMaxMin()





// PALINDROME

const checkPalindrome = () => {
    let word = prompt("soz daxil edin");

console.log("daxil edilen soz:  ", word);


// palindromlugun yoxlanmasi

let bull = true;


for(var i=0;i<Math.floor(word.length/2);i++){
    if(word[i] !== word[word.length-1-i]){
        bull *=0;
}}



console.log(bull);

bull ? console.log("soz palindromdur"): console.log("soz palindrom deyil")
}

checkPalindrome();