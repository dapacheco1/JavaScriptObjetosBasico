//creando prototipos

function Student(name,age,cursosAprobados){

    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

    // this.aprobarCurso = function(nuevoCurso){
    //     this.cursosAprobados.push(nuevoCurso);
    // }
}

//creamos un metodo de aprobar curso para el prototipo Student
Student.prototype.aprobarCurso = function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}

//instancio un objeto de mi prototipo

const s1 = new Student("Danny",20,["HTML","CSS"]);
s1.aprobarCurso("JS");
console.log("Objeto de un prototipo",s1);