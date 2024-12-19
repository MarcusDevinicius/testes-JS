const listaGames = document.querySelectorAll('.lista-games li')
const listaSections = document.querySelectorAll('.lista-sections section')

function relacionaImg(index) {
    listaSections.forEach((section) => {
        section.classList.remove('ativo')
    })
    listaSections[index].classList.add('ativo')
}

listaGames.forEach((game, index) => {
    game.addEventListener('click', () => {
        relacionaImg(index)
    })
    
})

const gamesFav = document.querySelector('dt')
const listaGamesFav = document.querySelector('.lista-games')

function callBackList() {
    gamesFav.classList.toggle('ativo')
    listaGamesFav.classList.toggle('ativo')
}

gamesFav.addEventListener('click', callBackList)
