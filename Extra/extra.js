    document.onkeydown = function(event){
        // console.log(event);
        if (event.keyCode === 37){ // PACMAN MOVE LEFT
            for (var i = 1; i <= 13; i++) {
                for (var j = 1; j <= 14; j++) {
                    var myId = "#id" + i + "id" + j;
                        if($(myId).hasClass("pacman") == true){
                            // alert("Have Pacman");
                            if(arr[i][j-1] == 0){
                                $(myId).toggleClass("pacman");
                                var myId1 = "#id" + i + "id" + (j - 1);
                            }
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
                            if(arr[i-1][j] == 0){
                                $(myId).toggleClass("pacman");
                                var myId1 = "#id" + (i - 1) + "id" + j;
                            }
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
                            if(arr[i][j+1] == 0){
                                $(myId).toggleClass("pacman");
                                var myId1 = "#id" + i + "id" + (j + 1);
                            }
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
                            if(arr[i+1][j] == 0){
                                $(myId).toggleClass("pacman");
                                var myId1 = "#id" + (i + 1) + "id" + j;
                            }
                        }
                }
            }
            $(myId1).addClass("pacman");
        }
    }
    
    
    let ival = 2;
    let jval = 2;

    // $("input").change(function(){
    //     ival = $('#ival').val();
    //     jval = $('#jval').val();
    //     console.log(ival);
    //     console.log(jval);
    //     if(arr[ival][jval] == 0){
    //         var myId = "#id" + ival + "id" + jval;
    //         $(myId).addClass("goalcolor");
    //     }
    //     else{
    //         alert("There is Wall! Select another position.");
    //     }
        
    // });

    $('button').click(function(){
        
    });