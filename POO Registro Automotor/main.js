"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Automovil_1 = require("./Automovil");
var readline_sync_1 = require("readline-sync");
//import colors from "colors";
var auto = new Automovil_1.Automovil("AE228EW", "Volkswagen", "Tiguan", 2020);
var formatoPatente = /[A-Z]{2}[0-9]{3}[A-Z]{2}/;
var anioActual = new Date().getFullYear();
//if(!formatoPatente.test(patente) || anio < 1800 || anio > anioActual) { return false};
if (ingresaDatosAuto()) {
    console.log("exito");
}
else {
    console.log("fracaso");
}
console.log(auto.getPatente());
function ingresaDatosAuto() {
    // solicita entrada de los datos del auto a ingresar y valida las entradas
    var formatoPatente = /[A-Z]{2}[0-9]{3}[A-Z]{2}/;
    var anioActual = new Date().getFullYear();
    var patenteAuto;
    var marcaAuto;
    var modeloAuto;
    var anioAuto;
    patenteAuto = readline_sync_1.default.question("Ingrese la patente del auto: ");
    marcaAuto = readline_sync_1.default.question("Ingrese la marca del auto:");
    modeloAuto = readline_sync_1.default.question("Ingrese el modelo del auto:");
    anioAuto = readline_sync_1.default.questionInt("Ingrese el anio de fabricación:");
    if (!formatoPatente.test(patenteAuto) || anioAuto < 1800 || anioAuto > anioActual) {
        console.log("los datos ingresados no son válidos");
        return false;
    }
    var nuevoAuto = new Automovil_1.Automovil(patenteAuto, marcaAuto, modeloAuto, anioAuto);
    return true;
}
