$(document).ready(function () {

    for (var i = 1; i <= 13; i++) {
        for (var j = 1; j <= 14; j++) {
            if(i == 1 || i == 13 || j == 1 || j == 14)
            {
                $("#Blocks").append(`<div class="wall"></div>`);
            }
            else if(i == 2){
                if(j==2){
                    $("#Blocks").append(`<div class="pacman"></div>`);
                }
                else if(j==8 || j==10 || j==12){
                    $("#Blocks").append(`<div class="wall"></div>`);
                }
                else{
                    $("#Blocks").append(`<div class="empty"></div>`);
                }
            }
            else if(i == 3){
                if(j==3 || j==4 || j==5 || j==6 || j==7 || j==8 || j==10 || j==12){
                    $("#Blocks").append(`<div class="wall"></div>`);
                }
                else{
                    $("#Blocks").append(`<div class="empty"></div>`);
                }
            }
            else if(i == 4){
                if(j==8){
                    $("#Blocks").append(`<div class="wall"></div>`);
                }
                else{
                    $("#Blocks").append(`<div class="empty"></div>`);
                }
            }
            else if(i == 5){
                if(j==2 || j==3 || j==4 || j==6 || j==7 || j==8 || j==9 || j==10 || j==12 || j==13){
                    $("#Blocks").append(`<div class="wall"></div>`);
                }
                else{
                    $("#Blocks").append(`<div class="empty"></div>`);
                }
            }
            else if(i == 6){
                if(j==4 || j==6 || j==8 || j==10){
                    $("#Blocks").append(`<div class="wall"></div>`);
                }
                else{
                    $("#Blocks").append(`<div class="empty"></div>`);
                }
            }
            else if(i == 7){
                if(j==3 || j==4 || j==6 || j==8 || j==10 || j==12 || j==13){
                    $("#Blocks").append(`<div class="wall"></div>`);
                }
                else{
                    $("#Blocks").append(`<div class="empty"></div>`);
                }
            }
            else if(i == 8){
                if(j==8){
                    $("#Blocks").append(`<div class="wall"></div>`);
                }
                else{
                    $("#Blocks").append(`<div class="empty"></div>`);
                }
            }
            else if(i == 9){
                if(j==2 || j==4 || j==5 || j==6 || j==7 || j==8 || j==9 || j==10 || j==11 || j==12){
                    $("#Blocks").append(`<div class="wall"></div>`);
                }
                else{
                    $("#Blocks").append(`<div class="empty"></div>`);
                }
            }
            else if(i == 10){
                    $("#Blocks").append(`<div class="empty"></div>`);
            }
            else if(i == 11){
                if(j==3 || j==5 || j==6 || j==7 || j==8 || j==10 || j==12){
                    $("#Blocks").append(`<div class="wall"></div>`);
                }
                else{
                    $("#Blocks").append(`<div class="empty"></div>`);
                }
            }
            else if(i == 12){
                if(j==3 || j==5 || j==10 || j==12){
                    $("#Blocks").append(`<div class="wall"></div>`);
                }
                else{
                    $("#Blocks").append(`<div class="empty"></div>`);
                }
            }
            else{
                $("#Blocks").append(`<div class="empty"></div>`);
            }
        }
        $("#Blocks").append(`<div class="linechange"></div>`);
    }
});