let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item");

val = list.childNodes;
val = list.childNodes[1].nodeName;
val = list.childNodes[1].nodeType;

// get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// get sibiling
val = listItem.nextSibling;
val = listItem.nextSibling.nextSibling;
val = listItem.previousSibling;

console.log(val);

// 1 - element
// 2 - attribute
// 3 - text node
// 8 - comment
// 9 - document itself
// 10 - doctype
