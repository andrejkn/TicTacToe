var TicTacToeGame = function () {

};

$(document).ready(function() {

    var game = TicTacToeGame.getGameInstance(),
        messageBox = $("#message"),
        computerPlayerField,
        symbol1 = 'X',
        symbol2 = 'O';

    function markField(field, fieldSelector) {
        fieldSelector = fieldSelector || ('#' + field);
        $(fieldSelector).html(game.turn);
        game.setFieldValue(field, game.turn);
        game.turn = (game.getTurn() === symbol1 ? symbol2 : symbol1);
    }

    function reportWinner(winner, wonFields) {
        var msg, msgStyle, fieldStyle, i;

        if (winner === game.getComputerPlayer()) {
            msg = 'You LOST!';
            msgStyle = 'lost_message';
            fieldStyle = 'lost_box';
            game.computerPlayer = 'X';
        } else {
            msg = 'You WON!';
            msgStyle = 'won_message';
            fieldStyle = 'won_box';
            game.setComputerPlayer(symbol2);
        }
        messageBox.addClass(msgStyle);
        messageBox.html(msg);

        for (i = 0; i < wonFields.length; i += 1) {
            $('#' + wonFields[i]).addClass(fieldStyle);
        }
    }

    function displayPlayers() {
        var humanPlayer = (game.getComputerPlayer() === symbol1 ? symbol2 : symbol1),
            msg = 'You are ' + humanPlayer + '<br>I am ' + game.getComputerPlayer();
        messageBox.html(msg);
    }

    game.setComputerPlayer(symbol1);
    displayPlayers();

    if (game.getComputerPlayer() === game.getTurn()) {
        computerPlayerField = game.takeTurn();
        markField(computerPlayerField);
    }

    $(".box").click(function () {
        var userSelectedField = this.id;

        if ($(this).html() === '' && !game.isGameEnded()) {

            /** Human's turn */
            markField(userSelectedField, this);
            game.detectWinner(userSelectedField, reportWinner);
            /** Human's turn ends */

            /** Computer's turn */
            if (game.computerPlayer === game.turn && !game.isGameEnded()) {
                computerPlayerField = game.takeTurn();
                markField(computerPlayerField);
            } else {
                console.log('Game ended!');
            }
            game.detectWinner(computerPlayerField, reportWinner);
            /** Computer's turn ends */
        }
    });

    $(".restart").click(function () {
        var clearedFields = game.restart(),
            fieldSelector;

        messageBox.html('');
        messageBox.removeClass('won_message lost_message');

        for (var i = 0; i < clearedFields.length; i += 1) {
            fieldSelector = $('#' + clearedFields[i]);
            fieldSelector.html('');
            fieldSelector.removeClass('won_box lost_box');
        }
        game.setTurn(symbol1);
        if (game.computerPlayer === game.turn) {
            computerPlayerField = game.takeTurn();
            markField(computerPlayerField);
        }

        displayPlayers();
    });
});