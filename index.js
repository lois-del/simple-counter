

let count = 0;
let countEL = document.getElementById('count-el');
function increment() { 
    count = count + 1; 
    countEL.innerText = count
    console.log(count)
}
increment();

function save () {
    console.log(count);
} 
save();




