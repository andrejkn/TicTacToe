var TicTacToeGame = (function () {
    var gameInstance,
        gameEnded = false,
        fields = initializeFields(),
        computerPlayer = '',
        turn = 'X';

    function initializeFields() {
        var fields = {},
            i,
            gridSize = 3;

        for ( i = 1; i <= (gridSize * gridSize); i += 1 ) {
            fields['field' + i] = {
                value: '',
                adjacencyMatrix: []
            };
        }

        return fields;
    }

    function getFieldValue(fieldName) {

    }

    function initializeGame() {

        // private methods

        return {
            // Public methods
            getComputerPlayer: function () {
                return computerPlayer;
            },

            getTurn: function () {
                return turn;
            },

            getFieldValue: getFieldValue,

            setFieldValue: function (fieldName, turn) {},

            setComputerPlayer: function (player) {},

            setTurn: function (playerSymbol) {
                turn = playerSymbol;
            },

            detectWinner: function (fieldSelected, cb) {
                var adjacent,
                    adjFields,
                    wonFields,
                    currentFieldValue = getFieldValue(fieldSelected);

                for (adjacent in currentField.adjacents) {
                    adjFields = currentField.adjacents[adjacent];

                    if (adjFields.length > 0 &&
                        fields[adjFields[0]].value === fields[adjFields[1]].value &&
                        fields[adjFields[0]].value === currentField.value) {
                        wonFields = [adjFields[0], adjFields[1], fieldSelected];
                        gameEnded = true;

                        cb(currentFieldValue, wonFields);
                    }
                }
            },
            restart: function () {},

            getAllFields: function () {
                return fields;
            }
        }
    }

    return {
        getGameInstance: function () {
            if ( !gameInstance ) {
                gameInstance = initializeGame();
            }
            return gameInstance;
        }
    }
})();

var game = TicTacToeGame.getGameInstance(),
    fields = game.getAllFields();
console.log(fields);


//
//$(document).ready(function() {
//
//    var game = TicTacToeGame.getGameInstance(),
//        messageBox = $("#message"),
//        computerPlayerField,
//        symbol1 = 'X',
//        symbol2 = 'O';
//
//    function markField(field, fieldSelector) {
//        fieldSelector = fieldSelector || ('#' + field);
//        $(fieldSelector).html(game.getTurn());
//        game.setFieldValue(field, game.getTurn());
//        game.turn = (game.getTurn() === symbol1 ? symbol2 : symbol1);
//    }
//
//    function reportWinner(winner, wonFields) {
//        var msg, msgStyle, fieldStyle, i;
//
//        if (winner === game.getComputerPlayer()) {
//            msg = 'You LOST!';
//            msgStyle = 'lost_message';
//            fieldStyle = 'lost_box';
//            game.computerPlayer = 'X';
//        } else {
//            msg = 'You WON!';
//            msgStyle = 'won_message';
//            fieldStyle = 'won_box';
//            game.setComputerPlayer(symbol2);
//        }
//        messageBox.addClass(msgStyle);
//        messageBox.html(msg);
//
//        for (i = 0; i < wonFields.length; i += 1) {
//            $('#' + wonFields[i]).addClass(fieldStyle);
//        }
//    }
//
//    function displayPlayers() {
//        var humanPlayer = (game.getComputerPlayer() === symbol1 ? symbol2 : symbol1),
//            msg = 'You are ' + humanPlayer + '<br>I am ' + game.getComputerPlayer();
//        messageBox.html(msg);
//    }
//
//    game.setComputerPlayer(symbol1);
//    displayPlayers();
//
//    if (game.getComputerPlayer() === game.getTurn()) {
//        computerPlayerField = game.takeTurn();
//        markField(computerPlayerField);
//    }
//
//    $(".box").click(function () {
//        var userSelectedField = this.id;
//
//        if ($(this).html() === '' && !game.isGameEnded()) {
//
//            /** Human's turn */
//            markField(userSelectedField, this);
//            game.detectWinner(userSelectedField, reportWinner);
//            /** Human's turn ends */
//
//            /** Computer's turn */
//            if (game.computerPlayer === game.turn && !game.isGameEnded()) {
//                computerPlayerField = game.takeTurn();
//                markField(computerPlayerField);
//            } else {
//                console.log('Game ended!');
//            }
//            game.detectWinner(computerPlayerField, reportWinner);
//            /** Computer's turn ends */
//        }
//    });
//
//    $(".restart").click(function () {
//        var clearedFields = game.restart(),
//            fieldSelector;
//
//        messageBox.html('');
//        messageBox.removeClass('won_message lost_message');
//
//        for (var i = 0; i < clearedFields.length; i += 1) {
//            fieldSelector = $('#' + clearedFields[i]);
//            fieldSelector.html('');
//            fieldSelector.removeClass('won_box lost_box');
//        }
//        game.setTurn(symbol1);
//        if (game.getComputerPlayer() === game.getTurn()) {
//            computerPlayerField = game.takeTurn();
//            markField(computerPlayerField);
//        }
//
//        displayPlayers();
//    });
//});