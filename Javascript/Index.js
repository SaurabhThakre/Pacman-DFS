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
    var pacmanPresent = 0;

    var move = [];
    var jump = [];
    var morv = [];
    var stackseq = [];
    var stackval = [];
    var visited = [];

    var gl = "id4id5";
    var rt = "";

    let flagreload = 0;

    var pathCost = 1;
    var speed = 600;


    $(".empty").click(function () {
        var myIde = $(this).attr("id");

        for (var i = 1; i <= 13; i++) {
            for (var j = 1; j <= 14; j++) {
                var myId = "#id" + i + "id" + j;
                var rtId = "id" + + i + "id" + j;
                if ($(myId).hasClass("pacman") == true) {
                    pacmanPresent = 1;
                    rt = rtId;
                    $("#Root").append(`<div class="root">${rt}</div>`);
                }
            }
        }

        if (pacmanPresent == 1) {

            $("div").remove(".explored");
            $("div").remove(".stack");
            $("br").remove();

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


            $("div").remove(".explored");
            $("div").remove(".stack");
            $("br").remove();

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


            gl = myIde;

            if (flagreload == 1) {
                previous = "";
                flagp = 0;
                flagt = 0;
                flag = 0;
                pathCost = 1;


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

            let g = new Graph();

            for (var i = 1; i <= 13; i++) {
                for (var j = 1; j <= 14; j++) {
                    var myId = "id" + i + "id" + j;
                    if (arr[i][j] == 0) {
                        g.addNode(myId);
                    }
                }
            }

            for (var i = 13; i >= 1; i--) {
                for (var j = 14; j >= 1; j--) {
                    var myId = "id" + i + "id" + j;
                    var myIdr = "id" + i + "id" + (j + 1);
                    var myIdd = "id" + (i + 1) + "id" + j;
                    if (arr[i][j] == 0) {
                        if (arr[i][j + 1] == 0) {
                            g.addEdge(myId, myIdr);
                        }
                        if (arr[i + 1][j] == 0) {
                            g.addEdge(myId, myIdd);
                        }
                    }
                }
            }

            console.log("***********", gl);

            $("#Goal").append(`<div class="goal">${gl}</div>`);

            DFS(rt, gl);


            // Depth first search (DFS)
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

        }
        else {
            console.log("~~~myIde~~~~~", myIde);

            // set pacman to root position on mouse click
            rt = myIde;
            $("#Root").append(`<div class="root">${rt}</div>`);
            var myIds1 = "#" + rt;
            $(myIds1).addClass("pacman");

        }

    });

    

    // Animate with time delay

    // Animate Packman Movement
    setInterval(() => {
        if (morv.length != 0) {
            if (morv.shift() == 0) {
                myFunction(move.shift());
                pathCost++;
                $("#Path").append(`<div class="path">${pathCost}</div>`);
            }
            else {
                pacmanJump(jump.shift(), jump.shift(), jump.shift(), jump.shift());
                pathCost++;
                $("#Path").append(`<div class="path">${pathCost}</div>`);
            }
        }
        else {
            clearInterval();
        }
    }, speed); //600

    // Animate Stack
    setInterval(() => {
        if (stackseq.length != 0) {
            // $('div').off('click');
            if (stackseq.shift() == 0) {
                $("#Stack").prepend(`<div class="stack" >${stackval.shift()}</div><br />`);
            }
            else {
                $("#Stack").find('div:first').remove();
                $("#Stack").find('br:first').remove();
            }
        }
        else {
            clearInterval();
        }
    }, speed*1/3); //250

    // Animate Explored Nodes
    setInterval(() => {
        if (visited.length != 0) {
            $("#Explored").append(`<div class="explored">${visited.shift()}</div>`);
        }
        else {
            clearInterval();
        }
    }, speed*2/3); //450

    $("#Explored").append(`<div>Explored Node:</div><br />`);
    $("#Stack").prepend(`<div>Stack Operations:</div><br />`);
    $("#Goal").append(`<div>Goal Node:</div><br />`);
    $("#Root").append(`<div>Root Node:</div><br />`);
    $("#Path").append(`<div>Path Cost:</div><br />`);



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