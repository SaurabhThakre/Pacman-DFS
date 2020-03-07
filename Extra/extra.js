    // document.onkeydown = function(event){
    //     // console.log(event);
    //     if (event.keyCode === 37){ // PACMAN MOVE LEFT
    //         for (var i = 1; i <= 13; i++) {
    //             for (var j = 1; j <= 14; j++) {
    //                 var myId = "#id" + i + "id" + j;
    //                     if($(myId).hasClass("pacman") == true){
    //                         // alert("Have Pacman");
    //                         if(arr[i][j-1] == 0){
    //                             $(myId).toggleClass("pacman");
    //                             var myId1 = "#id" + i + "id" + (j - 1);
    //                         }
    //                     }
    //             }
    //         }
    //         $(myId1).addClass("pacman");
    //     }
    //     else if (event.keyCode === 38){ // PACMAN MOVE UP
    //         for (var i = 1; i <= 13; i++) {
    //             for (var j = 1; j <= 14; j++) {
    //                 var myId = "#id" + i + "id" + j;
    //                     if($(myId).hasClass("pacman") == true){
    //                         // alert("Have Pacman");
    //                         if(arr[i-1][j] == 0){
    //                             $(myId).toggleClass("pacman");
    //                             var myId1 = "#id" + (i - 1) + "id" + j;
    //                         }
    //                     }
    //             }
    //         }
    //         $(myId1).addClass("pacman");
    //     }
    //     else if (event.keyCode === 39){ // PACMAN MOVE RIGHT
    //         for (var i = 1; i <= 13; i++) {
    //             for (var j = 1; j <= 14; j++) {
    //                 var myId = "#id" + i + "id" + j;
    //                     if($(myId).hasClass("pacman") == true){
    //                         // alert("Have Pacman");
    //                         if(arr[i][j+1] == 0){
    //                             $(myId).toggleClass("pacman");
    //                             var myId1 = "#id" + i + "id" + (j + 1);
    //                         }
    //                     }
    //             }
    //         }
    //         $(myId1).addClass("pacman");
    //     }
    //     else if (event.keyCode === 40){ // PACMAN MOVE DOWN
    //         for (var i = 1; i <= 13; i++) {
    //             for (var j = 1; j <= 14; j++) {
    //                 var myId = "#id" + i + "id" + j;
    //                     if($(myId).hasClass("pacman") == true){
    //                         // alert("Have Pacman");
    //                         if(arr[i+1][j] == 0){
    //                             $(myId).toggleClass("pacman");
    //                             var myId1 = "#id" + (i + 1) + "id" + j;
    //                         }
    //                     }
    //             }
    //         }
    //         $(myId1).addClass("pacman");
    //     }
    // }
    
    
    // let ival = 2;
    // let jval = 2;

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

    // $('button').click(function(){
        
    // });


    // $( "div" ).click(function() {
    //     var myide = $( this ).attr("id");
    //   });

       // function DFS(root, goal){
    //     let s = new Stack(200);
    //     let explored = new Set();

    //     let str1x = "";
    //     let str1y = "";
    //     let str2x = "";
    //     let str2y = "";

    //     s.push(root);

    //     explored.add(root);

    //     // We'll continue till our Stack gets empty
    //     while (!s.isEmpty()) {
    //         let t = s.pop();

    //         if(flag != 0){
    //             for(let i = 2; i < previous.length - 2; i++){
    //                 if(previous.charAt(i) != 'i' && flagp == 0){
    //                     str1x = str1x + previous.charAt(i);
    //                 }
    //                 else{
    //                     flagp = 1;
    //                     str1y = str1y + previous.charAt(i + 2);
    //                 }
    //             }
    //             for(let i = 2; i < t.length - 2; i++){
    //                 if(t.charAt(i) != 'i' && flagt == 0){
    //                     str2x = str2x + t.charAt(i);
    //                 }
    //                 else{
    //                     flagt = 1;
    //                     str2y = str2y + t.charAt(i + 2);
    //                 }
    //             }

    //             // console.log(str1x);
    //             // console.log(str1y);
    //             // console.log(str2x);
    //             // console.log(str2y);


    //             if(str2x > str1x){
    //                 if(str2x - str1x == 1){
    //                     myFunction(40);
    //                 }
    //                 else{
    //                     pacmanJump(str1x,str1y,str2x,str2y);
    //                 }
    //             }
    //             else if(str2x < str1x){
    //                 if(str1x - str2x == 1){
    //                     myFunction(38);
    //                 }
    //                 else{
    //                     pacmanJump(str1x,str1y,str2x,str2y);
    //                 }
    //             }
    //             else if(str2y > str1y){
    //                 if(str2y - str1y == 1){
    //                     myFunction(39);
    //                 }
    //                 else{
    //                     pacmanJump(str1x,str1y,str2x,str2y);
    //                 }
    //             }
    //             else{
    //                 if(str1y - str2y == 1){
    //                     myFunction(37);
    //                 }
    //                 else{
    //                     pacmanJump(str1x,str1y,str2x,str2y);
    //                 }
    //             }

    //         }


    //         // console.log(t);

    //         g.edges[t]
    //             .filter(n => !explored.has(n))
    //             .forEach(n => {
    //             explored.add(n);
    //             s.push(n);
    //         });

    //         if(t == goal){
    //             break;
    //         }

    //         str1x = "";
    //         str1y = "";
    //         str2x = "";
    //         str2y = "";
    //         flagp = 0;
    //         flagt = 0;
    //         previous = t;
    //         flag = 1;
    //     }


    // }










     // $('button').click(function () {

        
    //     console.log("~~~~~~~~~~", gl);

    //     if(flagreload == 1){
    //         previous = "";
    //         flagp = 0;
    //         flagt = 0;
    //         flag = 0;

    //         var myIds = "#id" + 2 + "id" + 2;
    //         $(myIds).addClass("pacman");
    //         var myIds1 = "#" + gl;
    //         console.log("###########" + myIds1);
    //         $(myIds1).toggleClass("pacman");
    //         for (var i = 1; i <= 13; i++) {
    //             for (var j = 1; j <= 14; j++) {
    //                 var myId = "#id" + i + "id" + j;
    //                 if ($(myId).hasClass("color") == true) {
    //                         $(myId).toggleClass("color");
    //                 }
    //             }
    //         }
    //     }
    //     else{
    //         flagreload = 1;
    //     }

        
    //     ival = $('#ival').val();
    //     jval = $('#jval').val();
    //     console.log(ival);
    //     console.log(jval);
    //     if (arr[ival][jval] == 0) {
    //         myId = "id" + ival + "id" + jval;
    //         $(myId).addClass("goalcolor");
    //         gl = myId;  
            
    //         var rt = "id2id2";

    //         let g = new Graph();
    //         g.addNode(rt);
    //         g.addNode("id2id3");
    //         g.addNode("id2id4");
    //         g.addNode("id2id5");
    //         g.addNode("id2id6");
    //         g.addNode("id2id7");
    //         g.addNode("id2id9");
    //         g.addNode("id2id11");
    //         g.addNode("id2id13");

    //         g.addNode("id3id2");
    //         g.addNode("id3id9");
    //         g.addNode("id3id11");
    //         g.addNode("id3id13");

    //         g.addNode("id4id2");
    //         g.addNode("id4id3");
    //         g.addNode("id4id4");
    //         g.addNode("id4id5");
    //         g.addNode("id4id6");
    //         g.addNode("id4id7");
    //         g.addNode("id4id9");
    //         g.addNode("id4id10");
    //         g.addNode("id4id11");
    //         g.addNode("id4id12");
    //         g.addNode("id4id13");

    //         g.addNode("id5id5");
    //         g.addNode("id5id11");

    //         g.addNode("id6id2");
    //         g.addNode("id6id3");
    //         g.addNode("id6id5");
    //         g.addNode("id6id7");
    //         g.addNode("id6id9");
    //         g.addNode("id6id11");
    //         g.addNode("id6id12");
    //         g.addNode("id6id13");

    //         g.addNode("id7id2");
    //         g.addNode("id7id5");
    //         g.addNode("id7id7");
    //         g.addNode("id7id9");
    //         g.addNode("id7id11");

    //         g.addNode("id8id2");
    //         g.addNode("id8id3");
    //         g.addNode("id8id4");
    //         g.addNode("id8id5");
    //         g.addNode("id8id6");
    //         g.addNode("id8id7");
    //         g.addNode("id8id9");
    //         g.addNode("id8id10");
    //         g.addNode("id8id11");
    //         g.addNode("id8id12");
    //         g.addNode("id8id13");

    //         g.addNode("id9id3");
    //         g.addNode("id9id13");

    //         g.addNode("id10id2");
    //         g.addNode("id10id3");
    //         g.addNode("id10id4");
    //         g.addNode("id10id5");
    //         g.addNode("id10id6");
    //         g.addNode("id10id7");
    //         g.addNode("id10id8");
    //         g.addNode("id10id9");
    //         g.addNode("id10id10");
    //         g.addNode("id10id11");
    //         g.addNode("id10id12");
    //         g.addNode("id10id13");

    //         g.addNode("id11id2");
    //         g.addNode("id11id4");
    //         g.addNode("id11id9");
    //         g.addNode("id11id11");
    //         g.addNode("id11id13");

    //         g.addNode("id12id2");
    //         g.addNode("id12id4");
    //         g.addNode("id12id6");
    //         g.addNode("id12id7");
    //         g.addNode("id12id8");
    //         g.addNode("id12id9");
    //         g.addNode("id12id11");
    //         g.addNode("id12id13");

    //         g.addEdge(rt, "id2id3");
    //         g.addEdge("id2id3", "id2id4");
    //         g.addEdge("id2id4", "id2id5");
    //         g.addEdge("id2id5", "id2id6");
    //         g.addEdge("id2id6", "id2id7");

    //         g.addEdge(rt, "id3id2");
    //         g.addEdge("id3id2", "id4id2");

    //         g.addEdge("id4id2", "id4id3");
    //         g.addEdge("id4id3", "id4id4");
    //         g.addEdge("id4id4", "id4id5");
    //         g.addEdge("id4id5", "id4id6");
    //         g.addEdge("id4id6", "id4id7");

    //         g.addEdge("id4id5", "id5id5");
    //         g.addEdge("id5id5", "id6id5");
    //         g.addEdge("id6id5", "id7id5");
    //         g.addEdge("id7id5", "id8id5");

    //         g.addEdge("id8id5", "id8id6");
    //         g.addEdge("id8id6", "id8id7");
    //         g.addEdge("id8id7", "id7id7");
    //         g.addEdge("id7id7", "id6id7");

    //         g.addEdge("id8id5", "id8id4");
    //         g.addEdge("id8id4", "id8id3");
    //         g.addEdge("id8id3", "id8id2");
    //         g.addEdge("id8id2", "id7id2");
    //         g.addEdge("id7id2", "id6id2");
    //         g.addEdge("id6id2", "id6id3");

    //         g.addEdge("id8id3", "id9id3");
    //         g.addEdge("id9id3", "id10id3");
    //         g.addEdge("id10id3", "id10id2");
    //         g.addEdge("id10id2", "id11id2");
    //         g.addEdge("id11id2", "id12id2");

    //         g.addEdge("id10id3", "id10id4");
    //         g.addEdge("id10id4", "id10id5");
    //         g.addEdge("id10id5", "id10id6");
    //         g.addEdge("id10id6", "id10id7");
    //         g.addEdge("id10id7", "id10id8");
    //         g.addEdge("id10id8", "id10id9");
    //         g.addEdge("id10id9", "id10id10");
    //         g.addEdge("id10id10", "id10id11");
    //         g.addEdge("id10id11", "id10id12");
    //         g.addEdge("id10id12", "id10id13");

    //         g.addEdge("id10id4", "id11id4");
    //         g.addEdge("id11id4", "id12id4");

    //         g.addEdge("id10id9", "id11id9");
    //         g.addEdge("id11id9", "id12id9");
    //         g.addEdge("id12id9", "id12id8");
    //         g.addEdge("id12id8", "id12id7");
    //         g.addEdge("id12id7", "id12id6");

    //         g.addEdge("id10id11", "id11id11");
    //         g.addEdge("id11id11", "id12id11");

    //         g.addEdge("id10id13", "id11id13");
    //         g.addEdge("id11id13", "id12id13");
    //         g.addEdge("id10id13", "id9id13");
    //         g.addEdge("id9id13", "id8id13");

    //         g.addEdge("id8id13", "id8id12");
    //         g.addEdge("id8id12", "id8id11");
    //         g.addEdge("id8id11", "id8id10");
    //         g.addEdge("id8id10", "id8id9");
    //         g.addEdge("id8id9", "id7id9");
    //         g.addEdge("id7id9", "id6id9");

    //         g.addEdge("id8id11", "id7id11");
    //         g.addEdge("id7id11", "id6id11");

    //         g.addEdge("id6id11", "id6id12");
    //         g.addEdge("id6id12", "id6id13");

    //         g.addEdge("id6id11", "id5id11");
    //         g.addEdge("id5id11", "id4id11");

    //         g.addEdge("id4id11", "id4id12");
    //         g.addEdge("id4id12", "id4id13");
    //         g.addEdge("id4id13", "id3id13");
    //         g.addEdge("id3id13", "id2id13");

    //         g.addEdge("id4id11", "id4id10");
    //         g.addEdge("id4id10", "id4id9");
    //         g.addEdge("id4id9", "id3id9");
    //         g.addEdge("id3id9", "id2id9");

    //         g.addEdge("id4id11", "id3id11");
    //         g.addEdge("id3id11", "id2id11");

    //         console.log("***********", gl);

    //         DFS(rt, gl);


    //         function DFS(root, goal) {
    //             let s = new Stack(200);
    //             let explored = new Set();

    //             let str1x = "";
    //             let str1y = "";
    //             let str2x = "";
    //             let str2y = "";

    //             s.push(root);

    //             explored.add(root);

    //             // We'll continue till our Stack gets empty
    //             while (!s.isEmpty()) {
    //                 let t = s.pop();

    //                 if (flag != 0) {
    //                     for (let i = 2; i < previous.length - 2; i++) {
    //                         if (previous.charAt(i) != 'i' && flagp == 0) {
    //                             str1x = str1x + previous.charAt(i);
    //                         }
    //                         else {
    //                             flagp = 1;
    //                             str1y = str1y + previous.charAt(i + 2);
    //                         }
    //                     }
    //                     for (let i = 2; i < t.length - 2; i++) {
    //                         if (t.charAt(i) != 'i' && flagt == 0) {
    //                             str2x = str2x + t.charAt(i);
    //                         }
    //                         else {
    //                             flagt = 1;
    //                             str2y = str2y + t.charAt(i + 2);
    //                         }
    //                     }

    //                     // console.log(str1x);
    //                     // console.log(str1y);
    //                     // console.log(str2x);
    //                     // console.log(str2y);


    //                     // setTimeout(function(){  }, 3000);

    //                     if (str2x > str1x) {
    //                         if (str2x - str1x == 1) {
    //                             myFunction(40);
    //                         }
    //                         else {
    //                             pacmanJump(str1x, str1y, str2x, str2y);
    //                         }
    //                     }
    //                     else if (str2x < str1x) {
    //                         if (str1x - str2x == 1) {
    //                             myFunction(38);
    //                         }
    //                         else {
    //                             pacmanJump(str1x, str1y, str2x, str2y);
    //                         }
    //                     }
    //                     else if (str2y > str1y) {
    //                         if (str2y - str1y == 1) {
    //                             myFunction(39);
    //                         }
    //                         else {
    //                             pacmanJump(str1x, str1y, str2x, str2y);
    //                         }
    //                     }
    //                     else {
    //                         if (str1y - str2y == 1) {
    //                             myFunction(37);
    //                         }
    //                         else {
    //                             pacmanJump(str1x, str1y, str2x, str2y);
    //                         }
    //                     }

    //                 }


    //                 // console.log(t);

    //                 g.edges[t]
    //                     .filter(n => !explored.has(n))
    //                     .forEach(n => {
    //                         explored.add(n);
    //                         s.push(n);
    //                     });

    //                 if (t == goal) {
    //                     s.clear();
    //                     break;
    //                 }

    //                 str1x = "";
    //                 str1y = "";
    //                 str2x = "";
    //                 str2y = "";
    //                 flagp = 0;
    //                 flagt = 0;
    //                 previous = t;
    //                 flag = 1;
    //             }


    //         }

    //     }
    //     else {
    //         alert("There is Wall! Select another position.");
    //     }      


    // });

    // for (var i = 1; i <= 13; i++) {
    //     for (var j = 1; j <= 14; j++) {
    //         var myId = "id" + i + "id" + j;
    //         var myIdr = "id" + i + "id" + (j + 1);
    //         var myIdd = "id" + (i + 1) + "id" + j;
    //         if(arr[i][j] == 0){
    //             if(arr[i][j + 1] == 0){
    //                 g.addEdge(myId, myIdr);
    //             }
    //             if(arr[i + 1][j] == 0){
    //                 g.addEdge(myId, myIdd);
    //             }
    //         }
    //     }
    // }