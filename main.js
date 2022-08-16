

const teclas_jogo = document.querySelectorAll('.tecla');
let opcoes =  [0,1,2,3,4,5,6,7,8];
let partida = [0,0,0,0,0,0,0,0,0];
let tem_jogo = true;

function checa_jogador(){
    if  ((partida[0]==1 & partida[1]==1 &  partida[2]==1) || (partida[3]==1 & partida[4]==1 &  partida[5]==1) ||(partida[6]==1 & partida[7]==1 &  partida[8]==1) || (partida[0]==1 & partida[4]==1 &  partida[8]==1) || (partida[2]==1 & partida[4]==1 &  partida[6]==1) ||(partida[0]==1 & partida[3]==1 &  partida[6]==1) || (partida[1]==1 & partida[4]==1 &  partida[7]==1) || (partida[2]==1 & partida[5]==1 &  partida[8]==1)) {
        document.getElementById("vencedor").textContent="PARABENS, VOCE GANHOU";
        tem_jogo = false;
        for (i=0;i<opcoes.length;i++){
            teclas_jogo[i].disabled = true;
        }
    }
}
    
function checa_game(){
    if  ((partida[0]==2 & partida[1]==2 & partida[2]==2) || (partida[3]==2 & partida[4]==2 & partida[5]==2) ||(partida[6]==2 & partida[7]==2 & partida[8]==2) || (partida[0]==2 & partida[4]==2 & partida[8]==2) || (partida[2]==2 & partida[4]==2 & partida[6]==2) ||(partida[0]==2 & partida[3]==2 & partida[6]==2) || (partida[1]==2 & partida[4]==2 & partida[7]==2) || (partida[2]==2 & partida[5]==2 & partida[8]==2)) {
        tem_jogo = false;
        document.getElementById("vencedor").textContent="JOGO GANHOU DO PANGARÉ";
        //desativar todos
        for (i=0;i<opcoes.length;i++){
            teclas_jogo[i].disabled = true;
        }
    }
}

function jogada_jogador(x){
    teclas_jogo[x].classList.add('ativa-jogador');
    partida[x] = 1;
    opcoes = opcoes.filter(function(f) { return f !== x });
    teclas_jogo[x].disabled = true;
}

function jogada_game(){
    let y = opcoes[Math.random()*opcoes.length | 0];
    teclas_jogo[y].classList.add('ativa-game');
    partida[y] = 2;
    opcoes = opcoes.filter(function(f) { return f !== y });
    //desabilitar os botoes clicados
}

function zera_jogo(){
    for (i=0;i<9;i++){
        teclas_jogo[i].disabled = false;
        opcoes =  [0,1,2,3,4,5,6,7,8];
        partida = [0,0,0,0,0,0,0,0,0];
        teclas_jogo[i].classList.remove('ativa-game');
        teclas_jogo[i].classList.remove('ativa-jogador');
        document.getElementById("vencedor").textContent="VAMOS PARA MAIS UMA";
        tem_jogo = true;
    }
}

for (let x=0;x<teclas_jogo.length;x++){
    teclas_jogo[x].onclick = function() {
        if (tem_jogo) {
            jogada_jogador(x);
            checa_jogador();
        } else {
            //zera_jogo();
        }

        if (tem_jogo){
            jogada_game();
            checa_game();
        } else {
            //zera_jogo;
        }
    }
}
