//alert to something happening
/*function doSomething(){
    console.log('Something Happened!');
}*/

//tell what is happening
/*function doSomething(event){
  //  console.log(event.type);
  
  //tell where it is happening
  console.log(event.target);
}


addEventListener('click', doSomething);
*/

//Single click
const clickParagraph = document.getElementById('click');

clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );

//double click
const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);

function highlight(event){
    event.target.classList.toggle('highlight');
}

//mouse over event
const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);

//mouse moved
mouseParagraph.addEventListener('mousemove', () =>  console.log('You Moved!') );

//keydown
//addEventListener('keydown', highlight);
//addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`));
//checks if Ctrl and c held down together
addEventListener('keydown', (event) => {
if (event.key === 'c' && event.ctrlKey) {
        console.log('Action canceled!');
    }
});
//checks if shift held while mouse clicked
addEventListener('click', (event) => {
    if (event.shiftKey) {
        console.log('A Shifty Click!');
    }
});
//keyup
addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));
//keypress
addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));

//one time event
const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);

function remove(event) {
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click',remove);
}

//stop a default action
const brokenLink = document.getElementById('broken');

brokenLink.addEventListener('click',(event) => {
    event.preventDefault();
    console.log('Broken Link!');
});

//bubbling

ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');
/*
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul') );

liElement.addEventListener('click', (event) =>
console.log('Clicked on li') );*/

//capturing
/*
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),true);

liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),true);
*/
/*
//both
// capturing
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),true);

liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),true);

//both
// bubbling
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),false );

liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),false );
*/

//stop bubbling default behavior
liElement.addEventListener('click', (event) => {
console.log('clicked on li');
event.stopPropagation(); }, false);

//add to the children of the ulElement
ulElement.addEventListener('click',highlight);