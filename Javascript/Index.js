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

    function myFunction(event){
        
        // console.log(event);
        if (event == 37){ // PACMAN MOVE LEFT
            for (var i = 1; i <= 13; i++) {
                for (var j = 1; j <= 14; j++) {
                    var myId = "#id" + i + "id" + j;
                        if($(myId).hasClass("pacman") == true){
                            // alert("Have Pacman");
                            if(arr[i][j-1] == 0){
                                $(myId).toggleClass("pacman");
                                $(myId).addClass("color");
                                var myId1 = "#id" + i + "id" + (j - 1);
                            }
                        }
                }
            }
            $(myId1).addClass("pacman");
        }
        else if (event == 38){ // PACMAN MOVE UP
            for (var i = 1; i <= 13; i++) {
                for (var j = 1; j <= 14; j++) {
                    var myId = "#id" + i + "id" + j;
                        if($(myId).hasClass("pacman") == true){
                            // alert("Have Pacman");
                            if(arr[i-1][j] == 0){
                                $(myId).toggleClass("pacman");
                                $(myId).addClass("color");
                                var myId1 = "#id" + (i - 1) + "id" + j;
                            }
                        }
                }
            }
            $(myId1).addClass("pacman");
        }
        else if (event == 39){ // PACMAN MOVE RIGHT
            for (var i = 1; i <= 13; i++) {
                for (var j = 1; j <= 14; j++) {
                    var myId = "#id" + i + "id" + j;
                        if($(myId).hasClass("pacman") == true){
                            // alert("Have Pacman");
                            if(arr[i][j+1] == 0){
                                $(myId).toggleClass("pacman");
                                $(myId).addClass("color");
                                var myId1 = "#id" + i + "id" + (j + 1);
                            }
                        }
                }
            }
            $(myId1).addClass("pacman");
        }
        else if (event == 40){ // PACMAN MOVE DOWN
            for (var i = 1; i <= 13; i++) {
                for (var j = 1; j <= 14; j++) {
                    var myId = "#id" + i + "id" + j;
                        if($(myId).hasClass("pacman") == true){
                            // alert("Have Pacman");
                            if(arr[i+1][j] == 0){
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

    function pacmanJump(x1,y1,x2,y2){
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
    

    function DFS(root, goal){
        let s = new Stack(100);
        let explored = new Set();

        let FPS = 1;

        let str1x = "";
        let str1y = "";
        let str2x = "";
        let str2y = "";

        s.push(root);

        explored.add(root);

        // We'll continue till our Stack gets empty
        while (!s.isEmpty()) {
            let t = s.pop();

            if(flag != 0){
                for(let i = 2; i < previous.length - 2; i++){
                    if(previous.charAt(i) != 'i' && flagp == 0){
                        str1x = str1x + previous.charAt(i);
                    }
                    else{
                        flagp = 1;
                        str1y = str1y + previous.charAt(i + 2);
                    }
                }
                for(let i = 2; i < t.length - 2; i++){
                    if(t.charAt(i) != 'i' && flagt == 0){
                        str2x = str2x + t.charAt(i);
                    }
                    else{
                        flagt = 1;
                        str2y = str2y + t.charAt(i + 2);
                    }
                }

                console.log(str1x);
                console.log(str1y);
                console.log(str2x);
                console.log(str2y);


                if(str2x > str1x){
                    if(str2x - str1x == 1){
                        myFunction(40);
                    }
                    else{
                        pacmanJump(str1x,str1y,str2x,str2y);
                    }
                }
                else if(str2x < str1x){
                    if(str1x - str2x == 1){
                        myFunction(38);
                    }
                    else{
                        pacmanJump(str1x,str1y,str2x,str2y);
                    }
                }
                else if(str2y > str1y){
                    if(str2y - str1y == 1){
                        myFunction(39);
                    }
                    else{
                        pacmanJump(str1x,str1y,str2x,str2y);
                    }
                }
                else{
                    if(str1y - str2y == 1){
                        myFunction(37);
                    }
                    else{
                        pacmanJump(str1x,str1y,str2x,str2y);
                    }
                }
                
            }

            
            console.log(t);

            g.edges[t]
                .filter(n => !explored.has(n))
                .forEach(n => {
                explored.add(n);
                s.push(n);
            });

            str1x = "";
            str1y = "";
            str2x = "";
            str2y = "";
            flagp = 0;
            flagt = 0;
            previous = t;
            flag = 1;
        }


    }

    var gl = "id4id3"
    var rt = "id2id2"

    let g = new Graph();
    g.addNode(rt);
    g.addNode("id2id3");
    g.addNode("id2id4");
    g.addNode("id2id5");
    g.addNode("id3id2");
    g.addNode("id4id2");
    g.addNode("id4id3");

    g.addEdge(rt, "id2id3");
    g.addEdge(rt, "id3id2");
    g.addEdge("id2id3", "id2id4");
    g.addEdge("id2id4", "id2id5");
    g.addEdge("id3id2", "id4id2");
    g.addEdge("id4id2", "id4id3");

    g.display();

    DFS(rt,gl);
    

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
       else{
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