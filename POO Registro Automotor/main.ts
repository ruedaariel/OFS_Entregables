import { Automovil } from "./Automovil";
import { Motocicleta } from "./Motocicleta";
import { Camion } from "./Camion";
import { RAutomotor } from "./RegistroAutomotor";

import "colors";
import { blue } from "colors";

let auto = new Automovil("AE228EW","Volkswagen","Tiguan",2020,"Juan Perez");
let auto1 = new Automovil("AB748EW","Renault","Kangoo",2019,"Pedro Gomez");
let auto2 = new Automovil("AE324QV","Volkswagen","Vento",2016,"Ariel Rueda")

let moto = new Motocicleta("A228EWZ","Honda","Gaucha",2020,"Francisco Perez");
let camion = new Camion("AF228AK","Volvo","FH",2020,"Pedro Camionero");

let RAutomotorNro2 = new RAutomotor("2","Olavarria");

//console.log(RAutomotorNro2.getCiudad());



console.clear();
console.log(" ");
console.log(" ");
console.log("*********************************************".bgCyan);
console.log("****   Prueba de métodos de los objetos   ***".bgCyan);
console.log("*********************************************".bgCyan);
console.log(" ");
console.log(" ");



console.log("****   Prueba de métodos de los objetos Auto  ***".cyan);
console.log (" metodos => auto.getMarca() - auto.getModelo() - auto.getPatente ");
console.log(`La patente del auto marca ${auto.getMarca().yellow} y modelo ${auto.getModelo().yellow} es: ${auto.getPatente().green}`);
console.log(`La marca del auto con patente ${auto.getPatente().yellow} es: ${auto.getMarca().green}`);

console.log(" ");

console.log("****   Prueba de métodos de Registro automotor   ***".cyan);
console.log(" ");

console.log("*** Metodo para conocer datos del registro Automotor ***".red);
console.log (" metodos => RAutomotor.getNro() - RAutomotor.getCiudad() ");
console.log(`El registro automotor Nro. ${RAutomotorNro2.getNro().yellow} de la ciudad de ${RAutomotorNro2.getCiudad().yellow} lleva la gestion de estos vehiculos`);
console.log(" ");


console.log("*** Metodo alta de vehiculo en registro Automotor ***".red);
console.log (" metodos => RAutomotor.getSetAltaAuto (Auto) devuelve True (exito) False(fracaso)");
console.log(`El resultado de dar de alta el auto de patente ${auto.getPatente().yellow} fue ` + `${RAutomotorNro2.setAltaAuto(auto)}`.blue + ` se dio de alta`);
console.log(`El resultado de dar de alta el auto de patente ${auto1.getPatente().yellow} fue ` + `${RAutomotorNro2.setAltaAuto(auto1)}`.blue + ` se dio de alta`);
console.log(`El resultado de dar de alta el auto de patente ${auto2.getPatente().yellow} fue ` + `${RAutomotorNro2.setAltaAuto(auto2)}`.blue + ` se dio de alta`);
console.log(`El resultado de dar de alta el auto de patente ${auto1.getPatente().yellow} ya existente fue ` + `${RAutomotorNro2.setAltaAuto(auto1)}`.red + `  no se dio de alta`);
console.log(" ");

console.log("*** Metodo listado de vehiculos en registro Automotor ***".red);

console.log("| Patente    | Marca        | Modelo       | Anio   |".cyan);
RAutomotorNro2.getListadoAutos(); // listado de autos activos

console.log(" ");
console.log("*** Metodo baja de vehiculo en registro Automotor establece atributo en False ***".red);
console.log (" metodos => RAutomotor.getBajaAuto(Auto) devuelve True (exito) False(fracaso)");
console.log(`El resultado de dar de baja el auto de patente ${auto1.getPatente().yellow} fue ` + `${RAutomotorNro2.setBajaAuto(auto1)}`.blue + ` se dio de baja`);
console.log(`Compruebo el atributo Activo del vehículo ${auto1.getPatente().yellow} dado de baja y el estado es ` + `${auto1.getActivo().toString().blue}`);
console.log(" ");

console.log("*** Ejecutamos nuevamente RAutomotorNro2.getListadoAutos() para verificar la baja  ***".red);
console.log("| Patente    | Marca        | Modelo       | Anio   |".cyan);
RAutomotorNro2.getListadoAutos(); // listado de autos activos
console.log(" ");


console.log("*** Metodo RAutomotorNro2.getListadoBajaAutos() para listar los dados de baja  ***".red);
console.log("| Patente    | Marca        | Modelo       | Anio   |".cyan);
RAutomotorNro2.getListadoAutosBaja(); // listado de autos inactivos
console.log(" ");

 

