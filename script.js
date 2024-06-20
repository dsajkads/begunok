const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const sliderThumb = document.querySelector('.slider-thumb');
const sliderTrack = document.querySelector('.slider-track');
const sliderValue = sliderThumb.querySelector('.slider-value');

let isDragging = false;

sliderThumb.addEventListener('mousedown', (e) => {
    isDragging = true;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(e) {
    if (!isDragging) return;

    const rect = slider.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;
    
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    const percentage = (offsetX / rect.width) * 100;
    sliderThumb.style.left = `${percentage}%`;
    sliderTrack.style.width = `${percentage}%`;

    const value = Math.round((percentage / 100) * 100);
    sliderValue.textContent = value;
}

function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}

