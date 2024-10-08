"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Automovil = void 0;
var Automovil = /** @class */ (function () {
    function Automovil(patente, marca, modelo, anio, titular) {
        this.titular = "";
        this.historico = [];
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.titular = titular;
        this.activo = true;
    }
    Automovil.prototype.getPatente = function () {
        return this.patente;
    };
    Automovil.prototype.setPatente = function (value) {
        this.patente = value;
    };
    Automovil.prototype.setHistorico = function (titularActual, titularFuturo) {
        var transferidoHoy = new Date;
        var fechaTransferencia = transferidoHoy.getUTCDate().toString() + "/" + transferidoHoy.getUTCMonth().toString() + "/" + transferidoHoy.getUTCFullYear().toString();
        this.historico.push({ estado: "transferido", titular: titularActual, fecha: fechaTransferencia });
        this.titular = titularFuturo;
    };
    Automovil.prototype.getMarca = function () {
        return this.marca;
    };
    Automovil.prototype.getModelo = function () {
        return this.modelo;
    };
    Automovil.prototype.getAnio = function () {
        return this.anio;
    };
    Automovil.prototype.getTitular = function () {
        return this.titular;
    };
    Automovil.prototype.getHistorico = function () {
        return this.historico;
    };
    Automovil.prototype.getActivo = function () {
        return this.activo;
    };
    Automovil.prototype.setActivo = function () {
        // niega la condicion de activo true va a false y false va a true
        this.activo = !this.activo;
    };
    return Automovil;
}());
exports.Automovil = Automovil;
