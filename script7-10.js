function helloWorld() {
    document.write("Hello everyone ");
    document.write("World !");
}
// A ce moment, Rien d'affiché, mais on a juste défini la fonction

helloWorld();

function getNewsFromDataBase()
{
    //code...
}

/*
Hiérarchiser ses fonctions pour s'aider peut-être utile
Une fonction = Une utilité ( Dans le sens elle ne fait pas plusieurs choses
*/
/*
myFunction
my_function
MyFunction
My_Function
Ils fonctionnent tous, juste garder la même convention de nommage pour TOUT.
*/
let signal = "OK";
function functionName()
{
    let data2 = 14;
    document.write(data2);
    document.write("TEST : " + signal);
    console.log("Test : " + signal);
}
functionName();
/* Respecte les portées */
// console.log(data2)
// Ici erruer puisque data2 défini dans la fonction, mais appelé en dehors
// Uncaught ReferenceError : data2 is not defined


function sum(nb1, nb2) {
    let resultat = nb1 + nb2;
    return resultat;
}

sum(4, 6);
console.log("JASON " + sum(3, 6)); // Utiliser result ici, car il a été déclaré à l'extérieur de la fonction

console.log(console.log("Thomas"))

console.error("Alban est beaugosse")

