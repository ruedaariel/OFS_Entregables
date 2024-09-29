"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RAutomotor = void 0;
var Automovil_1 = require("./Automovil");
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
    RAutomotor.prototype.getHistoricoAuto = function (patente) {
        var historico = this.getAuto(patente);
        return historico[0].getHistorico();
    };
    // --------------------------------------------------------------------
    RAutomotor.prototype.getTransfiereAuto = function (patente, titularActual, titularFuturo) {
        var autoATransferir = this.getAuto(patente);
        // verifico que el auto exista y este activo. si no lo esta retorna false
        if (!autoATransferir[0].getActivo() || autoATransferir.length == 0) {
            return false;
        }
        else {
            autoATransferir[0].setHistorico(titularActual, titularFuturo); // transfiero datos al historico del auto
            return true;
        }
    };
    // --------------------------------------------------------------------
    // alta de un vehiculo
    RAutomotor.prototype.setAltaAuto = function (patente, marca, modelo, anio, titular) {
        // verifico que el auto a dar alta no exista en la lista de autos gestionados
        // si existe retorno falso para control
        // si no existe lo agrego y retorno true para control
        var formatoPatente = /[A-Z]{2}[0-9]{3}[A-Z]{2}/; // uso una expresion regular para validad la patente AA999AA
        var anioActual = new Date().getFullYear();
        if (!formatoPatente.test(patente) || anio < 1800 || anio > anioActual) {
            return false;
        }
        // creo el auto
        var altaAuto = new Automovil_1.Automovil(patente, marca, modelo, anio, titular);
        // verifico si no existe en la base de autos
        if (this.buscaAuto(altaAuto.getPatente())) {
            return false;
        }
        else {
            this.autos.push(altaAuto);
            return true;
        }
    };
    // --------------------------------------------------------------------
    RAutomotor.prototype.setBajaAuto = function (patenteBajaAuto) {
        // verifico que el auto a dar baja exista en la lista de autos gestionados
        // si existe retorno true con la baja hecha para control
        // si no existe retorno false para control
        if (!this.buscaAuto(patenteBajaAuto)) {
            return false;
        }
        else {
            this.getAuto(patenteBajaAuto)[0].setActivo();
            return true;
        }
    };
    //private buscaAuto (autoABuscar : Automovil) : boolean{
    RAutomotor.prototype.buscaAuto = function (patente) {
        var estaElAuto = false;
        this.autos.forEach(function (auto) {
            if (auto.getPatente() === patente) {
                estaElAuto = true;
            }
        });
        return estaElAuto;
    };
    return RAutomotor;
}());
exports.RAutomotor = RAutomotor;
