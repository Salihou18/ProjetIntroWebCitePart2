//Selectionner les éléments html
let container = document.querySelector('.container');
let btn = document.querySelector('.btn_jeu');
let scoreContainer = document.querySelector('.score');
let tempsContainer = document.querySelector('.temps');

btn.onclick=function()
{
    let score = 0;
    let temps = 10;
    container.innerHTML = "";

    let interval = setInterval(function montreCible(){
        //Creation de la cible
        let Cible = document.createElement('img');
        Cible.id="Cible";
        Cible.src="../images/meatball.png"
        container.appendChild(Cible);
        Cible.style.top=Math.random() * (500-Cible.offsetHeight) + 'px';
        Cible.style.left=Math.random() * (600-Cible.offsetWidth) + 'px';
     
        //Faire disparaitre la cible
        setTimeout(function(){
            Cible.remove();
        },2000)

        //Lorsque l'on clique sur la cible
    Cible.onclick=function(){
        score +=1;
        Cible.style.display= 'none'
    }
    temps -=1;

    //Afficher les infos
    scoreContainer.innerHTML = `Score : ${score}`
    tempsContainer.innerHTML = `Temps : ${temps}`
    
    //Lorsque le temps est écoulé
    if(temps ==0)
    {
        clearInterval(interval);
        container.innerHTML = "Le jeu est finis"
    }
    }, 1000);
}