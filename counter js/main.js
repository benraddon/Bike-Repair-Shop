const decreaseButton = document.getElementById('decreaseButton');
const resetButton = document.getElementById('resetButton');
const increaseButton = document.getElementById('increaseButton');
const countLabel = document.getElementById('countLabel');
let count = 0;

increaseButton.onclick = function(){
     count+=5;
     countLabel.textContent = count;
}

decreaseButton.onclick = function(){
     count-=5;
     countLabel.textContent = count;
}

resetButton.onclick = function(){
     count = 0;
     countLabel.textContent = count;
}



