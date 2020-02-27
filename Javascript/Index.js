$(document).ready(function () {

    function Create2DArray(rows) {
        var arr = [];
      
        for (var i=0;i<rows;i++) {
           arr[i] = [];
        }
      
        return arr;
      }

      var arr = Create2DArray(14);

    for (var i = 1; i <= 13; i++) {
        for (var j = 1; j <= 14; j++) {
            if (i == 1 || i == 13 || j == 1 || j == 14) {
                $("#Blocks").append(`<div class="wall" id="id${i}id${j}"></div>`);
                arr[i][j] = 1;
            }
            else if (i == 2) {
                if (j == 2) {
                    $("#Blocks").append(`<div  class="empty" id="id${i}id${j}"></div>`);
                    arr[i][j] = 0;
                }
                else if (j == 8 || j == 10 || j == 12) {
                    $("#Blocks").append(`<div class="wall" id="id${i}id${j}"></div>`);
                    arr[i][j] = 1;
                }
                else {
                    $("#Blocks").append(`<div class="empty" id="id${i}id${j}"></div>`);
                    arr[i][j] = 0;
                }
            }
            else if (i == 3) {
                if (j == 3 || j == 4 || j == 5 || j == 6 || j == 7 || j == 8 || j == 10 || j == 12) {
                    $("#Blocks").append(`<div class="wall" id="id${i}id${j}"></div>`);
                    arr[i][j] = 1;
                }
                else {
                    $("#Blocks").append(`<div class="empty" id="id${i}id${j}"></div>`);
                    arr[i][j] = 0;
                }
            }
            else if (i == 4) {
                if (j == 8) {
                    $("#Blocks").append(`<div class="wall" id="id${i}id${j}"></div>`);
                    arr[i][j] = 1;
                }
                else {
                    $("#Blocks").append(`<div class="empty" id="id${i}id${j}"></div>`);
                    arr[i][j] = 0;
                }
            }
            else if (i == 5) {
                if (j == 2 || j == 3 || j == 4 || j == 6 || j == 7 || j == 8 || j == 9 || j == 10 || j == 12 || j == 13) {
                    $("#Blocks").append(`<div class="wall" id="id${i}id${j}"></div>`);
                    arr[i][j] = 1;
                }
                else {
                    $("#Blocks").append(`<div class="empty" id="id${i}id${j}"></div>`);
                    arr[i][j] = 0;
                }
            }
            else if (i == 6) {
                if (j == 4 || j == 6 || j == 8 || j == 10) {
                    $("#Blocks").append(`<div class="wall"id="id${i}id${j}"></div>`);
                    arr[i][j] = 1;
                }
                else {
                    $("#Blocks").append(`<div class="empty" id="id${i}id${j}"></div>`);
                    arr[i][j] = 0;
                }
            }
            else if (i == 7) {
                if (j == 3 || j == 4 || j == 6 || j == 8 || j == 10 || j == 12 || j == 13) {
                    $("#Blocks").append(`<div class="wall" id="id${i}id${j}"></div>`);
                    arr[i][j] = 1;
                }
                else {
                    $("#Blocks").append(`<div class="empty" id="id${i}id${j}"></div>`);
                    arr[i][j] = 0;
                }
            }
            else if (i == 8) {
                if (j == 8) {
                    $("#Blocks").append(`<div class="wall" id="id${i}id${j}"></div>`);
                    arr[i][j] = 1;
                }
                else {
                    $("#Blocks").append(`<div class="empty" id="id${i}id${j}"></div>`);
                    arr[i][j] = 0;
                }
            }
            else if (i == 9) {
                if (j == 2 || j == 4 || j == 5 || j == 6 || j == 7 || j == 8 || j == 9 || j == 10 || j == 11 || j == 12) {
                    $("#Blocks").append(`<div class="wall" id="id${i}id${j}"></div>`);
                    arr[i][j] = 1;
                }
                else {
                    $("#Blocks").append(`<div class="empty" id="id${i}id${j}"></div>`);
                    arr[i][j] = 0;
                }
            }
            else if (i == 10) {
                $("#Blocks").append(`<div class="empty" id="id${i}id${j}"></div>`);
                arr[i][j] = 0;
            }
            else if (i == 11) {
                if (j == 3 || j == 5 || j == 6 || j == 7 || j == 8 || j == 10 || j == 12) {
                    $("#Blocks").append(`<div class="wall" id="id${i}id${j}"></div>`);
                    arr[i][j] = 1;
                }
                else {
                    $("#Blocks").append(`<div class="empty" id="id${i}id${j}"></div>`);
                    arr[i][j] = 0;
                }
            }
            else if (i == 12) {
                if (j == 3 || j == 5 || j == 10 || j == 12) {
                    $("#Blocks").append(`<div class="wall" id="id${i}id${j}"></div>`);
                    arr[i][j] = 1;
                }
                else {
                    $("#Blocks").append(`<div class="empty" id="id${i}id${j}"></div>`);
                    arr[i][j] = 0;
                }
            }
        }
        $("#Blocks").append(`<div class="linechange"></div>`);
    }

    var myIds = "#id" + 2 + "id" + 2;
    $(myIds).addClass("pacman");



    console.log(arr);

    // for (var i = 1; i <= 13; i++) {
    //     for (var j = 1; j <= 14; j++) {
    //         var myId = "#id" + i + "id" + j;
    //         $(myId).click(function () {
    //             if($("div").hasClass("pacman") == true){
    //                 // $("pacman").addClass("empty");
    //                 $(this).toggleClass("empty");
    //                 alert("Have pacman");
    //             }
    //             $(this).toggleClass("pacman");
    //         });
    //     }
    // }

    // for (var i = 1; i <= 13; i++) {
    //     for (var j = 1; j <= 14; j++) {
    //         var myId = "#id" + i + "id" + j;
    //             if($(myId).hasClass("pacman") == true){
    //                 // alert("Have Pacman");
    //                 var myId1 = "#id" + i + "id" + (j + 1);
    //                 $(myId1).addClass("pacman");
    //             }
    //     }
    // }

    document.onkeydown = function(event){
        // console.log(event);
        if (event.keyCode === 37){ // PACMAN MOVE LEFT
            for (var i = 1; i <= 13; i++) {
                for (var j = 1; j <= 14; j++) {
                    var myId = "#id" + i + "id" + j;
                        if($(myId).hasClass("pacman") == true){
                            // alert("Have Pacman");
                            $(myId).toggleClass("pacman");
                            var myId1 = "#id" + i + "id" + (j - 1);
                        }
                }
            }
            $(myId1).addClass("pacman");
        }
        else if (event.keyCode === 38){ // PACMAN MOVE UP
            for (var i = 1; i <= 13; i++) {
                for (var j = 1; j <= 14; j++) {
                    var myId = "#id" + i + "id" + j;
                        if($(myId).hasClass("pacman") == true){
                            // alert("Have Pacman");
                            $(myId).toggleClass("pacman");
                            var myId1 = "#id" + (i - 1) + "id" + j;
                        }
                }
            }
            $(myId1).addClass("pacman");
        }
        else if (event.keyCode === 39){ // PACMAN MOVE RIGHT
            for (var i = 1; i <= 13; i++) {
                for (var j = 1; j <= 14; j++) {
                    var myId = "#id" + i + "id" + j;
                        if($(myId).hasClass("pacman") == true){
                            // alert("Have Pacman");
                            $(myId).toggleClass("pacman");
                            var myId1 = "#id" + i + "id" + (j + 1);
                        }
                }
            }
            $(myId1).addClass("pacman");
        }
        else if (event.keyCode === 40){ // PACMAN MOVE DOWN
            for (var i = 1; i <= 13; i++) {
                for (var j = 1; j <= 14; j++) {
                    var myId = "#id" + i + "id" + j;
                        if($(myId).hasClass("pacman") == true){
                            // alert("Have Pacman");
                            $(myId).toggleClass("pacman");
                            var myId1 = "#id" + (i + 1) + "id" + j;
                        }
                }
            }
            $(myId1).addClass("pacman");
        }
    }
    

});


