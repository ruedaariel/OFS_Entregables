"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Automovil_1 = require("./Automovil");
var RegistroAutomotor_1 = require("./RegistroAutomotor");
require("colors");
var auto = new Automovil_1.Automovil("AE228EW", "Volkswagen", "Tiguan", 2020, "Juan Perez");
var auto1 = new Automovil_1.Automovil("AB748EW", "Renault", "Kangoo", 2019, "Pedro Gomez");
var auto2 = new Automovil_1.Automovil("AE324QV", "Volkswagen", "Vento", 2016, "Ariel Rueda");
var RAutomotorNro2 = new RegistroAutomotor_1.RAutomotor("2", "Olavarria");
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
console.log(" metodos => auto.getMarca() - auto.getModelo() - auto.getPatente ");
console.log("La patente del auto marca ".concat(auto.getMarca().yellow, " y modelo ").concat(auto.getModelo().yellow, " es: ").concat(auto.getPatente().green));
console.log("La marca del auto con patente ".concat(auto.getPatente().yellow, " es: ").concat(auto.getMarca().green));
console.log(" ");
console.log("****   Prueba de métodos de Registro automotor   ***".cyan);
console.log(" ");
console.log("*** Metodo para conocer datos del registro Automotor        ***".red);
console.log("*** metodos => RAutomotor.getNro() - RAutomotor.getCiudad() *** ".red);
console.log("El registro automotor Nro. ".concat(RAutomotorNro2.getNro().yellow, " de la ciudad de ").concat(RAutomotorNro2.getCiudad().yellow, " lleva la gestion de estos vehiculos"));
console.log(" ");
console.log("*** Metodo alta de vehiculo en registro Automotor                                    ***".red);
console.log("*** metodos => RAutomotor.getSetAltaAuto (Auto) devuelve True (exito) False(fracaso) ***".red);
console.log("El resultado de dar de alta el auto de patente ".concat(auto.getPatente().yellow, " fue ") + "".concat(RAutomotorNro2.setAltaAuto(auto)).blue + " se dio de alta");
console.log("El resultado de dar de alta el auto de patente ".concat(auto1.getPatente().yellow, " fue ") + "".concat(RAutomotorNro2.setAltaAuto(auto1)).blue + " se dio de alta");
console.log("El resultado de dar de alta el auto de patente ".concat(auto2.getPatente().yellow, " fue ") + "".concat(RAutomotorNro2.setAltaAuto(auto2)).blue + " se dio de alta");
console.log("El resultado de dar de alta el auto de patente ".concat(auto1.getPatente().yellow, " ya existente fue ") + "".concat(RAutomotorNro2.setAltaAuto(auto1)).red + "  no se dio de alta");
console.log(" ");
console.log("*** Metodo listado de vehiculos en registro Automotor activos               ***".red);
console.log("*** usa la funcion muestraListadoAutos(true:boolean, registro: RAutomotor?) ***".red);
console.log(" ");
console.log("| Patente    | Marca        | Modelo       | Anio   |".cyan);
muestraListadoAutos(true, RAutomotorNro2);
console.log(" ");
console.log("*** Metodo baja de vehiculo en registro Automotor establece atributo en False    ***".red);
console.log("*** metodos => RAutomotor.getBajaAuto(Auto) devuelve True (exito) False(fracaso) ***");
console.log(" ");
console.log("El resultado de dar de baja el auto de patente ".concat(auto1.getPatente().yellow, " fue ") + "".concat(RAutomotorNro2.setBajaAuto(auto1)).blue + " se dio de baja");
console.log("Compruebo el atributo Activo del veh\u00EDculo ".concat(auto1.getPatente().yellow, " dado de baja y el estado es ") + "".concat(auto1.getActivo().toString().blue));
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
console.log("*** usa la funcion auto.getAuto(patente): Automovil[] )    ***".red);
console.log(" ");
var autoABuscar = auto;
var autoBuscado = RAutomotorNro2.getAuto(autoABuscar.getPatente());
// si la longitud del arreglo devuelto es 0 significa que el vehículo no esta en la base
// por contrario la respuesta será un arreglo con un sólo elemento
if (autoBuscado.length == 0) {
    console.log("El auto con patente ".concat(autoABuscar.getPatente().yellow, " no esta en este Registro Automotor"));
}
else
    console.log(autoBuscado);
console.log("*** metodo para transferir un auto de un titular a otro. Usa la función                     ***".red);
console.log("*** RegistroAutomotor-getTransfiereAuto(patente,titularActual,titularFuturo): Automovil[] ) ***".red);
console.log(" ");
RAutomotorNro2.getTransfiereAuto("AE228EW", "Pedro Gomez", "Ariel Rueda"); // lo transfiero una vez
RAutomotorNro2.getTransfiereAuto("AE228EW", "Ariel Rueda", "Gladys Herrera"); // lo transfiero una segunda vez
console.log("*** el objeto auto tiene un atributo que va registrando su historia de ***".red);
console.log("*** transferencias lo podemos ver con el metodo auto.getHistorico()    ***".red);
console.log(" ");
var autoTransferido = RAutomotorNro2.getAuto("AE228EW");
var historiaVehiculo = autoTransferido[0].getHistorico();
console.log(historiaVehiculo);
//***************************************************************************************************
function muestraListadoAutos(activo, registro) {
    // devuelve listado de autos dados de baja
    var autos = registro.getAutos(activo);
    autos.forEach(function (auto) {
        console.log("| " + igualoCadena(auto.getPatente(), 11) +
            "| " + igualoCadena(auto.getMarca(), 13) +
            "| " + igualoCadena(auto.getModelo(), 13) +
            "| " + igualoCadena(auto.getAnio().toString(), 7) + "|");
    });
}
function igualoCadena(cadena, largo) {
    var cadenaNormalizada = cadena.padEnd(largo, " ");
    return cadenaNormalizada;
}
