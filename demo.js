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

// var listItems=document.getElementsByClassName('list-group-item');
// console.log(listItems);

// listItems[2].style.backgroundColor='green';
// for(var i=0; i<listItems.length;i++){
//     listItems[i].style.backgroundColor='gray';

// }

// var listbytag=document.getElementsByTagName('li');
// for(var i=0;i<listbytag.length;i++){
//     listbytag[i].style.fontWeight='bold';

// }

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// //console.log(secondItem);
// secondItem.style.backgroundColor='green';

// var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// //console.log(thirdItem);
// thirdItem.style.visibility='hidden';

// var list=document.querySelectorAll('.list-group-item');
// //console.log(list);

// list[1].style.color='green';

// var listOdd=document.querySelectorAll('.list-group-item:nth-child(Odd)');

// for(var i=0;i<listOdd.length;i++){
//     console.log(listOdd[i]);

//     listOdd[i].style.backgroundColor='green';
// }

// parentElement

var list = document.querySelector('#items');
console.log(list);

console.log(list.parentElement);
console.log(list.parentNode);

// lastelementchild
console.log(list.lastElementChild);
// lastchild
console.log(list.lastChild);
// createchild

// firstelementchild
console.log(list.firstElementChild);

// firstchild
console.log(list.firstChild);

// nextsibling
console.log(list.nextSibling);

// nextelementsibling
console.log(list.nextElementSibling);

// previoussibling
console.log(list.previousSibling);

// previouselementsibling
console.log(list.previousElementSibling);
list.previousElementSibling.style.color='red';
// createelement
var divEle=document.createElement('div');
var divText=document.createTextNode('HEllo');
//divEle.id='hello1';
divEle.appendChild(divText);
var container=document.querySelector('#main');
console.log(container);

var itemlist=document.querySelector('.title');
console.log(itemlist);
var item1=document.querySelector('#items');
//add before list
container.insertBefore(divEle,itemlist);
container.insertBefore(divEle,item1);
//add before item 1



// setAttribute
// createtesxtnode
// appendchild