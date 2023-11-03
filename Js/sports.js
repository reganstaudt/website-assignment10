let football = document.querySelector('#football');
let soccer = document.querySelector('.soccer');
basketball.style.display = 'none';

football.onclick = () => {
    if (football.getAttribute ('src') === 'images/football.png')
    {
        football.setAttribute('src', 'images/basketball.png');
    }
else {
    football.setAttribute('src','images/football.png'); 
}
}
soccer.onmouseenter = (e) => {
    e.target.classList.remove('rotate-right');
    e.target.classList.add('rotate-left');
  
};

soccer.onmouseleave = (e) => {
    e.target.classList.add('rotate-right');
    e.target.classList.remove('rotate-left');
};



