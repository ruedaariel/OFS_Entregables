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
    // devuelve una copia del arreglo de todos los autos del registro
    RAutomotor.prototype.getAutos = function (activo) {
        return this.autos.filter(function (auto) { return (auto.getActivo() == activo); });
    };
    RAutomotor.prototype.getAuto = function (patente) {
        return this.autos.filter(function (auto) { return (auto.getPatente() === patente); });
    };
    RAutomotor.prototype.getTransfiereAuto = function (patente, titularActual, titularFuturo) {
        var autoATransferir = this.getAuto(patente);
        autoATransferir[0].setHistorico(titularActual, titularFuturo); // transfiero datos al historico del auto
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
    return RAutomotor;
}());
exports.RAutomotor = RAutomotor;
