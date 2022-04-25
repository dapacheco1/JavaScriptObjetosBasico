function LearningPath(path = []){
    this.path = path;
}

LearningPath.prototype.addCourseToPath = function(newCourse){
    this.path.push(newCourse);
}

class Student{

    constructor({
        name,
        age,
        email,
        username,
        facebook = undefined,
        twitter = undefined,
        instagram = undefined,
        learningPaths = [],
        approvedCourses = [],
    }){
        this.name = name;
        this.age = age;
        this.email = email;
        this.username = username;
        this.facebook = facebook;
        this.twitter = twitter;
        this.instagram = instagram;
        this.learningPaths = learningPaths;
        this.approvedCourses = approvedCourses;
    }

    addCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }

    addPath(newPath){
        this.learningPaths.push(newPath);
    }
}

const webDesign = new LearningPath(["HTML,CSS,JS"]);
const ui_ux = new LearningPath(["Mind garage","Design Foundamentals"]);
const bi = new LearningPath(["Introduction to python"]);

const st1 = new Student({
    name: "Danny",
    age: 20,
    email: "dapacheco@mydomain.com",
    username: "dapacheco",
});



st1.addCourse("Basic HTML");
st1.addPath(bi);
st1.addPath(ui_ux);
console.log("Object st1",st1);
