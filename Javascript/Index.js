$(document).ready(function () {

    function Create2DArray(rows) {
        var arr = [];

        for (var i = 0; i < rows; i++) {
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
                if (j == 8 || j == 10 || j == 12) {
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

    function myFunction(event) {

        // console.log(event);
        if (event == 37) { // PACMAN MOVE LEFT
            for (var i = 1; i <= 13; i++) {
                for (var j = 1; j <= 14; j++) {
                    var myId = "#id" + i + "id" + j;
                    if ($(myId).hasClass("pacman") == true) {
                        // alert("Have Pacman");
                        if (arr[i][j - 1] == 0) {
                            $(myId).toggleClass("pacman");
                            $(myId).addClass("color");
                            var myId1 = "#id" + i + "id" + (j - 1);
                        }
                    }
                }
            }
            $(myId1).addClass("pacman");
        }
        else if (event == 38) { // PACMAN MOVE UP
            for (var i = 1; i <= 13; i++) {
                for (var j = 1; j <= 14; j++) {
                    var myId = "#id" + i + "id" + j;
                    if ($(myId).hasClass("pacman") == true) {
                        // alert("Have Pacman");
                        if (arr[i - 1][j] == 0) {
                            $(myId).toggleClass("pacman");
                            $(myId).addClass("color");
                            var myId1 = "#id" + (i - 1) + "id" + j;
                        }
                    }
                }
            }
            $(myId1).addClass("pacman");
        }
        else if (event == 39) { // PACMAN MOVE RIGHT
            for (var i = 1; i <= 13; i++) {
                for (var j = 1; j <= 14; j++) {
                    var myId = "#id" + i + "id" + j;
                    if ($(myId).hasClass("pacman") == true) {
                        // alert("Have Pacman");
                        if (arr[i][j + 1] == 0) {
                            $(myId).toggleClass("pacman");
                            $(myId).addClass("color");
                            var myId1 = "#id" + i + "id" + (j + 1);
                        }
                    }
                }
            }
            $(myId1).addClass("pacman");
        }
        else if (event == 40) { // PACMAN MOVE DOWN
            for (var i = 1; i <= 13; i++) {
                for (var j = 1; j <= 14; j++) {
                    var myId = "#id" + i + "id" + j;
                    if ($(myId).hasClass("pacman") == true) {
                        // alert("Have Pacman");
                        if (arr[i + 1][j] == 0) {
                            $(myId).toggleClass("pacman");
                            $(myId).addClass("color");
                            var myId1 = "#id" + (i + 1) + "id" + j;
                        }
                    }
                }
            }
            $(myId1).addClass("pacman");
        }
    }

    function pacmanJump(x1, y1, x2, y2) {
        var myId1 = "#id" + x1 + "id" + y1;
        var myId2 = "#id" + x2 + "id" + y2;
        $(myId1).toggleClass("pacman");
        $(myId1).addClass("color");
        $(myId2).addClass("pacman");
    }



    var previous = "";
    var flag = 0;
    var flagp = 0;
    var flagt = 0;

    var move = [];
    var jump = [];
    var morv = [];
    var stackseq = [];
    var stackval = [];
    var visited = [];
    
    var gl = "id4id5";

    let flagreload = 0;

    $(".empty").click(function () {
        var myIde = $(this).attr("id");

        $( "div" ).remove( ".explored" );
        $( "div" ).remove( ".stack" );
        $( "br" ).remove();

        // set goal to mouse clicked box
        var goalId = "#" + myIde;
        for (var i = 1; i <= 13; i++) {
            for (var j = 1; j <= 14; j++) {
                var myId = "#id" + i + "id" + j;
                if ($(myId).hasClass("goalcolor") == true) {
                    $(myId).toggleClass("goalcolor");
                }
            }
        }
        $(goalId).addClass("goalcolor");

        console.log("~~~myIde~~~~~", myIde);

        if (flagreload == 1) {
            previous = "";
            flagp = 0;
            flagt = 0;
            flag = 0;
            
            // reset pacman to root position on another mouse click
            var myIds = "#id" + 2 + "id" + 2;
            $(myIds).addClass("pacman");
            var myIds1 = "#" + gl;

            $(myIds1).toggleClass("pacman");
            for (var i = 1; i <= 13; i++) {
                for (var j = 1; j <= 14; j++) {
                    var myId = "#id" + i + "id" + j;
                    if ($(myId).hasClass("color") == true) {
                        $(myId).toggleClass("color");
                    }
                }
            }
        }
        else {
            flagreload = 1;
        }


        gl = myIde;

        var rt = "id2id2";

        let g = new Graph();
        g.addNode(rt);
        g.addNode("id2id3");
        g.addNode("id2id4");
        g.addNode("id2id5");
        g.addNode("id2id6");
        g.addNode("id2id7");
        g.addNode("id2id9");
        g.addNode("id2id11");
        g.addNode("id2id13");

        g.addNode("id3id2");
        g.addNode("id3id9");
        g.addNode("id3id11");
        g.addNode("id3id13");

        g.addNode("id4id2");
        g.addNode("id4id3");
        g.addNode("id4id4");
        g.addNode("id4id5");
        g.addNode("id4id6");
        g.addNode("id4id7");
        g.addNode("id4id9");
        g.addNode("id4id10");
        g.addNode("id4id11");
        g.addNode("id4id12");
        g.addNode("id4id13");

        g.addNode("id5id5");
        g.addNode("id5id11");

        g.addNode("id6id2");
        g.addNode("id6id3");
        g.addNode("id6id5");
        g.addNode("id6id7");
        g.addNode("id6id9");
        g.addNode("id6id11");
        g.addNode("id6id12");
        g.addNode("id6id13");

        g.addNode("id7id2");
        g.addNode("id7id5");
        g.addNode("id7id7");
        g.addNode("id7id9");
        g.addNode("id7id11");

        g.addNode("id8id2");
        g.addNode("id8id3");
        g.addNode("id8id4");
        g.addNode("id8id5");
        g.addNode("id8id6");
        g.addNode("id8id7");
        g.addNode("id8id9");
        g.addNode("id8id10");
        g.addNode("id8id11");
        g.addNode("id8id12");
        g.addNode("id8id13");

        g.addNode("id9id3");
        g.addNode("id9id13");

        g.addNode("id10id2");
        g.addNode("id10id3");
        g.addNode("id10id4");
        g.addNode("id10id5");
        g.addNode("id10id6");
        g.addNode("id10id7");
        g.addNode("id10id8");
        g.addNode("id10id9");
        g.addNode("id10id10");
        g.addNode("id10id11");
        g.addNode("id10id12");
        g.addNode("id10id13");

        g.addNode("id11id2");
        g.addNode("id11id4");
        g.addNode("id11id9");
        g.addNode("id11id11");
        g.addNode("id11id13");

        g.addNode("id12id2");
        g.addNode("id12id4");
        g.addNode("id12id6");
        g.addNode("id12id7");
        g.addNode("id12id8");
        g.addNode("id12id9");
        g.addNode("id12id11");
        g.addNode("id12id13");

        g.addEdge(rt, "id2id3");
        g.addEdge("id2id3", "id2id4");
        g.addEdge("id2id4", "id2id5");
        g.addEdge("id2id5", "id2id6");
        g.addEdge("id2id6", "id2id7");

        g.addEdge(rt, "id3id2");
        g.addEdge("id3id2", "id4id2");

        g.addEdge("id4id2", "id4id3");
        g.addEdge("id4id3", "id4id4");
        g.addEdge("id4id4", "id4id5");
        g.addEdge("id4id5", "id4id6");
        g.addEdge("id4id6", "id4id7");

        g.addEdge("id4id5", "id5id5");
        g.addEdge("id5id5", "id6id5");
        g.addEdge("id6id5", "id7id5");
        g.addEdge("id7id5", "id8id5");

        g.addEdge("id8id5", "id8id6");
        g.addEdge("id8id6", "id8id7");
        g.addEdge("id8id7", "id7id7");
        g.addEdge("id7id7", "id6id7");

        g.addEdge("id8id5", "id8id4");
        g.addEdge("id8id4", "id8id3");
        g.addEdge("id8id3", "id8id2");
        g.addEdge("id8id2", "id7id2");
        g.addEdge("id7id2", "id6id2");
        g.addEdge("id6id2", "id6id3");

        g.addEdge("id8id3", "id9id3");
        g.addEdge("id9id3", "id10id3");
        g.addEdge("id10id3", "id10id2");
        g.addEdge("id10id2", "id11id2");
        g.addEdge("id11id2", "id12id2");

        g.addEdge("id10id3", "id10id4");
        g.addEdge("id10id4", "id10id5");
        g.addEdge("id10id5", "id10id6");
        g.addEdge("id10id6", "id10id7");
        g.addEdge("id10id7", "id10id8");
        g.addEdge("id10id8", "id10id9");
        g.addEdge("id10id9", "id10id10");
        g.addEdge("id10id10", "id10id11");
        g.addEdge("id10id11", "id10id12");
        g.addEdge("id10id12", "id10id13");

        g.addEdge("id10id4", "id11id4");
        g.addEdge("id11id4", "id12id4");

        g.addEdge("id10id9", "id11id9");
        g.addEdge("id11id9", "id12id9");
        g.addEdge("id12id9", "id12id8");
        g.addEdge("id12id8", "id12id7");
        g.addEdge("id12id7", "id12id6");

        g.addEdge("id10id11", "id11id11");
        g.addEdge("id11id11", "id12id11");

        g.addEdge("id10id13", "id11id13");
        g.addEdge("id11id13", "id12id13");
        g.addEdge("id10id13", "id9id13");
        g.addEdge("id9id13", "id8id13");

        g.addEdge("id8id13", "id8id12");
        g.addEdge("id8id12", "id8id11");
        g.addEdge("id8id11", "id8id10");
        g.addEdge("id8id10", "id8id9");
        g.addEdge("id8id9", "id7id9");
        g.addEdge("id7id9", "id6id9");

        g.addEdge("id8id11", "id7id11");
        g.addEdge("id7id11", "id6id11");

        g.addEdge("id6id11", "id6id12");
        g.addEdge("id6id12", "id6id13");

        g.addEdge("id6id11", "id5id11");
        g.addEdge("id5id11", "id4id11");

        g.addEdge("id4id11", "id4id12");
        g.addEdge("id4id12", "id4id13");
        g.addEdge("id4id13", "id3id13");
        g.addEdge("id3id13", "id2id13");

        g.addEdge("id4id11", "id4id10");
        g.addEdge("id4id10", "id4id9");
        g.addEdge("id4id9", "id3id9");
        g.addEdge("id3id9", "id2id9");

        g.addEdge("id4id11", "id3id11");
        g.addEdge("id3id11", "id2id11");

        console.log("***********", gl);

        $("#Goal").append(`<div class="goal">${gl}</div>`);

        DFS(rt, gl);


        function DFS(root, goal) {
            let s = new Stack(200);
            let explored = new Set();

            let str1x = "";
            let str1y = "";
            let str2x = "";
            let str2y = "";

            s.push(root);
            stackseq.push(0);       // for display at right side on screen
            stackval.push(root);    // for display at right side on screen

            explored.add(root);
            visited.push(root);     // for display at right side on screen

            // We'll continue till our Stack gets empty
            while (!s.isEmpty()) {                

                let t = s.pop();
                stackseq.push(1); // for display at right side on screen

                if (flag != 0) {
                    for (let i = 2; i < previous.length - 2; i++) {
                        if (previous.charAt(i) != 'i' && flagp == 0) {
                            str1x = str1x + previous.charAt(i);
                        }
                        else {
                            flagp = 1;
                            str1y = str1y + previous.charAt(i + 2);
                        }
                    }
                    for (let i = 2; i < t.length - 2; i++) {
                        if (t.charAt(i) != 'i' && flagt == 0) {
                            str2x = str2x + t.charAt(i);
                        }
                        else {
                            flagt = 1;
                            str2y = str2y + t.charAt(i + 2);
                        }
                    }
                    
                    
                    if (str2x > str1x) {
                        if (str2x - str1x == 1) {
                            // move down
                            move.push(40);
                            morv.push(0);
                        }
                        else {
                            // pacmanJump
                            jump.push(str1x);
                            jump.push(str1y);
                            jump.push(str2x);
                            jump.push(str2y);
                            morv.push(1);
                        }
                    }
                    else if (str2x < str1x) {
                        if (str1x - str2x == 1) {
                            // move up
                            move.push(38);
                            morv.push(0);
                        }
                        else {
                            // pacmanJump
                            jump.push(str1x);
                            jump.push(str1y);
                            jump.push(str2x);
                            jump.push(str2y);
                            morv.push(1);
                        }
                    }
                    else if (str2y > str1y) {
                        if (str2y - str1y == 1) {
                            // move right
                            move.push(39);
                            morv.push(0);
                        }
                        else {
                            // pacmanJump
                            jump.push(str1x);
                            jump.push(str1y);
                            jump.push(str2x);
                            jump.push(str2y);
                            morv.push(1);
                        }
                    }
                    else {
                        if (str1y - str2y == 1) {
                            // move left
                            move.push(37);
                            morv.push(0);
                        }
                        else {
                            // pacmanJump
                            jump.push(str1x);
                            jump.push(str1y);
                            jump.push(str2x);
                            jump.push(str2y);
                            morv.push(1);
                        }
                    }

                }


                g.edges[t]
                    .filter(n => !explored.has(n))
                    .forEach(n => {

                        explored.add(n);
                        visited.push(n); // for display at right side on screen
                        s.push(n);
                        stackseq.push(0); // for display at right side on screen
                        stackval.push(n); // for display at right side on screen
                    });

                if (t == goal) {
                    s.clear();
                    break;
                }

                str1x = "";
                str1y = "";
                str2x = "";
                str2y = "";
                flagp = 0;
                flagt = 0;
                previous = t;
                flag = 1;

                console.log(stackseq);
                console.log(stackval);
                
            }
        

        }

    });

    // Animate with time delay

    // Animate Packman Movement
    setInterval(() => {
        if(morv.length != 0){
            if(morv.shift() == 0){
                myFunction(move.shift());
            }
            else{
                pacmanJump(jump.shift(),jump.shift(),jump.shift(),jump.shift());
            }
        }
        else{
            clearInterval();
        }
    }, 600);

    // Animate Stack
    setInterval(() => {
        if(stackseq.length != 0){
            if(stackseq.shift() == 0){
                $("#Stack").prepend(`<div class="stack" >${stackval.shift()}</div><br />`);
            }
            else{
                $("#Stack").find('div:first').remove();
                $("#Stack").find('br:first').remove();
            }
        }
        else{
            clearInterval();
        }
    }, 200);

    // Animate Explored Nodes
    setInterval(() => {
        if(visited.length != 0){
            $("#Explored").append(`<div class="explored">${visited.shift()}</div>`);
        }
        else{
            clearInterval();
        }
    }, 400);

    $("#Explored").append(`<div>Explored Node:</div><br />`);
    $("#Stack").prepend(`<div>Stack Operations:</div><br />`);
    $("#Goal").append(`<div>Goal Node:</div><br />`);

});


class Graph {
    constructor() {
        this.edges = {};
        this.nodes = [];
    }

    addNode(node) {
        this.nodes.push(node);
        this.edges[node] = [];
    }

    addEdge(node1, node2) {
        this.edges[node1].push(node2);
        this.edges[node2].push(node1);
    }

    display() {
        let graph = "";
        this.nodes.forEach(node => {
            graph += node + "->" + this.edges[node].map(n => n.node).join(", ") + "\n";
        });
        console.log(graph);
    }
}


class Stack {
    constructor(maxSize) {
        if (isNaN(maxSize)) {
            maxSize = 10;
        }
        this.maxSize = maxSize;
        this.container = [];
    }
    display() {
        console.log(this.container);
    }
    isEmpty() {
        return this.container.length === 0;
    }
    isFull() {
        return this.container.length >= this.maxSize;
    }
    push(element) {
        if (this.isFull()) {
            console.log("Stack Overflow!");
            return;
        }
        this.container.push(element)
    }
    pop() {
        if (this.isEmpty()) {
            console.log("Stack Underflow!");
            return;
        }
        else {
            return this.container.pop();
        }
    }
    peek() {
        if (isEmpty()) {
            console.log("Stack Underflow!");
            return;
        }
        return this.container[this.container.length - 1];
    }
    clear() {
        this.container = [];
    }
}