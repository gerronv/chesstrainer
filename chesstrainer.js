var canvas = document.getElementById('chesstrainer');
var ctx = canvas.getContext('2d');
var cell_length = canvas.height / 8;
var l = cell_length;
var color_1 = 'white';
var color_2 = 'grey';
var black_pawn_img = 'black_pawn.png';
var black_rook_img = 'black_rook.png';
var black_bishop_img = 'black_bishop.png';
var WHITE_PAWN = 0;
var WHITE_ROOK = 1;
var WHITE_BISHOP = 2;
var WHITE_KNIGHT = 3;
var WHITE_QUEEN = 4;
var WHITE_KING = 5;
var BLACK_PAWN = 6;
var BLACK_ROOK = 7;
var BLACK_BISHOP = 8;
var BLACK_KNIGHT = 9;
var BLACK_QUEEN = 10;
var BLACK_KING = 11;

//The state of the board is stored here. This will be updated when we download a 
//puzzle to the initial state of the puzzle. We will also render the board from 
//what is stored in this.
var chess_board = [[[BLACK_ROOK],[BLACK_PAWN],[],[],[],[],[WHITE_PAWN],[WHITE_ROOK]], 
                   [[BLACK_KNIGHT],[BLACK_PAWN],[],[],[],[],[WHITE_PAWN],[WHITE_KNIGHT]],
                   [[BLACK_BISHOP],[BLACK_PAWN],[],[],[],[],[WHITE_PAWN],[WHITE_BISHOP]],
                   [[BLACK_KING],[BLACK_PAWN],[],[],[],[],[WHITE_PAWN],[WHITE_KING]],
                   [[BLACK_QUEEN],[BLACK_PAWN],[],[],[],[],[WHITE_PAWN],[WHITE_QUEEN]],
                   [[BLACK_BISHOP],[BLACK_PAWN],[],[],[],[],[WHITE_PAWN],[WHITE_BISHOP]],
                   [[BLACK_KNIGHT],[BLACK_PAWN],[],[],[],[],[WHITE_PAWN],[WHITE_KNIGHT]],
                   [[BLACK_ROOK],[BLACK_PAWN],[],[],[],[],[WHITE_PAWN],[WHITE_ROOK]]];

function draw_board() {
    //This function draws the grid of the board
    for(let i=0; i < 8; i++) {
        for(let j=0; j < 8; j++) {
            ctx.beginPath();
            ctx.rect(cell_length*i,cell_length*j,cell_length,cell_length);
            if((i + j) % 2 == 0) {
                ctx.fillStyle = color_1;
            } else {
                ctx.fillStyle = color_2;
            }
            ctx.fill();
            ctx.closePath();
        }
    }
    
}

function draw_piece(x, y, piece){
    //This function looks up the piece type in a look up function which
    //yields the appropriate img file. This img is then drawn at location
    //(x,y).
    ctx.beginPath();
    img = img_from_piece(piece);
    if (img == ''){
        return;
    }
    let image = new Image();
    image.src = img;
    image.onload = function() {
        ctx.drawImage(image, x, y, cell_length, cell_length);
    }
    ctx.closePath();
}

function img_from_piece(piece){
    //This is a look  up function where we get the appropriate image for
    //the appropriate piece.
    let img = '';
    if (piece == BLACK_PAWN){
        img = black_pawn_img;
    }
    if (piece == BLACK_ROOK) {
        img = black_rook_img;
    }
    if (piece == BLACK_BISHOP){
        img = black_bishop_img;
    }
    return img;
}

function draw_pieces() {
    //Draws the pieces as represented in chess_board.
    chess_board.forEach(function(column, x, array1) {
        column.forEach(function(piece, y, array2) {
            draw_piece(x*l, y*l, piece);
        })
    })
}

function render_board(){
    draw_board();
    draw_pieces();
}

function draw() {
    render_board();
}
