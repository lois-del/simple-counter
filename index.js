let count = 0;
let countEL = document.getElementById('count-el');
let saveEL = document.getElementById('save-el');
function increment() { 
    count += 1; 
    countEL.innerText = count
    console.log(count)
}


function save() {
    let countStr = count + ' - ';
    saveEL.textContent += countStr;
    count = 0;
    countEL.textContent = count;
}


