# JavaScript Programación Orientada a Objetos

Cuando programamos, no existe una única forma de resolverlos y usamos un paradigma.

Los paradigmas fueron creados para solucionar los problemas que presentaban los paradigmas "viejos". Que un paradigma sea mas nuevo que otro, no significa sea mejor.

Debemos analizar en qué situaciones resulta mas beneficioso trabajar con ciertos paradigmas.

## Problemas que resuelve la POO

- Orden: Cada elemento que usamos, se llama objeto y todo lo que esté relacionado con el objeto, debe estar dentro de este. Cada objeto tiene sus métodos y atributos. Esto evita que se tenga en desorden la lógica del objeto.

- Reutilizar código: Evita que se escriba el mismo código para crear el mismo objeto, es por ello que se usan clases para instanciar objetos de estas clases.

JavaScript es un lenguaje orientado a objetos, basado en **prototipos**.

Por dentro, todos los objetos están creados en base a prototipos.

## Qué es un objeto en JavaScript?

- Prototipo: Utiliza la sintáxis de función en la cuál se definen los métodos y atributos. Para manipular sus atributos se utiliza el puntero this. Los objetos instanciados llevan el nombre del prototipo.

- Objetos literales: Es la instancia del prototipo Object, mas no es instancia de un prototipo que el programador haya desarrollado.

El atributo __proto__ tiene varios métodos, a los cuales se puede acceder sin necesidad de especificar que se utiliza este atributo.

El método myObject.hasOwnProperty("mi propiedad"); devuelve verdadero si la propiedad existe en un objeto y falso si no existe. Esto sucede porque todos los prototipos,objetos literales,arrays y otros tipos de dato en JavaScript tienen un protitpo padre, ya sea Object, Array, String.

## Cómo crear objetos y prototipos en JavaScript?

Para crear un objeto literal, se lo realiza de la siguiente forma:

```
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
```

Para acceder a sus metodos o atributos, se los realiza utilizando el nombre del objeto, seguido de un punto y el método o atributo que se desea utilizar.

```
dapacheco1.aprobarCurso("Programacion Orientada a Objetos");
```

Para crear prototipos se utiliza la notación de funciones. Para referirnos a los atributos propios del prototipo se utiliza el puntero this, y para crear los métodos se utiliza **myPrototype.prototype.myMethodName = function(){}**.

Si se quiere utilizar clases en JavaScript es importante recalcar que estas tienen una sintáxis mas amigable y por dentro siguen siendo prototipos.

```
class Student{

    constructor(name,age,cursosAprobados){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
}
```

Para instanciar una clase, se lo realiza de esta forma:

```
const st1 = new Student("Danny",20,["HTML","CSS"]);
```

Y para manipular sus métodos se realiza con el nombre del objeto seguido de un punto y el atributo o el método que se desea manipular.

```
st1.aprobarCurso("JS");
console.log(st1);
```

En programación existe un patrón llamado RORO (Recibe un objeto, Retorna un objeto).

### RORO (Recibe un objeto, retorna un objeto)

Existen casos en los que tenemos varios atributos en un objeto. El problema de esto es que al momento de desarrollar los programas, se tiende a olvidar el orden de los atributos en el constructor o se tienen errores al momento de enviar los atributos al constructor, es por ello que en JavaScript, se puede enviar los atributos en forma de un objeto.

La clase utilizando este patrón se vería de la siguiente forma:

```
class Student{
    //con RORO
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
```

Y cuando se instancia un objeto de esta clase, se lo realiza de esta forma:

```
//con RORO
const st1 = new Student({
    email: "dapacheco@mydomain.com",
    name:"Danny",
    facebook: "",
    instagram: "",
});
```

No importa el orden en que enviemos los parámetros, eso es lo que solucionamos con RORO.
