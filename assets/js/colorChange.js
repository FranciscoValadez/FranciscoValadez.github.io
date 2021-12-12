//The following JS code changes the color of almost all the text inthe webpage
//based on the random number generated and what switch case that number pertains to
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function colorSelection(number){
    switch (number) {
        case 1:
            return 'blue';
            break;
        case 2:
            return 'red';
            break;
        case 3:
            return 'yellow';
            break;
        case 4:
            return 'orange';
            break;
        case 5:
            return 'green';
            break;
        case 6:
            return 'purple';
            break;
        default:
            return 'white'
            break;
    }
}
function change_css(){
    let randomColor = colorSelection(getRandomInt(6));
    //text
    document.querySelector('section').style.color = randomColor;
    document.querySelector('#about').style.color = randomColor;
    document.querySelector('#portfolio').style.color = randomColor;
    document.querySelector('#contact').style.color = randomColor;											

    //navbar
    document.querySelector('#title').style.color = randomColor;
    document.querySelector('#top-link').style.color = randomColor;
    document.querySelector('#about-link').style.color = randomColor;
    document.querySelector('#contact-link').style.color = randomColor;
    document.querySelector('#portfolio-link').style.color = randomColor;

    randomColor = colorSelection(getRandomInt(6));
    
    //background
    document.getElementsByClassName('two')[0].style.backgroundColor = randomColor;
    document.getElementsByClassName('three')[0].style.backgroundColor = randomColor;
    randomColor = colorSelection(getRandomInt(6));
    document.getElementsByClassName('four')[0].style.backgroundColor = randomColor;

}