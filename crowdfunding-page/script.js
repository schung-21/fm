var bookmark = document.getElementById('bookmark');

bookmark.addEventListener('click', function() {
    bookmark.classList.toggle('marked');
});

var modal = document.getElementById('modal');
var backBtn = document.getElementById('back');
var closeBtn = document.getElementById('close');

var contMod = document.getElementById('thank');

var bamboo = document.getElementById('selectBamboo');
var black = document.getElementById('selectBlack');

backBtn.onclick = function() {modal.style.display = 'block';}

closeBtn.onclick = function() {modal.style.display = 'none';}

bamboo.onclick = function() {
    modal.style.display = 'block';
    document.getElementById('bamboo').checked = true;
}

black.onclick = function() {
    modal.style.display = 'block';
    document.getElementById('black').checked = true;
}

const complete = () => {
    contMod.style.display = 'flex';
    modal.style.display = 'none';
};

document.getElementById('gotIt').onclick = function() {
    contMod.style.display = 'none';
}