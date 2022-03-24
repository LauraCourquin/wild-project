// Fichier permettant de gérer les filtres et l'affichage dynamique des projets sur la page galerie.html
// Appelle les données sur data.js

// FONCTION PERMETTANT DE CONtroLER L'AFFICHAGE

function displayProject (projectArray) {
    const main = document.querySelector('#list');
    
    main.innerHTML=null;
    for (let i=0; i<projectArray.length; i++) 
        {
    
        // on créé une newDivProject qui va contenir les éléments descriptifs d'un projet 
        //et qui a une classe cardProject1 ou cardProject2 pour l'affichage en quinquonce en desktop
    
    
        let newDivProject = document.createElement('div');
    
        //si i est impair, le numéro de class affiché est cardProject2
        //sinon c'est cardProject1 (pour gérer le côté quinquonce en desktop)
    
        if (i%2===0) newDivProject.classList.add("cardProject1");
            else newDivProject.classList.add("cardProject2");
    
    
        let newImgProject = document.createElement('img');
        newImgProject.src = `${projectArray[i].imgUrl}`;
    
        //cette balise englobe newTitleProject et newDescrProject et permet de créer un bloc (donc que le titre ne flotte pas à  côté de la descr)
        let newDivProjectDescr = document.createElement('div');
        newDivProjectDescr.classList.add("descriptionWildProject");
    
    
        let newTitleProject = document.createElement('h3');
        newTitleProject.innerHTML = `${projectArray[i].name}`;
    
        let newDescrProject = document.createElement('p');
        newDescrProject.innerHTML = `${projectArray[i].descr}`;
        //on ajoute newTitleProject et newDescrProject a newDivProjectDescr
        newDivProjectDescr.appendChild(newTitleProject);
        newDivProjectDescr.appendChild(newDescrProject );
    
    
        newDivProject.appendChild(newImgProject);
        newDivProject.appendChild(newDivProjectDescr);
        //on affiche la nouvelle div projet créée sous main
        main.appendChild(newDivProject);
    
        }
    
    
    }
    
    
    
    // CODE PERMETTANT D'AFFICHER DYNAMIQUEMENT LES TABLEAUX
  
    let theme='TOUS';
    
    
    let projectsShowed = projects;
    displayProject (projectsShowed);

    
    const thematiques = document.querySelector("#Thématiques");
    


    //ci dessous, (thematiques.addEventListener("change")) permet au moment de l'évènement "la valeur de l'élément ayant la class "thématique" a changé"
//d'éxecuter la fonction
//function : qu'est ce qu'on veut executer quand l'évènement a eu lieu
//evt : l'evenement lui-meme, géré par addEventLister
//Value est réucpéré dans les options du html (mettre la bonne valeur)



     thematiques.addEventListener("change", function (evt){
         theme=evt.target.value;
         const projectsShowed = projects.filter((project)=>
        (
            (project.theme === theme ) || theme==="TOUS"
         )
         );
      
        displayProject (projectsShowed);
    
    });


    // Tentative ratée de mettre un 2è filtre sur les technos
    // const technologies = document.querySelector("#Technologies");



    // technologies.addEventListener("change", function (evt){
    //     techno=evt.target.value;
    //     const projectsShowed = projects.filter((project)=>
    //     (
    //         (project.theme === theme && project.techno === techno) || techno==="TOUS"
    //     )
    //     );
    //     console.log(theme, techno)
    //     displayProject (projectsShowed);

    // });
        
    