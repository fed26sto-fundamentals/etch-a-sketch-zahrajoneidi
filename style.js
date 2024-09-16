function drawBoard(size) {
    const board = document.getElementById("board");
    board.innerHTML = ''
    board.style.width = (16 * size) + 'px'
    board.style.height = (16 * size) + 'px'




    for (let i = 1; i <= size; i++) {
        const row = document.createElement('div')
        row.className = "row"

        for (let x = 1; x <= size; x++) {
            const cell = document.createElement('div')
            cell.className = "cell"
            cell.addEventListener('mouseover', function () {
                cell.style.backgroundColor = 'black'
            })



            row.appendChild(cell)
        }

        board.appendChild(row)
    }


}



//// runtime
drawBoard(30)

const button = document.getElementById('button');
button.addEventListener('click', function () {
    let userInput = prompt("size?", 30);
    if (userInput > 100) {
        userInput=100
    }
    drawBoard(userInput)
    
})
