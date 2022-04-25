//creando un objeto literal
const dapacheco1 = {
    //atributos
    name : "Danny",
    age : 20,
    cursosAprobados: ["HTML","CSS","JavaScript"],
    
    //metodos
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    },
};


dapacheco1.aprobarCurso("Programacion Orientada a Objetos");
console.log("Objeto literal",dapacheco1);
