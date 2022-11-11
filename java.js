var contacts = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
];
var number = 1;
var maxPost = 10;
var classname;

function createButton(number) {
  var x = document.createElement("BUTTON");
  var t = document.createTextNode(number);
  x.appendChild(t);
  x.id = number;
  x.className = "Button";

  document.body.appendChild(x);
}

function TotalButtons() {
  if (contacts.length > maxPost) {
    for (let i = 0; i < contacts.length; i = i + maxPost) {
      createButton(number);
      number++;
    }
  } else {
    createButton(number);
    number++;
  }
  classname = document.getElementsByClassName("Button");
}

function RemoveButtons() {
  for (let a = 1; a < number; a++) {
    document.getElementById(a).remove();
  }
}

TotalButtons();

Pagination();
defaultPrint();
//var classname = document.getElementsByClassName("Button");

function Pagination() {
  document.getElementById("span").innerText = "";
  for (let i = 0; i < classname.length; i++) {
    classname[i].addEventListener("click", function (e) {
      let id = parseInt(e.target.id);

      let maxRange = maxPost * id;
      let minRange = maxRange - maxPost;

      showData(minRange, maxRange);
    });
  }
}

function showData(minRange, maxRange) {
  for (let i = minRange; i < maxRange; i++) {
    if (i == minRange) {
      document.getElementById("span").innerText = "";
    }
    if (contacts[i] !== undefined) {
      document.getElementById("span").innerText =
        document.getElementById("span").innerText + " " + contacts[i];
    } else {
      break;
    }
  }
}

document.getElementById("getData").addEventListener("click", function () {
  maxPost = parseInt(document.getElementById("data").value);

  if (maxPost > 0) {
    RemoveButtons();

    number = 1;

    TotalButtons();

    Pagination();

    defaultPrint();
  } else {
    alert("Max Post must be greater than 0");
  }
});

function defaultPrint() {
  for (let i = 0; i < maxPost; i++) {
    document.getElementById("span").innerText =
      document.getElementById("span").innerText + " " + contacts[i];
  }
}
