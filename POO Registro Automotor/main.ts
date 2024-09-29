import { Automovil } from "./Automovil";
import { RAutomotor } from "./RegistroAutomotor";
import { Motocicleta } from "./Motocicleta";
import { Camion } from "./Camion";

import "colors";
import { Console } from "console";




let auto = new Automovil("AE228EW","Volkswagen","Tiguan",2020,"Juan Perez");
let auto1 = new Automovil("AB748EW","Renault","Kangoo",2019,"Pedro Gomez");
let auto2 = new Automovil("AE324QV","Volkswagen","Vento",2016,"Ariel Rueda")


let RAutomotorNro2 = new RAutomotor("2","Olavarria");


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

console.log("*** Metodo para conocer datos del registro Automotor        ***".red);
console.log("*** metodos => RAutomotor.getNro() - RAutomotor.getCiudad() *** ".red);
console.log(`El registro automotor Nro. ${RAutomotorNro2.getNro().yellow} de la ciudad de ${RAutomotorNro2.getCiudad().yellow} lleva la gestion de estos vehiculos`);
console.log(" ");


console.log("*** Metodo alta de vehiculo en registro Automotor                           ***".red);
console.log("*** metodo => RAutomotorNro2.setAltaAuto(patente,marca,modelo,anio,titular) ***".red); 
console.log("*** devuelve True (exito) False(fracaso)                                    ***".red);

let creoAuto  = RAutomotorNro2.setAltaAuto("AE248EW","Volkswagen","Tiguan",2020,"Juan Perez");
let creoAuto1 = RAutomotorNro2.setAltaAuto("AB748EW","Renault","Kangoo",2019,"Pedro Gomez");
let creoAuto2 = RAutomotorNro2.setAltaAuto("AE324QV","Volkswagen","Vento",2016,"Ariel Rueda");
let creoAuto3 = RAutomotorNro2.setAltaAuto("AE324QV","Volkswagen","Vento",2016,"Ariel Rueda");
let creoAuto4 = RAutomotorNro2.setAltaAuto("AA324AZ","Volkswagen","Polo",2016,"Miguel Beltran");
let creoAuto5 = RAutomotorNro2.setAltaAuto("AG222BC","Ford","Ranger",2024,"Willi Alonso");


console.log("El resultado de dar de alta el auto de patente " + "AE228EW".yellow + " fue " + `${creoAuto}`.blue + ` se dio de alta`);
console.log("El resultado de dar de alta el auto de patente " + "AB748EW".yellow + " fue " + `${creoAuto1}`.blue + ` se dio de alta`);
console.log("El resultado de dar de alta el auto de patente " + "AE324QV".yellow + " fue " + `${creoAuto2}`.blue + ` se dio de alta`);
console.log("El resultado de dar de alta el auto de patente " + "AE324QV ya existente".yellow + " fue " + `${creoAuto3}`.blue + ` no se dio de alta`);
console.log(" ");

console.log("*** Metodo listado de vehiculos en registro Automotor activos               ***".red);
console.log("*** usa la funcion muestraListadoAutos(true:boolean, registro: RAutomotor?) ***".red);
console.log(" ");
console.log("| Patente    | Marca        | Modelo       | Anio   |".cyan);

muestraListadoAutos(true, RAutomotorNro2);

console.log(" ");
console.log("*** Metodo baja de vehiculo en registro Automotor establece atributo en False           ***".red);
console.log("*** metodos => RAutomotor.getBajaAuto(patenteAuto) devuelve True (exito) False(fracaso) ***".red);
console.log(" ");


console.log("El resultado de dar de baja el auto de patente " + "AE324QV".yellow + " fue "+ `${RAutomotorNro2.setBajaAuto("AE324QV")}`.blue + ` se dio de baja`);
console.log(" ");

console.log("*** Ejecutamos nuevamente listado de autos para verificar la baja          ***".red);
console.log("*** usa la funcion muestraListadoAutos(false:boolean, registro: RAutomotor ***".red);
console.log(" ");
console.log("| Patente    | Marca        | Modelo       | Anio   |".cyan);

muestraListadoAutos(true, RAutomotorNro2);
console.log(" ");


console.log("*** Metodo RAutomotorNro2.getListadoBajaAutos() para listar los dados de baja  ***".red);
console.log("*** usa la funcion muestraListadoAutos(false:boolean, registro: RAutomotor)    ***".red);
console.log(" ");
console.log("| Patente    | Marca        | Modelo       | Anio   |".cyan);

muestraListadoAutos(false, RAutomotorNro2);
console.log(" ");

console.log("*** Busdo todos los datos de un auto                       ***".red);
console.log("*** usa la funcion RAutomotorNro2.getAuto(patenteABuscar)  ***".red);
console.log(" ");

let patenteABuscar = "AB748EW";
let autoBuscado= RAutomotorNro2.getAuto(patenteABuscar);

// si la longitud del arreglo devuelto es 0 significa que el vehículo no esta en la base
// por contrario la respuesta será un arreglo con un sólo elemento

if (autoBuscado.length == 0){ 
    console.log("El auto con patente " + `${patenteABuscar.yellow}` + " no esta en este Registro Automotor");}
else console.log(autoBuscado[0]);         


console.log("*** metodo para transferir un auto de un titular a otro. Usa la función                     ***".red);
console.log("*** RegistroAutomotor-getTransfiereAuto(patente,titularActual,titularFuturo): Automovil[] ) ***".red);
console.log(" ");


// verifica si la transferencia funciona para un auto que no existe o esta dado de baja
console.log("***  Intento transferir una auto que esta dado de baja  ***".red);
let seTransfirio : boolean = RAutomotorNro2.getTransfiereAuto("AE324QV","Pedro Gomez","Ariel Rueda"); // lo transfiero una vez

if (!seTransfirio) {console.log ("El auto con patente " + "AE324QV".yellow + " no existe o esta dado de baja" )} 

console.log(" ");

// transfiero uno que si existe
RAutomotorNro2.getTransfiereAuto("AG222BC","Ariel Rueda","Willi Alonso");// lo transfiero una segunda vez
RAutomotorNro2.getTransfiereAuto("AG222BC","Willi Alonso","Gladys Herrera");// lo transfiero una segvunda vez

console.log("*** el objeto auto tiene un atributo que va registrando su historia de ***".red);
console.log("*** transferencias lo podemos ver con el metodo auto.getHistorico()    ***".red);
console.log(" ");

let autoTransferido = RAutomotorNro2.getAuto("AG222BC");


console.log ("El historico del auto de patente: " + "AG222BC".yellow + " es el seguiente:")
let historiaVehiculo = RAutomotorNro2.getHistoricoAuto("AG222BC");
console.log(historiaVehiculo);



//***************************************************************************************************
function muestraListadoAutos(activo: boolean, registro: RAutomotor): void {
    // devuelve listado de autos dados de baja

    let autos: Automovil[] = registro.getAutos(activo);

     autos.forEach(auto => {
                
            console.log("| " + igualoCadena(auto.getPatente(),11) +
                        "| " + igualoCadena(auto.getMarca(),13) +
                        "| " + igualoCadena(auto.getModelo(),13) +
                        "| " + igualoCadena(auto.getAnio().toString(),7) + "|");
                    }
        
     )
    }

function igualoCadena (cadena: string, largo:number) : string {

        let cadenaNormalizada = cadena.padEnd(largo, " ");
        
        return cadenaNormalizada;
    
    }
    