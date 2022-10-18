(function(){
    console.log("carrousel");
    /*************************** Les éléments du carrousel ****************************/
    /** Le conteneur du carrousel */
    let elmCarrousel = document.querySelector(".carrousel");
    /** Le bouton temporaire pour ouvrir le carrousel */
    let elmBtnModale = document.querySelector(".btn_modale");
    /** Le bouton de fermeture du carrousel */
    let elmBtnModaleFermer = document.querySelector(".btn_fermer");
    /** Figure qui contiendra l'ensemble des images du carrousel */
    let elmCarrousel__figure = document.querySelector(".carrousel__figure");
    /** Formulaire qui contiendra l'ensemble des boutons radio */
    let elmCarrousel__form = document.querySelector(".carrousel__form");
    
    /*************************** Les éléments de la galerie ****************************/
    /** Le conteneur principal de la galerie */
    let elmGalerie = document.querySelector(".galerie");
    let elmGalerieImg = document.querySelectorAll(".galerie figure img");
    
    /** Étape 1 : Parcourir les images de la galerie */
    
    for (const elmImg of elmGalerieImg) {
        console.log(elmImg.getAttribute("src"));

        ajouter_img_carrousel(elmImg);
        // ajouter_radio_carrousel();

    }

    function ajouter_img_carrousel(elmImg) {
        let elmCarrousel__figure__img = document.createElement('img');
        elmCarrousel__figure__img.setAttribute('src', elmImg.getAttribute('src'));
        elmCarrousel__figure__img.classList.add('carrousel__figure__img');
        elmCarrousel__figure.appendChild(elmCarrousel__figure__img);
    }

    
    elmBtnModale.addEventListener('mousedown', function(){
        console.log("bouton boite modale");
        elmCarrousel.classList.add("carrousel--ouvrir");
    })

    elmBtnModaleFermer.addEventListener('mousedown', function(){
        console.log("fermer boite modale");
        elmCarrousel.classList.remove("carrousel--ouvrir");
    })
})()