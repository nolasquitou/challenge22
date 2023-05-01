let nameData = prompt("ingrese su nombre")
let genderData = prompt("Ingrese su sexo").toLowerCase();


if (genderData == "hombre") {
    let dolor = prompt("que dolencia tiene?");
    if (dolor == "Dolor abdominal".toLowerCase()) {
        console.log("tienes que hacerte una Ecografía");
    } else {
        console.log("tiene que hacerse otro estudio");
    }
} else if (genderData == "mujer") {
    let dolor = prompt("que dolencia tiene?")
    if (dolor == "dolor abdominal".toLowerCase()) {
        let preg = confirm("esta enbarazada?");
        if (preg) {
            console.log("Turno para una ecografia");
        } else {
            console.log("Turno para Tomografia");
        }
    }else{
        console.log("tiene que hacerse otro estudio");
    }
}


