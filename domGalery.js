

// PARTIE Du CODE PERMETTANT DE CONtroLER LES CONTENUS
// créé un tableau ne contenant que les éléments e-commerce ou javascript avec un filter

const eCommerceArray = projects.filter((project) =>  project.theme = 'e-commerce');
const JavascriptArray = projects.filter((project) =>  project.techno = 'Javascript');


console.log(eCommerceArray );
console.log(JavascriptArray);


// PARTIE Du CODE PERMETTANT DE CONtroLER L'AFFICHAGE

console.log(projects[0].imgUrl);

const main = document.querySelector('main');

for (let i=0; i<projects.length; i++) {

// on créé une newDivProject qui va contenir les éléments descriptifs d'un projet 
//et qui a une classe cardProject1 ou cardProject2 pour l'affichage en quinquonce en desktop


let newDivProject = document.createElement('div');

//si i est impair, le numéro de class affiché est cardProject2
//sinon c'est cardProject1 (pour gérer le côté quinquonce en desktop)

if (i%2===0) newDivProject.classList.add("cardProject1");
    else newDivProject.classList.add("cardProject2");


let newImgProject = document.createElement('img');
newImgProject.src = `${projects[i].imgUrl}`;

//cette balise englobe newTitleProject et newDescrProject et permet de créer un bloc (donc que le titre ne flotte pas à  côté de la descr)
let newDivProjectDescr = document.createElement('div');
newDivProjectDescr.classList.add("descriptionWildProject");


let newTitleProject = document.createElement('h3');
newTitleProject.innerHTML = `${projects[i].name}`;

let newDescrProject = document.createElement('p');
newDescrProject.innerHTML = `${projects[i].descr}`;
//on ajoute newTitleProject et newDescrProject a newDivProjectDescr
newDivProjectDescr.appendChild(newTitleProject);
newDivProjectDescr.appendChild(newDescrProject );


newDivProject.appendChild(newImgProject);
newDivProject.appendChild(newDivProjectDescr);
//on affiche la nouvelle div projet créée sous main
main.appendChild(newDivProject);

}