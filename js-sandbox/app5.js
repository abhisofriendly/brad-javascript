const li = document.createElement("li");

// add class
li.className = "collection-item";

// add id
li.id = "new-item";

// add attribut
li.setAttribute("title", "new item");

// create text node and append
li.appendChild(document.createTextNode("hello world"));

// create new link
const link = document.createElement("a");
link.className = "delete-item secondary-content";

// add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
// append link to li
li.appendChild(link);

// append li as a child to ul
document.querySelector("ul.collection").appendChild(li);

console.log(li);
