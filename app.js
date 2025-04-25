document.addEventListener('DOMContentLoaded', () => {
    const counterButton = document.getElementById('counter-button');
    const counterDisplay = document.getElementById('counter');
    
    let count = 0;
    
    counterButton.addEventListener('click', () => {
        count++;
        counterDisplay.textContent = count;
    });
});