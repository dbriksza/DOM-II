// Your code goes here
// Your code goes here
function Listener(attr) {
  (this.item = attr.itema),
    (this.event = attr.eventa),
    (this.action = attr.actiona);
}

Listener.prototype.listener = function() {
  this.name = document.querySelector(this.item);
  this.name.addEventListener(this.event, () => {
    this.action();
  });
};

const one = new Listener({
  namea: "a",
  itema: "header",
  eventa: "mouseover",
  actiona: function() {
    console.log(`Work button fired a click event!`);
    this.name.style.backgroundColor = "red";
    this.name.style.transform = "scale(1.1)";
    this.name.style.transition = "all 0.5s";
  }
});
const two = new Listener({
  namea: "b",
  itema: ".btn",
  eventa: "click",
  actiona: function() {
    console.log(`Work button fired a click event!`);
    this.name.style.backgroundColor = "red";
    this.name.style.transform = "scale(1.1)";
    this.name.style.transition = "all 0.5s";
  }
});
const three = new Listener({
  namea: "c",
  itema: ".intro",
  eventa: "keydown",
  actiona: function() {
    console.log(`Work button fired a click event!`);
    this.name.style.backgroundColor = "red";
    this.name.style.transform = "scale(1.1)";
    this.name.style.transition = "all 0.5s";
  }
});
const four = new Listener({
  namea: "d",
  itema: "h1",
  eventa: "wheel",
  actiona: function() {
    console.log(`Work button fired a click event!`);
    this.name.style.backgroundColor = "red";
    this.name.style.transform = "scale(1.1)";
    this.name.style.transition = "all 0.5s";
  }
});
const five = new Listener({
  namea: "e",
  itema: ".btn",
  eventa: "load",
  actiona: function() {
    console.log(`Work button fired a click event!`);
    this.name.style.backgroundColor = "red";
    this.name.style.transform = "scale(1.1)";
    this.name.style.transition = "all 0.5s";
  }
});
const six = new Listener({
  namea: "f",
  itema: "h2",
  eventa: "focus",
  actiona: function() {
    console.log(`Work button fired a click event!`);
    this.name.style.backgroundColor = "red";
    this.name.style.transform = "scale(1.1)";
    this.name.style.transition = "all 0.5s";
  }
});
const seven = new Listener({
  namea: "g",
  itema: "h4",
  eventa: "resize",
  actiona: function() {
    console.log(`Work button fired a click event!`);
    this.name.style.backgroundColor = "red";
    this.name.style.transform = "scale(1.1)";
    this.name.style.transition = "all 0.5s";
  }
});
const eight = new Listener({
  namea: "h",
  itema: "nav",
  eventa: "select",
  actiona: function() {
    console.log(`Work button fired a click event!`);
    this.name.style.backgroundColor = "red";
    this.name.style.transform = "scale(1.1)";
    this.name.style.transition = "all 0.5s";
  }
});
const nine = new Listener({
  namea: "i",
  itema: ".destination",
  eventa: "scroll",
  actiona: function() {
    console.log(`Work button fired a click event!`);
    this.name.style.backgroundColor = "red";
    this.name.style.transform = "scale(1.1)";
    this.name.style.transition = "all 0.5s";
  }
});
const ten = new Listener({
  namea: "j",
  itema: "p",
  eventa: "dbclick",
  actiona: function() {
    console.log(`Work button fired a click event!`);
    this.name.style.backgroundColor = "red";
    this.name.style.transform = "scale(1.1)";
    this.name.style.transition = "all 0.5s";
  }
});

one.listener();
two.listener();
three.listener();
four.listener();
five.listener();
six.listener();
seven.listener();
eight.listener();
nine.listener();
ten.listener();

// const imgScale = document.querySelector(".card-img-top");
// imgScale.addEventListener("mouseover", () => {
//   console.log(`Work button fired a click event!`);
//   imgScale.style.transform = "scale(1.1)";
//   imgScale.style.transition = "all 0.5s";
// });
