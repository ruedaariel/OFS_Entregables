import { Automovil } from "./Automovil";
import { Motocicleta } from "./Motocicleta";
import { Camion } from "./Camion";
import { RAutomotor } from "./RegistroAutomotor";

let auto = new Automovil("AE228EW","Volkswagen","Tiguan",2020);
let auto1 = new Automovil("AE228EW","Volkswagen","Tiguan",2022);

let moto = new Motocicleta("A228EWZ","Honda","Gaucha",2020);
let camion = new Camion("AF228AK","Volvo","FH",2020);

let RAutomotorNro2 = new RAutomotor("2","Olavarria");

console.log(RAutomotorNro2.getCiudad());



console.clear();
console.log("auto: " + auto.getPatente());
console.log("auto1: " + auto1.getMarca());
console.log("moto: " + moto.getMarca());
console.log("Camion: " + camion.getModelo());
console.log(RAutomotorNro2.getCiudad());

console.log(RAutomotorNro2.setAltaAuto(auto));
console.log(RAutomotorNro2.setAltaAuto(auto1));
console.log(RAutomotorNro2.setAltaAuto(auto)); // este está duplicado y la logica no lo incluye
RAutomotorNro2.getListadoAutos(); // listado de autos activos