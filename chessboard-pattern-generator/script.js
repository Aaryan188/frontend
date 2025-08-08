function print(data) {
    const label = document.createElement('div');
    label.className = 'chessboard';
    label.innerHTML = data;
    document.body.appendChild(label);
}

function newLine() {
    return '<br>';
}

const board_size = 8;

function createChessboard(size) {
    let chessboard = '';

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            if ((row + col) % 2 === 0) {
                chessboard += '*';
            } else {
                chessboard += '#';
            }
        }
        chessboard += newLine();
    }

    print(chessboard);
}

createChessboard(board_size);
