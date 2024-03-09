const num = document.getElementById('clicker__counter');
const speedDisplay = document.getElementById('clicker__speed');
const img = document.getElementById("cookie");
let isEnlarge = true;
let clickTimes = []; 

img.onclick = () => {
    const currentTime = new Date().getTime(); 
    if (clickTimes.length > 0) {
        const lastClickTime = clickTimes[clickTimes.length - 1];
        const timeDifference = (currentTime - lastClickTime) / 1000; 
        const clickRate = 1 / timeDifference; 
        speedDisplay.textContent = clickRate.toFixed(2); 
    }
    clickTimes.push(currentTime); 
    if (isEnlarge) {
        img.width += 20;
        img.height += 20;
    } else {
        img.width -= 20;
        img.height -= 20;
    }
    
    isEnlarge = !isEnlarge; 
    
    num.textContent = parseInt(num.textContent) + 1;
};
