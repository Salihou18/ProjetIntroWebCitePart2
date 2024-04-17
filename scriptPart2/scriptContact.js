// Utiliser de chargement du DOM

document.addEventListener("DOMContentLoaded", function () {

    // //les regex
    const prenomRegex = /^[a-zA-Z]{2,}$/
    const nomRegex = /^[a-zA-Z]{2,}$/
    const regexEmail = /\S+@\S+\.\S+/;
    const rueRegex = /^[\d]+ ([a-zA-Z]{1,})+$/ 
    const villeRegex = /^[a-zA-Z]{2,}$/

    //Cibler le formulaire dans le document

    const formulaire = document.querySelector("#seulform");
    console.log(formulaire)

    //recuperation des champs a travers leurs noms en une seule ligne dans la variable formulaire

    // const { prenom, nom, email, rue, ville } = formulaire.elements;

    // Création  d'un objet client avec les valeurs récupérées dans les champs du formulaire

    const client = {
        prenom: prenom.value,
        nom: nom.value,
        email: email.value,
        rue: rue.value,
        ville: ville.value
    };


    console.log(client);

    //validation des champs

    const champsvalide = (champ) => {

        switch (champ) {
            case 'prenom': {
                if (!prenomRegex.test(prenom.value)) {
                    alert(`Le champ ${champ} est invalide`);
                }
                break;
            }
            case 'nom': {
                if (!nomRegex.test(nom.value)) {
                    alert(`Le champ ${champ} est invalide`);
                }
                break;
            }
            case 'email': {
                if (!regexEmail.test(email.value)) {
                    alert(`Le champ ${champ} est invalide`);
                }
                break;
            }
            case 'rue': {
                if (!rueRegex.test(rue.value)) {
                    alert(`Le champ ${champ} est invalide`);
                }
                break;
            }
            case 'ville': {
                if (!villeRegex.test(ville.value)) {
                    alert(`Le champ ${champ} est invalide`);
                }
                break;
            }
            default:
        }
        
           
        
    }
    formulaire.addEventListener("submit", (e) => {
        //Changer le comportement par defaut d'un formulaire
        e.preventDefault()

        //verification des infos rentrees dans le formulaire
        for (let champ in client) {
            champsvalide(champ)
        }
         // Si toutes les validations passent, le formulaire est soumis
         alert("Formulaire soumis avec succès !");

    })

    //pour ajouter un effet sur le titre de la page "Bienvenue chez Africa Food"
    const titire = document.querySelector("#nom-Restau")


    titire.addEventListener('mouseover', () => {
        titire.style.transform = 'scale(1.2) rotate(3deg)'; // Aggrandir et faire tourner titre
        setTimeout(() => {
            titire.style.transform = 'scale(1) rotate(0)'; // Rétablir la taille et la position initiale de titre après une courte période
        }, 500); // Attendre 500ms avant de rétablir la taille et la position initiale de titre
    });




})