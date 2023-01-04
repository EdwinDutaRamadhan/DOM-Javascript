const link = document.querySelector('section#a a');
link.removeAttribute('href');

const p2 = document.querySelector('.p2');

p2.addEventListener('mouseenter', () =>{
    p2.style.backgroundColor = 'lightblue';
});
p2.addEventListener('mouseout', () =>{
    p2.style.backgroundColor = 'white';
});

const p4 = document.querySelector('section#b p');

p4.addEventListener('click', () =>{
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const textPBaru = document.createTextNode('Ini Text Li Baru');
    liBaru.appendChild(textPBaru);
    ul.appendChild(liBaru);
});

