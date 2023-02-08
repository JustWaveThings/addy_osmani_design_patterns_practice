1) const btn = document.getElementById("btn");
2)    // 4.2 add eventListener with function named askQuestion
3)    btn.addEventListener("click", askQuestion);
4)    // 4.3 create a function that asks brush size and store the answer
5)    function askQuestion () {
6)        // 5.1 reset numOfColumns and numOfRows to 0
7)        let numOfColumns = 0;
8)        let numOfRows = 0;
9)        numOfColumns = prompt ("How many strokes to fill in the width?");
10)       numOfRows = prompt("How many strokes to fill in the height?")
11).   // 5.3 set numOfColumns and numOfRows to CSS root property
12)        r.style.setProperty ("--numOfCol", numOfColumns);
13)        r.style.setProperty ("--numOfRow", numOfRows);
14)    // 4.4 using cellNum, create a grid
15)        for (let i=0; i <numOfColumns*numOfRows; i++) {
16)    // 2.1 create a div with className .myDivs
17)        let iDiv = document.createElement("div");
18)        iDiv.className = "myDivs";
19)    // 2.2 add a word in the div
20)        let iDivWord = document.createTextNode(i);
21)    // 2.3 add the text to the div
22)        iDiv.appendChild(iDivWord);
23)    // 2.4 put the Div inside "container" div
24)        const divContainer = document.getElementById("container");
25)        divContainer.appendChild(iDiv);
26)    }
27) }