// attendre que le contenu DOM soit chargé à l'aide de l'événement DOMContentLoaded 
document.addEventListener('DOMContentLoaded', function() {
    //récupérer les éléments du DOM
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

//fonction qui génère une couleur aléatoire

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    //écouteur d'événement pour le bouton changer de couleur

    changeColorBtn.addEventListener('click', function() {
        colorBox.style.backgroundColor = getRandomColor();
    });
    
});
