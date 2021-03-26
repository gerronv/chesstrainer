var canvas = document.getElementById('chesstrainer');
var ctx = canvas.getContext('2d');
var cell_length = canvas.height / 8;
var l = cell_length;
var color_1 = 'white';
var color_2 = 'grey';
var black_pawn_img = 'black_pawn.png';
var black_rook_img = 'black_rook.png';
var black_bishop_img = 'black_bishop.png';
var black_queen_img = 'black_queen.png';
var black_king_img = 'black_king.png';
var black_knight_img = 'black_knight.png';
var white_rook_img = 'white_rook.png';
var white_bishop_img = 'white_bishop.png';
var white_queen_img = 'white_queen.png';
var white_king_img = 'white_king.png';
var white_knight_img = 'white_knight.png';
var white_pawn_img = 'white_pawn.png';
var WHITE_PAWN = 1;
var WHITE_ROOK = 2;
var WHITE_BISHOP = 3;
var WHITE_KNIGHT = 4;
var WHITE_QUEEN = 5;
var WHITE_KING = 6;
var BLACK_PAWN = 7;
var BLACK_ROOK = 8;
var BLACK_BISHOP = 9;
var BLACK_KNIGHT = 10;
var BLACK_QUEEN = 11;
var BLACK_KING = 12;

//The state of the board is stored here. This will be updated when we download a 
//puzzle to the initial state of the puzzle. We will also render the board from 
//what is stored in this.
var chess_board = [[[BLACK_ROOK],[BLACK_PAWN],[],[],[],[],[WHITE_PAWN],[WHITE_ROOK]], 
                   [[BLACK_KNIGHT],[BLACK_PAWN],[],[],[],[],[WHITE_PAWN],[WHITE_KNIGHT]],
                   [[BLACK_BISHOP],[BLACK_PAWN],[],[],[],[],[WHITE_PAWN],[WHITE_BISHOP]],
                   [[BLACK_QUEEN],[BLACK_PAWN],[],[],[],[],[WHITE_PAWN],[WHITE_QUEEN]],
                   [[BLACK_KING],[BLACK_PAWN],[],[],[],[],[WHITE_PAWN],[WHITE_KING]],
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
    if (piece == BLACK_QUEEN){
        img = black_queen_img;
    }
    if (piece == BLACK_KING){
        img = black_king_img;
    }
    if (piece == BLACK_KNIGHT){
        img = black_knight_img;
    }
    if (piece == WHITE_ROOK){
        img = white_rook_img;
    }
    if (piece == WHITE_BISHOP){
        img = white_bishop_img;
    }
    if (piece == WHITE_QUEEN){
        img = white_queen_img;
    }
    if (piece == WHITE_KING){
        img = white_king_img;
    }
    if (piece == WHITE_KNIGHT){
        img = white_knight_img;
    }
    if (piece == WHITE_PAWN){
        img = white_pawn_img;
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
