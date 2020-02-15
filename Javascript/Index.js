$(document).ready(function () {

    for (var i = 1; i <= 13; i++) {
        for (var j = 1; j <= 15; j++) {
            if(i == 1 || i == 13 || j == 1 || j == 15)
            {
                $("#Blocks").append(`<div class="wall"></div>`);
            }
            else if(i == 2 && j == 2){
                $("#Blocks").append(`<div class="pacman"></div>`);
            }
            else{
                $("#Blocks").append(`<div class="empty"></div>`);
            }
        }
        $("#Blocks").append(`<div class="linechange"></div>`);
    }
});