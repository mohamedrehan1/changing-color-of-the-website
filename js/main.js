// add default local storage class on body
document.body.classList.add(localStorage.getItem("pagecolor") || "red");
var el = document.querySelectorAll(".colorswitcher li");
var classlist = [];
//loop on elments
for (var i = 0; i < el.length; i++) {
  classlist.push(el[i].getAttribute("data-color"));
  el[i].addEventListener(
    "click",
    function () {
      document.body.classList.remove(...classlist);
      document.body.classList.add(this.getAttribute("data-color"));
      localStorage.setItem("pagecolor", this.getAttribute("data-color"));
    },
    false
  );
}
