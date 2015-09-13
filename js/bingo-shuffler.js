// Generate a BINGO combo to the HTML page

// Initialize the general and combo BINGO sets
var initializedGeneralSet = [];
var initializedComboSet = [];

var btn = document.querySelector('button');
var h1Element = document.querySelector('h1');
var itemCountElement = document.querySelector('span');

var combo = bingo.generateCombo(bingo.generalSet(initializedGeneralSet));

btn.onclick = function () {
  var pop = combo.pop();
  console.log("Poped-out " + pop);
    if (combo.length > 0) {
        h1Element.innerHTML = pop;
    } else {
        h1Element.innerHTML = "EMPTY";
    }
    itemCountElement.innerHTML = combo.length;
};
