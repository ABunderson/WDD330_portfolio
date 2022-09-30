//textbook
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

//14.1 Build a Table
const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  // Your code here
  function buildTable(data) {
    //create table
    let table = document.createElement("table");
    
    //create the label row of the table only need it once
    //Object.keys returns an array of the keys or property names
    let fields = Object.keys(data[0]);
    let headRow = document.createElement("tr");
    
    fields.forEach(function(field) {
      let headCell = document.createElement("th");
      headCell.appendChild(document.createTextNode(field));
      headRow.appendChild(headCell);
    });
    //attach label row to table
    table.appendChild(headRow); 
    
    //create the rest of the table
    //seperates the objects
    data.forEach(function(object) {
      let row = document.createElement("tr");
      //seperates the properties
      fields.forEach(function(field) {
        //create the html element
        let cell = document.createElement("td");
        //create the data
        let text = document.createTextNode(object[field]);
        cell.appendChild(text);
        //object[field] field is the property name and this returns the value of the property
        if (typeof object[field] == "number"){
          cell.style.textAlign = "right";
        }
        
        //add new cell info to the row
        row.appendChild(cell);
      });
      //add new row to table
      table.appendChild(row);
    });
    
    return table;    
  }
  
    //add everything to the html
    const placement = document.getElementById("mountains");
    placement.appendChild(buildTable(MOUNTAINS));

//14.2 Elements by tag name
function byTagName(node, tagName) {
    // Your code here.
    //first delete all the code to get getElementsByTagName to work alone
    //run it without implementing node or tagName let count = document.body.getElementsByTagName("h1");
    //run it without implementing tagName  let count = node.getElementsByTagName("h1");
    //run with both
    let count = node.getElementsByTagName(tagName);
    return count
  }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2


//15.1 balloon
 // Your code here
 let b = document.querySelector("p");
 //check to make sure it was selected
 //b.style.display = "none";
 
 //increase size check
 //b.style.fontSize = "200%";
 
 //event for increase failed
 /*addEventListener('keydown', (event)  => {
   if (event.key === 'ArrowUp') {
     //did not work to increase size b.style.fontSize += "10%";
     let size = b.style.fontSize;
     size += .1;
     b.style.fontSize = size;
     
   };
 });*/
 
 //retry while looking at the answer and understanding it line by line
 let size;
 function setSize(newSize) {
   size = newSize;
   b.style.fontSize = size + "px";
 }
 //create a default size so we know where we are at check to see if works by blowing up size
 setSize(20);
 
 function handleArrow(event) {
   //upkey
   if (event.key == "ArrowUp") {
     //set explode point explode and remove event listener
     if (size > 70) {
       b.textContent = "💥";
       document.body.removeEventListener("keydown", handleArrow);
     } else {
       setSize(size * 1.1);
       event.preventDefault();
     }
     //downkey
   } else if (event.key == "ArrowDown") {
     setSize(size * .9);
     event.preventDefault();
   }
 }
 
 document.body.addEventListener("keydown", handleArrow);

 
 //15.2 mouse trail
 // Your code here.
 const numDots = 20;
 let dots = [];
 
 //create the trail items
 for (let i = 0; i < numDots; i++) {
   let item = document.createElement("div");
   item.className = "trail";
   document.body.appendChild(item);
   dots.push(item);
 }
 
 let currentDot = 0;

 
 //move the items
   window.addEventListener("mousemove", event => {
   let dot = dots[currentDot];
   dot.style.left = (event.pageX - 3) + "px";
   dot.style.top = (event.pageY - 3) + "px";
   currentDot = (currentDot + 1) % dots.length;
 });