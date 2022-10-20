(function(){
    console.log("carrousel");

    /*----------------- Initialisation des compteurs */
    let index = 0;
    let dernierIndex = -1;

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

        ajouter_img_carrousel(elmImg);
        ajouter_radio_carrousel();
        elImg.dataset.index = index;
        index++;

        /** Ecouteur sur les images du ce la gallerie */
        elmImg.addEventListener("mousedown", function() {
            elmCarrousel.classList.add("carrousel--ouvrir");
            elmCarrousel__figure.children[this.dataset.index].classList.add("carrousel__figure__ing--activer");
        });
        elmCarrousel__form__radio.children[this.dataset.index].checked = true.
        dernierIndex = this.dataset.index;


    }

    function ajouter_img_carrousel(elmImg) {
        elmCarrousel__figure__img.dataset.index = index;
        let elmCarrousel__figure__img = document.createElement('img');
        elmCarrousel__figure__img.setAttribute('src', elmImg.getAttribute('src'));
        elmCarrousel__figure__img.classList.add('carrousel__figure__img');
        elmCarrousel__figure__img.dataset.index = index;
        elmCarrousel__figure.appendChild(elmCarrousel__figure__img);

    }

    /** Ajout d'un radio dans le carrousel */
    function ajouter_radio_carrousel() {
        let elmCarrousel__form__radio = document.createElement('input');
        elmCarrousel__form__radio.type = 'radio';
        elmCarrousel__form__radio.setAttribute('name', 'carrousel__form__radio');
        elmCarrousel__form__radio.setAttribute('class', 'carrousel__form__radio');
        elmCarrousel__form__radio.dataset.index = index;
        index++;
        dernierIndex++;
        elmCarrousel__form.appendChild(elmCarrousel__form__radio);
        elmCarrousel__form__radio.addEventListener('mousedown', function() {
            console.log(this.dataset.index);
            if (elmCarrousel.querySelector('carrousel__figure__img--activer') != null) {

                elmCarrousel.querySelector('carrousel__figure__img--activer').classList.remove('carrousel__figure__img--activer');
            }
            elmCarrousel__figure.children[this.dataset.index].classList.add('carrousel__figure__img--activer');
        })



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


