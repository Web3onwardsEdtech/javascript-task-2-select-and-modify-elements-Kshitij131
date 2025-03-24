
const text = document.getElementById('text');


const button1 = document.getElementById('button1');
const button2=document.getElementById('button2');


button1.addEventListener('click', () => {
    text.innerText = 'Button 1 clicked!';
});

button2.addEventListener('click', () => {
    text.innerText = 'Button 2 clicked!';
});
