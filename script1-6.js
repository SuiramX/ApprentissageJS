confirm("Ceci est un message du langage JS"); // Variable alert = pop-up

/*
   Ceci est un commentaire sur plusieurs lignes.
*/
// Ceci est un commentaire sur une seule ligne

document.write("Hello World !"); // Attention les minuscules sont importants
// Utilisation de la console importante en JS
// CTRL + Shift + J raccourci

console.log("Problème !")

console.clear();

console.error("Problème !" +
    "Jason X Shrek X Jean L'asticieux");

// Les variables
/* Mots interdits :
Break, case, catch, class, continue, debugger
default, delete, do, else, enum, export,
extends, finally, for, function, if,
implements, import in, instanceof, interface,
let, new, package, private, protected, public,
return, static, super, switch, this, throw,
try, typeof, var, void, while, with, yield
 */
var age;
// On peut déclarer une variable sans rien
// var age = 14; est possible
age = 14;

document.write("<br>" + age);
alert(age)

age=28;
document.write("<br>" + age);

age="Jason";
document.write("<br>" + age);


document.write("<br>" + typeof  age);

var majeur=true;
document.write("<br>" + typeof majeur);

var data = 141;

document.write("<br>" + data);

var name = prompt("Quel est votre nom ?");
document.write("<br>" + name);
document.write(typeof name);

var age = prompt("Quel est votre âge ?");

age = parseInt(age);

document.write("<br>" + age);
document.write(typeof age);

/*
    Résumé :
    document.write() : écrit dans le document
    alert() : pop-up
    confirm() : pop-up avec bouton OK et Annuler

    parseInt() : transforme une chaine de caractère en nombre
    parseFloat() : transforme une chaine de caractère en nombre à virgule

    const : valeur constante (non modifiable) pour nombres, chaînes, booléens...
    type des données constant, mais contenu modifiable pour les tableaux et objets.
 */

const PI = 3.14;
document.write("<br>" + PI);
// PI = 2 * PI; // Erreur

// Les opérateurs
let result = 1 + 2;

/*
    let data = prompt();
    let data2 = data;

    Les opérateurs logiques :
    =
    +, -, *, /, %
    ++, --
    <, >, <=, >=, ==, !=,
    !== Opérateur qui va retourner vrai SI le type des données comparées est différent OU si la valeur est différente, si les deux sont différents
    === Vérifié l'égalité et le type
*/

document.write("<p></p>" + 5%2);

let N=5;

document.write("<br>" + N);

N = N+1;
// N+=1;
document.write("<br>" + N);
N-=2;
document.write("<br>" + N);

N++;//++N
/* Post incrémentation : N++
                            -> N = N
                            -> N + 1*/
/* Pré incrémentation : ++N
                            -> N + 1
                            -> N = N + 1
 */
N--;//--N
/* Post décrémentation : N--
                          -> N = N
                          -> N - 1
*/
/* Pré décrémentation : --N
                            -> N - 1
                            -> N = N
*/
// Conseil : Tester avec document.write()
document.write(8 < 12);
document.write(8 === "8");
document.write(8 !== "8");



// Les structures conditionnelles
/* if (condition) {
    // Instructions
}
else {
    // Instructions
}
*/
document.write("<p> Bonjour, " + name + " vous avez " + age + " ans.")
if (name === "Marius")
{
    document.write("<p> Bonjour Marius !</p>");
    let number = 6;
    // let sert à déclarer une variable juste dans ce bloc
    if (number === 5)
    {
        document.write("<p> Bravo !</p>");
    }
    else if (number < 0){
        document.write("<p> Nombre négatif !</p>");
    }
    else if (number > 10){
        document.write("<p> Nombre trop grand !</p>");
    }
    else {
        document.write("<p></p>" + number);
    }
}
else
{
    document.write("<p> Bonjour inconnu !</p>");
}
//référence à la ligne 52 pour tester le pop-up en if/else

console.log("Fin du script !");


/*
   <condition> ? <cas_vrai> : <cas_faux>
*/
let number =15;
let res = (number > 10) ? "number > 10" : "number <= 10";
// document.write((number > 10) ? "number > 10" : "number <= 10");
document.write(res);
/* Problème ICI
let number = 6;

switch (number) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        document.write("number < 5");
        break;
    case 5:
        document.write("number = 5");
        break;
    default:
        alert("Pas de valeur reconnue...");
        break;
}
*/
/* Les boucles */
/*document.write(" a");
document.write(" a");
document.write(" a");
 Bien évidemment c'est une boucle for qu'il faut utiliser... */
let i = 0;

while (i<5 )
{
    document.write("b");
    i++;
}

for (let i = 0 ; i < 10 ; ++i)
{
    document.write("a");

    if(i===5)
        continue;
    // Le continue sert à skipper la suite avec le document.write("b "), Donc si on regarde bien, il n'y a pas le b à i=5.
    document.write("b ");
}

/*
    break;
    continue;
 */


/*
Les Fonctions Hors POO
 */
