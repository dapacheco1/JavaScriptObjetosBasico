class Student{

    //sin RORO
    // constructor(name,age,cursosAprobados){
    //     this.name = name;
    //     this.age = age;
    //     this.cursosAprobados = cursosAprobados;
    // }

    //CON RORO
    constructor({
        name,
        age =  0,
        cursosAprobados = [], //si no envio un curso, este atributo por defecto tiene este valor
        email,
        facebook,
        instagram,
    }){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.email = email;
        this.facebook = facebook;
        this.instagram = instagram;
    }

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
}

//sin RORO
// const st1 = new Student("Danny",20,["HTML","CSS"]);

//con RORO
const st1 = new Student({
    email: "dapacheco@mydomain.com",
    name:"Danny",
    facebook: "",
    instagram: "",
});
st1.aprobarCurso("JS");
console.log(st1);