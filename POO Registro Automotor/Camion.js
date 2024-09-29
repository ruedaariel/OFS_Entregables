"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var Camion = /** @class */ (function () {
    function Camion(patente, marca, modelo, anio, titular) {
        this.titular = "";
        this.historico = [];
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.titular = titular;
        this.activo = true;
    }
    Camion.prototype.getPatente = function () {
        return this.patente;
    };
    Camion.prototype.setPatente = function (value) {
        this.patente = value;
    };
    Camion.prototype.setHistorico = function (titularActual, titularFuturo) {
        var transferidoHoy = new Date;
        var fechaTransferencia = transferidoHoy.getUTCDate().toString() + "/" + transferidoHoy.getUTCMonth().toString() + "/" + transferidoHoy.getUTCFullYear().toString();
        this.historico.push({ estado: "transferido", titular: titularActual, fecha: fechaTransferencia });
        this.titular = titularFuturo;
    };
    Camion.prototype.getMarca = function () {
        return this.marca;
    };
    Camion.prototype.getModelo = function () {
        return this.modelo;
    };
    Camion.prototype.getAnio = function () {
        return this.anio;
    };
    Camion.prototype.getTitular = function () {
        return this.titular;
    };
    Camion.prototype.getHistorico = function () {
        return this.historico;
    };
    Camion.prototype.getActivo = function () {
        return this.activo;
    };
    Camion.prototype.setActivo = function () {
        // niega la condicion de activo true va a false y false va a true
        this.activo = !this.activo;
    };
    return Camion;
}());
exports.Camion = Camion;
