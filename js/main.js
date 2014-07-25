//generate random number based on the specified interval values
function ranInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//initiate random letter assignment
var set = ["B", "I", "N", "G", "O"];
var randomLetter = set[ranInt(0, 4)];

//method for generating random number based on the randomized
//letter assignment
function combi(letter) {
    var val;
    if (letter == "B") {
        val = ranInt(1, 15);
    }
    if (letter == "I") {
        val = ranInt(16, 30);
    }
    if (letter == "N") {
        val = ranInt(31, 45);
    }
    if (letter == "G") {
        val = ranInt(46, 60);
    }
    if (letter == "O") {
        val = ranInt(61, 75);
    }

    return [letter, val];
}

//assign a random BINGO combination to each
//td element with a specified class
$(".num").each(function () {
    //check if the clicked element has a class
    //named B,I,N,G or O
    if($(this).hasClass("B")){
        $(this).html(combi("B")[1]);
    }
    if($(this).hasClass("I")){
        $(this).html(combi("I")[1]);
    }
    if($(this).hasClass("N")){
        $(this).html(combi("N")[1]);
    }
    if($(this).hasClass("G")){
        $(this).html(combi("G")[1]);
    }
    if($(this).hasClass("O")){
        $(this).html(combi("O")[1]);
    }
});

//assign the generated random BINGO combination to the specified
//html element
$("#val").html(combi(randomLetter));

//add a class on the clicked td element of the BINGO card
$("td").click(function () {
    $(this).toggleClass("selected");
});
