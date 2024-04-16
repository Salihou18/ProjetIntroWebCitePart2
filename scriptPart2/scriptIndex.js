//lier l'affichage du script au chargement du DOM


document.addEventListener("DOMContentLoaded", () => {
 
    //pour ajouter un effet sur le titre de la page "Bienvenue chez Africa Food"
    const titire = document.querySelector("#nom-Restau")


    titire.addEventListener('mouseover', () => {
        titire.style.transform = 'scale(1.2) rotate(3deg)'; // Aggrandir et faire tourner titre
        setTimeout(() => {
            titire.style.transform = 'scale(1) rotate(0)'; // Rétablir la taille et la position initiale de titre après une courte période
        }, 500); // Attendre 500ms avant de rétablir la taille et la position initiale de titre
    });

    
    //recuperer le parent div pour pouvoir selectionner les images a l'interieur de celui-ci


    // const recup = document.querySelector("#les-images")

    const imgList=document.querySelectorAll("img")

    // console.log(imgList)
   
    //ajout des effets sur toutes les images

    for(let image of imgList){

        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.2) rotate(3deg)'; 
        setTimeout(() => {
            image.style.transform = 'scale(1) rotate(0)'; 
        }, 500); 
    });
}



})