// console.log(document);
// console.log(document.title);
// document.title="hello";


// var header= document.getElementById('header-title');
// console.log(header);
// header.style.border='solid 3px #000';

// var addItems=document.querySelector('h2');
// console.log(addItems);
// addItems.style.backgroundColor='green';
// addItems.style.fontWeight='bold';

var listItems=document.getElementsByClassName('list-group-item');
console.log(listItems);

listItems[2].style.backgroundColor='green';
for(var i=0; i<listItems.length;i++){
    listItems[i].style.fontWeight='bold';
}