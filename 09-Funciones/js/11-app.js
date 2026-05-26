
const aprendiendo = function(tecnologia, tecnologia2){
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprendiendo("JavaScript", "Node.js");

// el parentesis no el obligatorio si solo tiene un parametro
const aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia}`;
console.log(aprendiendo2("JavaScript"));


// el parentesis si es obligatorio ya que tiene mas de un parametro
const aprendiendo3 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;
console.log(aprendiendo3("JavaScript", "Node.js"));