// The bees
var bElements = document.querySelectorAll(".B");
var bSet = bingo.bSet();
for (var i = 0; i < bElements.length; i++) {
  // Get an item from the bingo class
  bElements[i].innerHTML = bSet[i];
  // Set the button's onclick event and toggle its class
  bElements[i].onclick = function() {
    this.classList.toggle("im-selected");
  };
};

// The iees
var iElements = document.querySelectorAll(".I");
var iSet = bingo.iSet();
for (var i = 0; i < iElements.length; i++) {
  // Get an item from the bingo class
  iElements[i].innerHTML = iSet[i];
  // Set the button's onclick event and toggle its class
  iElements[i].onclick = function() {
    this.classList.toggle("im-selected");
  };
};

// The nees
var nElements = document.querySelectorAll(".N");
var nSet = bingo.nSet();
for (var i = 0; i < nElements.length; i++) {
  // Get an item from the bingo class
  nElements[i].innerHTML = nSet[i];
  // Set the button's onclick event and toggle its class
  nElements[i].onclick = function() {
    this.classList.toggle("im-selected");
  };
};

// The gees
var gElements = document.querySelectorAll(".G");
var gSet = bingo.gSet();
for (var i = 0; i < gElements.length; i++) {
  // Get an item from the bingo class
  gElements[i].innerHTML = gSet[i];
  // Set the button's onclick event and toggle its class
  gElements[i].onclick = function() {
    this.classList.toggle("im-selected");
  };
};

// The oees
var oElements = document.querySelectorAll(".O");
var oSet = bingo.oSet();
for (var i = 0; i < oElements.length; i++) {
  // Get an item from the bingo class
  oElements[i].innerHTML = oSet[i];
  // Set the button's onclick event and toggle its class
  oElements[i].onclick = function() {
    this.classList.toggle("im-selected");
  };
};
