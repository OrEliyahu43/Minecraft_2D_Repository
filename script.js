const listItems = document.querySelectorAll('li');
const tutorialBtn = listItems[0];
const startGameBtn = listItems[1];
const openScreen = document.querySelector('#open-screen');
const tutorial = document.querySelector('#tutorial')
const gameScreen = document.querySelector('#game-container');
const gameLogic = {
    'tutorialIsOpen': false
}

function toggleDisplay(element) {
    const isShow = element.getAttribute("show");

    element.setAttribute("show", isShow === "true" ? "false" : "true");
}


tutorialBtn.addEventListener('click', () => {
    toggleDisplay(tutorial);
})

startGameBtn.addEventListener('click', () => {
    toggleDisplay(gameScreen);
    toggleDisplay(openScreen);
})


