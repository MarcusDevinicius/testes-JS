function mostrarEsconderGames() {
    const btnMostrarGames = document.querySelector('.titulo-lista');

    function mostrarLista() {
        const itensLista = document.querySelector('.lista-games');
        itensLista.classList.toggle('ativo')
        btnMostrarGames.classList.toggle('ativo')
    }

    btnMostrarGames.addEventListener('click', mostrarLista);
}

mostrarEsconderGames()

const opGames = document.querySelectorAll('.lista-games li');
const imgsGames = document.querySelectorAll('.lista-sections section');

function selecionaImg(index) {
    imgsGames.forEach((img) => {
    img.classList.remove('ativo');
})
    imgsGames[index].classList.add('ativo');

}

opGames.forEach((games, index) => {
    games.addEventListener('click', () => {
        selecionaImg(index)
    })
});

