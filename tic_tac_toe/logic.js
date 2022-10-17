let playerText = document.getElementById('title_text');
const restartBtn= document.getElementById('restartBtn');
let blocks=Array.from(document.getElementsByClassName('block'));
let winner=getComputedStyle(document.body).getPropertyValue('--winnig-bolocks');
console.log(restartBtn.innerText);

const o_player ='O';
const x_player ='X';

/*winnig situations */
const winnig = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

/*statring the game with x player and empty board*/
let current_player = x_player;
let board=Array(9).fill(null);

/*giving text to each block of the borad according to current player's choice */
const start_the_game = () => {
    blocks.forEach(block => block.addEventListener('click', block_clicked));   
}


function block_clicked(e){
    const id= e.target.id;
    
    if(!board[id]){
        board[id]=current_player;
        e.target.innerText =current_player;
        if(current_player == x_player){
            current_player=o_player
        }
        else{
            current_player =x_player;
        }
    }

    if (Won() != false){
        current_player = current_player==x_player ? o_player : x_player;
        playerText.innerText= current_player + ' has won!';
        let winnnig_blocks = Won();
        winnnig_blocks.map(block => blocks[block].style.backgroundColor = winner)
        return;

    }
}

function Won() {
    for(let i=0;i< winnig.length;i++){
        let [a, b, c] = winnig[i];
        if(board[a] &&(board[a]==board[b] && board[a]==board[c])){
            return [a,b,c];

        }

    }
  
    return false;
}

function restart(){
    board.fill(null);
    blocks.forEach( block => {
        block.innerText='';
        block.style.backgroundColor='';
    })
    playerText ="Tic Tac Toe";
    current_player = x_player;
}

restartBtn.addEventListener('click',restart);
start_the_game();
