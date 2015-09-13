// 2015 mjsolidarios
// questions, comments, suggestions?
// email your teacher @ mjsolidarios@wvsu.edu.ph

'use strict';

var bingo = {
  // Generate an array based on a given range
  range: function(min, max) {
    var array = [];
    for (var i = min; i <= max; i++) {
      array.push(i);
    };
    return array;
  },
  // Shuffle an array using Fisher-Yates Algorithm
  shuffle: function(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    };
    return array;
  },
  // Add a letter to each BINGO number item in a BINGO set
  concatItems: function(set, letter) {
    var temp = temp || [];
    set.forEach(function(e) {
      temp.push(letter + " " + e);
    });
    console.log("New BINGO set created: " + temp);
    return temp;
  },
  // Shuffle and return the poped-out item of the COMBoSet
  // and avoid BINGO combo call duplication
  generateCombo: function(c) {
    var set = this.shuffle(this.comboSet(c));
    return set;
  },
  // Initialize the BINGO number
  // set using shuffle and range
  bSet: function() {
    return this.shuffle(this.range(1, 15));
  },
  iSet: function() {
    return this.shuffle(this.range(16, 30));
  },
  nSet: function() {
    return this.shuffle(this.range(31, 45));
  },
  gSet: function() {
    return this.shuffle(this.range(46, 60));
  },
  oSet: function() {
    return this.shuffle(this.range(61, 75));
  },

  // Combine the BINGO letters and numbers
  bConcat: function() {
    return this.concatItems(this.bSet(), "B")
  },
  iConcat: function() {
    return this.concatItems(this.iSet(), "I")
  },
  nConcat: function() {
    return this.concatItems(this.nSet(), "N")
  },
  gConcat: function() {
    return this.concatItems(this.gSet(), "G")
  },
  oConcat: function() {
    return this.concatItems(this.oSet(), "O")
  },
  generalSet: function(g) {
    g.push(this.bConcat(), this.iConcat(), this.nConcat(), this.gConcat(), this.oConcat());
    console.log("BINGO sets concatenated")
    return g;
  },
  comboSet: function(g) {
    var set = set || [];
    g.forEach(function(e) {
      e.forEach(function(f) {
        set.push(f);
      });
    });
    return set;
  }
};
