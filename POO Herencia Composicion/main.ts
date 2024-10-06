import { RAutomotor } from "./RegistroAutomotor"
import { Automovil } from "./Automovil";

import "colors";
import { Motocicleta } from "./motocicleta";
import { Camion } from "./camion";
import { Console } from "console";

//public constructor ( patente:string, titular:string, radicado:string,marca:string,  
//                     modelo:string, anio:number, nroChasis:string, nroMotor:string)

let rAutomotor = new RAutomotor("2", "Olavarria");

// altaVehiculos = (tipo,"AE228EW","JUan Perez","Olavarria","Volkswagen","Tiguan",2020,"ASDE3245","8456JUYT");
// tipo = 0 es un auto  ****  Tipo = 1 es una moto  **** Tipo = 2 es un camion  
rAutomotor.altaVehiculo(0, "AE228EW", "JUan Perez", "Olavarria", "Ford", "Tiguan", 2020, "ASDE3245", "8456JUYT");
rAutomotor.altaVehiculo(0, "AE229EW", "JUan Perez", "Olavarria", "Ford", "Tiguan", 2020, "ASDE3245", "8456JUYT");
rAutomotor.altaVehiculo(0, "AE227EW", "JUan Perez", "Olavarria", "Ford", "Tiguan", 2020, "ASDE3245", "8456JUYT");
rAutomotor.altaVehiculo(0, "AE226EW", "JUan Perez", "Olavarria", "Ford", "Tiguan", 2020, "ASDE3245", "8456JUYT");
rAutomotor.altaVehiculo(0, "AE224EW", "JUan Perez", "Olavarria", "Ford", "Tiguan", 2020, "ASDE3245", "8456JUYT");

rAutomotor.altaVehiculo(1, "A228ABC", "Juan Perez", "Olavarria", "Honda", "Raptor", 2020, "ASDE3245", "8456JUYT");
rAutomotor.altaVehiculo(1, "A238ABC", "Juan Perez", "Olavarria", "Ducati", "Raptor", 2020, "ASDE3245", "8456JUYT");
rAutomotor.altaVehiculo(1, "A227AHC", "Juan Perez", "Olavarria", "Honda", "Raptor", 2020, "ASDE3245", "8456JUYT");
rAutomotor.altaVehiculo(1, "A128KBC", "Juan Perez", "Olavarria", "KTM", "Raptor", 2020, "ASDE3245", "8456JUYT");
rAutomotor.altaVehiculo(1, "A001ZAQ", "Juan Perez", "Olavarria", "Honda", "Raptor", 2020, "ASDE3245", "8456JUYT");

rAutomotor.altaVehiculo(2, "AE228AJ", "Juan Perez", "Olavarria", "Volvo", "FMX", 2020, "ASDE3245", "8456JUYT");
rAutomotor.altaVehiculo(2, "AG228VL", "Juan Perez", "Olavarria", "Renault", "Truck T", 2020, "ASDE3245", "8456JUYT");
rAutomotor.altaVehiculo(2, "AB228RT", "Juan Perez", "Olavarria", "Volkswagen", "Meteor", 2020, "ASDE3245", "8456JUYT");
rAutomotor.altaVehiculo(2, "AF228AA", "Juan Perez", "Olavarria", "Volswagen", "Constellation", 2020, "ASDE3245", "8456JUYT");
rAutomotor.altaVehiculo(2, "AA228EW", "Juan Perez", "Olavarria", "Volvo", "Tector", 2020, "ASDE3245", "8456JUYT");


//###########################################################################################
// realiza la baja de un auto  Lo marca como Inactivo (no lo borra)
// 0 = transfiere Automovil   1 = transfiere Motocicleta  3 = Transfiere Camion
// la funcion devuelve un Verdadero si se hizo la transferencia o Falso si no pudo hacerse
console.log(" ");
let patenteBaja = "AE224EW"

if (rAutomotor.setBajaVehiculo(0, patenteBaja)) {
    console.log("Se Realizó la baja del Auto con patente: " + patenteBaja.cyan);
    muestraDatosAuto(rAutomotor.getAuto(patenteBaja)[0]);
}
else { console.log("La baja no pudo hacerse. Revise los datos y vuelve a intentearlo".red); }

console.log(" ");

//###########################################################################################
// realiza la baja de una moto  Lo marca como Inactivo (no lo borra)
// 0 = transfiere Automovil   1 = transfiere Motocicleta  3 = Transfiere Camion
// la funcion devuelve un Verdadero si se hizo la transferencia o Falso si no pudo hacerse
console.log(" ");
let patenteMotoBaja = "A001ZAQ"

if (rAutomotor.setBajaVehiculo(1, patenteMotoBaja)) {
    console.log("Se Realizó la baja de la Motocicleta con patente: " + patenteMotoBaja.cyan);
    muestraDatosAuto(rAutomotor.getMoto(patenteMotoBaja)[0]);
}
else { console.log("La baja no pudo hacerse. Revise los datos y vuelve a intentearlo".red); }

console.log(" ");

//###########################################################################################
// realiza la baja de un camion  Lo marca como Inactivo (no lo borra)
// 0 = transfiere Automovil   1 = transfiere Motocicleta  3 = Transfiere Camion
// la funcion devuelve un Verdadero si se hizo la transferencia o Falso si no pudo hacerse
console.log(" ");
let patenteCamionBaja = "AF228AA"

if (rAutomotor.setBajaVehiculo(2, patenteCamionBaja)) {
    console.log("Se Realizó la baja del camion con patente: " + patenteCamionBaja.cyan);
    muestraDatosAuto(rAutomotor.getCamion(patenteCamionBaja)[0]);
}
else { console.log("La baja no pudo hacerse. Revise los datos y vuelve a intentearlo".red); }

console.log(" ");


//###########################################################################################
// realiza la modificación de una moto  = transferencia con datos incorrectos
// 0 = transfiere Automovil   1 = transfiere Motocicleta  3 = Transfiere Camion
// la funcion devuelve un Verdadero si se hizo la transferencia o Falso si no pudo hacerse
console.log(" ");
let patenteTrans = "A001abc"

if (rAutomotor.getTransfiereVehiculo(1, patenteTrans, "JUan Perez", "Javier Milei")) {
    console.log("Transferencia exitosa");
    muestraDatosAuto(rAutomotor.getMoto(patenteTrans)[0]);
}
else { console.log("La tansferencia no pudo hacerse. Revise los datos y vuelve a intentearlo".red); }
console.log(" ");

//###########################################################################################
// realiza la modificación de una moto  = transferencia con datos correctos
// 0 = transfiere Automovil   1 = transfiere Motocicleta  3 = Transfiere Camion
// la funcion devuelve un Verdadero si se hizo la transferencia o Falso si no pudo hacerse
console.log(" ");
let patenteTRansferir = "A227AHC"

if (rAutomotor.getTransfiereVehiculo(1, patenteTRansferir, "JUan Perez", "Javier Milei")) {
    console.log("Se transfirio la moto de patente: " + patenteTRansferir.cyan + " a su nuevo titular: " + "Javier Milei".cyan);
    muestraDatosAuto(rAutomotor.getMoto(patenteTRansferir)[0]);
}
else { console.log("La tansferencia no pudo hacerse. Revise los datos y vuelve a intentearlo".red); }
console.log(" ");




//muestraListadoAutos(true,rAutomotor);
//muestraListadoMotos(true,rAutomotor);
//muestraListadoCamiones(true,rAutomotor);


//############################################################################################



// ######################################################################################
function muestraListadoAutos(activo: boolean, registro: RAutomotor): void {

    let autos = registro.getAutos(activo);

    console.log(`Listado de Autos gestionado por el registro automotor Nro. ${registro.getNro().yellow} de la ciudad de ${registro.getCiudad().yellow}`);


    for (let i = 0; i < autos.length; i++) {

        muestraDatosAuto(autos[i]);

    }

}

// ######################################################################################
function muestraListadoMotos(activo: boolean, registro: RAutomotor): void {

    let autos = registro.getMotos(activo);

    console.log(`Listado de Motos gestionado por el registro automotor Nro. ${registro.getNro().yellow} de la ciudad de ${registro.getCiudad().yellow}`);
    for (let i = 0; i < autos.length; i++) {

        muestraDatosAuto(autos[i]);

    }

}

// ######################################################################################
function muestraListadoCamiones(activo: boolean, registro: RAutomotor): void {

    let camiones = registro.getCamiones(activo);

    console.log(`Listado de Camiones gestionado por el registro automotor Nro. ${registro.getNro().yellow} de la ciudad de ${registro.getCiudad().yellow}`);

    for (let i = 0; i < camiones.length; i++) {

        muestraDatosAuto(camiones[i]);

    }

}



//***************************************************************************************************
function muestraDatosAuto(auto: any): void {
    // devuelve listado de autos dados de baja


    let activo: string = ""

    //console.clear();
    console.log(igualoCadena("┌", 32, "─") + "┬" + igualoCadena("─", 27, "─") + "┬" + igualoCadena("─", 27, "─") + "┐");

    console.log("│ Marca: " + igualoCadena(auto.getMarca(), 23, " ").cyan +
        "│ Modelo: " + igualoCadena(auto.getModelo(), 18, " ").cyan +
        "│ Anio: " + igualoCadena(auto.getAnio().toString(), 20, " ").cyan + "│");
    console.log("│ Nro Chasis: " + igualoCadena(auto.getNroChasis(), 18, " ").cyan +
        "│ Nro Motor: " + igualoCadena(auto.getNroMotor(), 15, " ").cyan +
        "│ Patente: " + igualoCadena(auto.getPatente(), 17, " ").cyan + "│");

    if (auto.getActivo()) {
        activo = "Activo  ";
        console.log("│ Radicado en: " + igualoCadena(auto.getRadicado().cyan, 27, " ") +
            "│ Titular: " + igualoCadena(auto.getTitular(), 16, " ").cyan + " " +
            "│ Estado: " + igualoCadena(activo, 17, " ").cyan + " " + "│ ");
    }
    else {
        activo = "Inactivo";

        console.log("│ Radicado en: " + igualoCadena(auto.getRadicado().cyan, 27, " ") +
            "│ Titular: " + igualoCadena(auto.getTitular(), 16, " ").cyan + " " +
            "│ Estado: " + igualoCadena(activo, 17, " ").red + " " + "│ ");
    }
    console.log(igualoCadena("└", 32, "─") + "┴" + igualoCadena("─", 27, "─") + "┴" + igualoCadena("─", 27, "─") + "┘");



}

//***************************************************************************************************
function muestraDatosMoto(auto: Motocicleta): void {
    // devuelve listado de autos dados de baja

    let activo: string = ""

    //console.clear();
    console.log(igualoCadena("┌", 32, "─") + "┬" + igualoCadena("─", 27, "─") + "┬" + igualoCadena("─", 27, "─") + "┐");

    console.log("│ Marca: " + igualoCadena(auto.getMarca(), 23, " ").cyan +
        "│ Modelo: " + igualoCadena(auto.getModelo(), 18, " ").cyan +
        "│ Anio: " + igualoCadena(auto.getAnio().toString(), 20, " ").cyan + "│");
    console.log("│ Nro Chasis: " + igualoCadena(auto.getNroChasis(), 18, " ").cyan +
        "│ Nro Motor: " + igualoCadena(auto.getNroMotor(), 15, " ").cyan +
        "│ Patente: " + igualoCadena(auto.getPatente(), 17, " ").cyan + "│");

    if (auto.getActivo()) {
        activo = "Activo  ";
        console.log("│ Radicado en: " + igualoCadena(auto.getRadicado().cyan, 27, " ") +
            "│ Titular: " + igualoCadena(auto.getTitular(), 16, " ").cyan + " " +
            "│ Estado: " + igualoCadena(activo, 17, " ").cyan + " " + "│ ");
    }
    else {
        activo = "Inactivo";

        console.log("│ Radicado en: " + igualoCadena(auto.getRadicado().cyan, 27, " ") +
            "│ Titular: " + igualoCadena(auto.getTitular(), 16, " ").cyan + " " +
            "│ Estado: " + igualoCadena(activo, 17, " ").red + " " + "│ ");
    }
    console.log(igualoCadena("└", 32, "─") + "┴" + igualoCadena("─", 27, "─") + "┴" + igualoCadena("─", 27, "─") + "┘");

}






function igualoCadena(cadena: string, largo: number, caracter: string): string {

    let cadenaNormalizada = cadena.padEnd(largo, caracter);

    return cadenaNormalizada;

}
