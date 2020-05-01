// document.querySelector(".clear-tasks").addEventListener("click", function () {
//   console.log("hello world");
// });

document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  let val;
  val = e;

  // event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;
  val = e.target.classList;

  console.log(val);
}
