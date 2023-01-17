const newrock = document.querySelector('.rockd');
const newpaper = document.querySelector('.paperd');
const newscissors = document.querySelector('.scissorsd');
const newedit2 = document.querySelector('.edit2');
const newimg2 = document.querySelector('.edit2 .k');
const newedit = document.querySelector('.edit');
const newimg = document.querySelector('.edit .a');
const newh1 = document.querySelector('.game h1');
const newp = document.querySelectorAll('.rps p');
const newres = document.querySelector('.result')
const ranarray = ['Rock', 'Paper', 'Scissors'];
let computer = '';
let user = '';


newrock.addEventListener('click', function (r) {
    user = r.target.alt;
    random();
         newscissors.style.display = 'none'
        newpaper.style.display = 'none'
        newrock.style.display = 'none'
        newedit2.setAttribute('class', 'rockd')
        newimg2.setAttribute('src', 'Rock.svg')
        newimg2.setAttribute('class', 'r1')
    if (user === computer) {
        newh1.innerText = 'YOU TIED'
        newedit.setAttribute('class', computer)
        newimg.setAttribute('src', 'Rock.svg')
        newimg.setAttribute('class', 'r1')
        newedit.style.transform = 'scaleX(-1)';

    } else if (computer == 'Paper') {
        newh1.innerText = 'YOU LOST'
        newedit.setAttribute('class', computer)
        newimg.setAttribute('src', 'paper.svg')
        newimg.setAttribute('class', 'p1')
        newedit.style.transform = 'scaleX(-1)';

    } else {
        newh1.innerText = 'YOU WON'
        newedit.setAttribute('class', computer)
        newimg.setAttribute('src', 'scissors.svg')
        newimg.setAttribute('class', 's1')
        newedit.style.transform = 'scaleX(-1)';

    }

});

newpaper.addEventListener('click', function ro(p) {
    user = p.target.alt;
    random();
    newscissors.style.display = 'none'
        newpaper.style.display = 'none'
        newrock.style.display = 'none'
        newedit2.setAttribute('class', 'paperd')
        newimg2.setAttribute('src', 'paper.svg')
        newimg2.setAttribute('class', 'p1')
    if (user === computer) {
        newh1.innerText = 'YOU TIED'
        newedit.setAttribute('class', computer)
        newimg.setAttribute('src', 'paper.svg')
        newimg.setAttribute('class', 'p1')
        newedit.style.transform = 'scaleX(-1)';
    } else if (computer == 'Scissors') {
        newh1.innerText = 'YOU LOST'
        newedit.setAttribute('class', computer)
        newimg.setAttribute('src', 'scissors.svg')
        newimg.setAttribute('class', 's1')
        newedit.style.transform = 'scaleX(-1)';
    } else {
        newh1.innerText = 'YOU WON'
        newedit.setAttribute('class', 'rockd')
        newimg.setAttribute('src', 'Rock.svg')
        newimg.setAttribute('class', 'r1')
        newedit.style.transform = 'scaleX(-1)';

    }
});

newscissors.addEventListener('click', function (s) {
    user = s.target.alt;
    random();
    newscissors.style.display = 'none'
        newpaper.style.display = 'none'
        newrock.style.display = 'none'
        newedit2.setAttribute('class', 'scissorsd')
        newimg2.setAttribute('src', 'scissors.svg')
        newimg2.setAttribute('class', 's1')
    if (user === computer) {
        newh1.innerText = 'YOU TIED'
        newedit.setAttribute('class', computer)
        newimg.setAttribute('src', 'scissors.svg')
        newimg.setAttribute('class', 's1')
        newedit.style.transform = 'scaleX(-1)';


    } else if (computer == 'Rock') {
        newh1.innerText = 'YOU LOST'
        newedit.setAttribute('class', 'rockd')
        newimg.setAttribute('src', 'Rock.svg')
        newimg.setAttribute('class', 'r1')
        newedit.style.transform = 'scaleX(-1)';


    } else {
        newh1.innerText = 'YOU WON'
        newedit.setAttribute('class', 'paperd')
        newimg.setAttribute('src', 'paper.svg')
        newimg.setAttribute('class', 'p1')
        newedit.style.transform = 'scaleX(-1)';

    }
});


function random() {
    computer = Math.floor(Math.random() * 3);
    computer = ranarray[computer];

}