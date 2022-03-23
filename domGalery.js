

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

let newTitleProject = document.createElement('h3');
newTitleProject.classList.add("descriptionWildProject");
newTitleProject.innerHTML = `${projects[i].name}`;

let newDescrProject = document.createElement('p');
newDescrProject.classList.add("descriptionWildProject");
newDescrProject.innerHTML = `${projects[i].descr}`;

newDivProject.appendChild(newImgProject);
newDivProject.appendChild(newTitleProject);
newDivProject.appendChild(newDescrProject );
//on affiche la nouvelle div projet créée sous main
main.appendChild(newDivProject);

}