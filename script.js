const listaGames = document.querySelectorAll('.lista-games li')
const listaSections = document.querySelectorAll('.lista-sections section')

function relacionaImg(index) {
    listaSections[index].classList.add('ativo')
}

listaGames.forEach((game, index) => {
    game[index]
    game.addEventListener('click', relacionaImg)
    
})