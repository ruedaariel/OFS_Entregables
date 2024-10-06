import { Automovil } from "./Automovil";
import readline from "readline-sync";
//import colors from "colors";

//let auto = new Automovil("AE228EW","Volkswagen","Tiguan",2020);

const formatoPatente = /[A-Z]{2}[0-9]{3}[A-Z]{2}/;
const anioActual = new Date().getFullYear();

        //if(!formatoPatente.test(patente) || anio < 1800 || anio > anioActual) { return false};

if (ingresaDatosAuto()) {console.log("exito")}
    else  {console.log("fracaso")}

//console.log(auto.getPatente());



function ingresaDatosAuto (): boolean {


// solicita entrada de los datos del auto a ingresar y valida las entradas
const formatoPatente = /[A-Z]{2}[0-9]{3}[A-Z]{2}/;
const anioActual = new Date().getFullYear();

let patenteAuto : string;
let marcaAuto : string;
let modeloAuto : string;
let anioAuto : number;

patenteAuto = readline.question("Ingrese la patente del auto: ");
marcaAuto = readline.question("Ingrese la marca del auto:");
modeloAuto = readline.question("Ingrese el modelo del auto:");
anioAuto = readline.questionInt("Ingrese el anio de fabricación:");

if(!formatoPatente.test(patenteAuto) || anioAuto < 1800 || anioAuto > anioActual) { 
    console.log("los datos ingresados no son válidos");
    return false;}

let nuevoAuto = new Automovil(patenteAuto,marcaAuto,modeloAuto,anioAuto,"");
return true;

}