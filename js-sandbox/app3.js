// document.getElementByClassName

const items = document.getElementsByClassName("collection-item");

console.log(items);
console.log(items[0]);
items[0].style.color = "red";
items[0].textContent = "hello";

const listItems = document
  .querySelector("ul")
  .getElementsByClassName("collection-item");
console.log(listItems);

// document.getElementsByTagName
let lis = document.getElementsByTagName("li");
lis[1].style.color = "green";
console.log(lis);

lis = Array.from(lis);
lis.reverse();

lis.forEach((li) => {
  console.log(li);
});
console.log(lis);
