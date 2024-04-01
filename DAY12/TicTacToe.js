$(document).ready(function () {
    let currentPlayer = 'X';
    let playerXWins = 0;
    let playerOWins = 0;
    let gameEnded = false;


    function checkWinner(board, player) {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        return winningCombos.some(combination => combination.every(index => board[index] === player));
    }

    function updateWins() {
        $('#scoreX').text(playerXWins);
        $('#scoreO').text(playerOWins);
    }

    function resetBoard() {
        $('.r').text('');
        gameEnded = false;
    }

    $('.r').click(function () {
        if (gameEnded || $(this).text() !== '') return;
        $(this).text(currentPlayer);
        const board = $('.r').map(function () { return $(this).text(); }).get();
        if (checkWinner(board, currentPlayer)) {
            if (currentPlayer === 'X') {

                $('#WinnerXModal').css('display', 'block');
                setTimeout(function () {
                    $('#WinnerXModal').css('display', 'none');
                }, 3000);
            } else if (currentPlayer === 'O') {
                $('#WinnerOModal').css('display', 'block');
                setTimeout(function () {
                    $('#WinnerOModal').css('display', 'none');
                }, 3000);
            } else {

            }
            if (currentPlayer === 'X') {
                playerXWins++;
            } else {
                playerOWins++;
            }
            updateWins();
            gameEnded = true;
            return;
        }
        if (!board.includes('')) {
            $('#drawModal').css('display', 'block');
            setTimeout(function () {
                $('#drawModal').css('display', 'none');
            }, 3000);
            gameEnded = true;
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        $('.playerScores').removeClass('active');
        $(`.playerScores:contains(${currentPlayer})`).addClass('active');

    });

    $('#resetBtn').click(function () {
        resetBoard();
        currentPlayer = 'X';
        $('#screen').text(`Player ${currentPlayer}'s Turn`);
    });
});