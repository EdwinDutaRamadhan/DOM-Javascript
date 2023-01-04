const mainButton = document.querySelector('button[name="mainButton"]');
const randomButton = document.querySelector('button[name="randomButton"]');
mainButton.onclick = () =>{
    document.body.style.background = 'red';
};
randomButton.onclick = () =>{
    const r = Math.round(Math.random()*255);
    const g = Math.round(Math.random()*255);
    const b = Math.round(Math.random()*255);
    document.body.style.background = `rgb(${r},${g},${b})`;
};

const redRange = document.querySelector('input[name="redRange"]');
const greenRange = document.querySelector('input[name="greenRange"]');
const blueRange = document.querySelector('input[name="blueRange"]');

redRange.addEventListener('input', () => {
    const r = redRange.value;
    const g = greenRange.value;
    const b = blueRange.value;
    document.body.style.background = `rgb(${r},${g},${b})`;
});
greenRange.addEventListener('input', () => {
    const r = redRange.value;
    const g = greenRange.value;
    const b = blueRange.value;
    document.body.style.background = `rgb(${r},${g},${b})`;
});
blueRange.addEventListener('input', () => {
    const r = redRange.value;
    const g = greenRange.value;
    const b = blueRange.value;
    document.body.style.background = `rgb(${r},${g},${b})`;
});
