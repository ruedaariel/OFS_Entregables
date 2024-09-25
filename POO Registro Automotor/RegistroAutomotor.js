"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RAutomotor = void 0;
require("colors");
var RAutomotor = /** @class */ (function () {
    function RAutomotor(numero, ciudad) {
        this.numero = numero;
        this.ciudad = ciudad;
        this.autos = [];
        this.motos = [];
        this.camiones = [];
    }
    RAutomotor.prototype.getNro = function () {
        return this.numero;
    };
    RAutomotor.prototype.getCiudad = function () {
        return this.ciudad;
    };
    // muestra el listado de los autos activos preguntado por el getActivo
    RAutomotor.prototype.getListadoAutos = function () {
        var _this = this;
        // devuelve listado de autos activos
        this.autos.forEach(function (auto) {
            if (auto.getActivo()) {
                console.log("| " + _this.igualoCadena(auto.getPatente(), 11) +
                    "| " + _this.igualoCadena(auto.getMarca(), 13) +
                    "| " + _this.igualoCadena(auto.getModelo(), 13) +
                    "| " + _this.igualoCadena(auto.getAnio().toString(), 7) + "|");
            }
            //console.log(auto.getPatente())}
        });
    };
    // muestra el listado de los autos preguntado por el getActivo
    RAutomotor.prototype.getListadoAutosBaja = function () {
        var _this = this;
        // devuelve listado de autos dados de baja
        this.autos.forEach(function (auto) {
            if (!auto.getActivo()) {
                console.log("| " + _this.igualoCadena(auto.getPatente(), 11) +
                    "| " + _this.igualoCadena(auto.getMarca(), 13) +
                    "| " + _this.igualoCadena(auto.getModelo(), 13) +
                    "| " + _this.igualoCadena(auto.getAnio().toString(), 7) + "|");
            }
        });
    };
    // alta de un vehiculo
    RAutomotor.prototype.setAltaAuto = function (altaAuto) {
        // verifico que el auto a dar alta no exista en la lista de autos gestionados
        // si existe retorno falso para control
        // si no existe lo agrego y retorno true para control
        if (this.buscaAuto(altaAuto)) {
            return false;
        }
        else {
            this.autos.push(altaAuto);
            return true;
        }
    };
    RAutomotor.prototype.setBajaAuto = function (bajaAuto) {
        // verifico que el auto a dar baja exista en la lista de autos gestionados
        // si existe retorno true con la baja hecha para control
        // si no existe retorno false para control
        if (!this.buscaAuto(bajaAuto)) {
            return false;
        }
        else {
            bajaAuto.setActivo();
            return true;
        }
    };
    RAutomotor.prototype.buscaAuto = function (autoABuscar) {
        if (this.autos.indexOf(autoABuscar) == -1) {
            return false;
        }
        return true;
    };
    RAutomotor.prototype.igualoCadena = function (cadena, largo) {
        var largoCadena = cadena.length;
        var cadenaNormalizada = cadena.padEnd(largo, " ");
        return cadenaNormalizada;
    };
    return RAutomotor;
}());
exports.RAutomotor = RAutomotor;
