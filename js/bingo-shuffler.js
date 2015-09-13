// Generate a BINGO combo to the HTML page

// Initialize the general and combo BINGO sets
var initializedGeneralSet = [];
var initializedComboSet = [];

var btn = document.querySelector('button');
var h1Element = document.querySelector('h1');
var itemCountElement = document.querySelector('span.count');
var itemDataTable = document.querySelector('tbody');

var combo = bingo.generateCombo(bingo.generalSet(initializedGeneralSet));
var countCounter = 1;
btn.onclick = function () {
  var pop = combo.pop();
  console.log("Poped-out " + pop);
    if (combo.length > 0) {
        h1Element.innerHTML = pop;
        var tr = document.createElement('tr');
        var tdIndex = document.createElement('td');
        var tdCombo = document.createElement('td');
        tdIndex.className = 'mdl-data-table__cell--non-numeric';
        tdIndex.appendChild(document.createTextNode(countCounter));
        tdCombo.className = 'mdl-data-table__cell--non-numeric';
        tdCombo.appendChild(document.createTextNode(pop));
        tr.appendChild(tdIndex);
        tr.appendChild(tdCombo);
        itemDataTable.appendChild(tr);
        countCounter++;
    } else {
        h1Element.innerHTML = "EMPTY";
    }
    itemCountElement.setAttribute("data-badge",combo.length);
};
