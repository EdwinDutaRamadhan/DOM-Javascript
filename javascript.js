const userGajah = document.querySelector('.gajah');
const userOrang = document.querySelector('.orang');
const userSemut = document.querySelector('.semut');
const compImage = document.querySelector('.img-komputer');
const infoPanel = document.querySelector('.info');

userGajah.addEventListener('click', () => {
    const comp = getComputerSelection();
    const user = userGajah.className;
    const result = getRules(user, comp);
    compImage.setAttribute('src', 'img/'+ comp +'.png');
    infoPanel.innerHTML =  result;
});
userOrang.addEventListener('click', () => {
    const comp = getComputerSelection();
    const user = userOrang.className;
    const result = getRules(user, comp);
    compImage.setAttribute('src', 'img/'+ comp +'.png');
    infoPanel.innerHTML =  result;
});
userSemut.addEventListener('click', () => {
    const comp = getComputerSelection();
    const user = userSemut.className;
    const result = getRules(user, comp);
    compImage.setAttribute('src', 'img/'+ comp +'.png');
    infoPanel.innerHTML =  result;
});



function getComputerSelection() {
    var computer = Math.random();
    if (computer < 0.34) {
        return 'gajah';
    } else if (computer >= 0.34 && computer < 0.67) {
        return 'orang';
    } else {
        return 'semut';
    }
}


function getRules(user, comp){
    if (user == comp) return 'SERI!';
    if (user == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (user == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (user == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG!';
    return false;
}