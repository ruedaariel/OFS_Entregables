"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motocicleta = void 0;
var Motocicleta = /** @class */ (function () {
    function Motocicleta(patente, marca, modelo, anio, titular) {
        this.titular = "";
        this.historico = [];
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.titular = titular;
        this.activo = true;
    }
    Motocicleta.prototype.getPatente = function () {
        return this.patente;
    };
    Motocicleta.prototype.setPatente = function (value) {
        this.patente = value;
    };
    Motocicleta.prototype.setHistorico = function (titularActual, titularFuturo) {
        var transferidoHoy = new Date;
        var fechaTransferencia = transferidoHoy.getUTCDate().toString() + "/" + transferidoHoy.getUTCMonth().toString() + "/" + transferidoHoy.getUTCFullYear().toString();
        this.historico.push({ estado: "transferido", titular: titularActual, fecha: fechaTransferencia });
        this.titular = titularFuturo;
    };
    Motocicleta.prototype.getMarca = function () {
        return this.marca;
    };
    Motocicleta.prototype.getModelo = function () {
        return this.modelo;
    };
    Motocicleta.prototype.getAnio = function () {
        return this.anio;
    };
    Motocicleta.prototype.getTitular = function () {
        return this.titular;
    };
    Motocicleta.prototype.getHistorico = function () {
        return this.historico;
    };
    Motocicleta.prototype.getActivo = function () {
        return this.activo;
    };
    Motocicleta.prototype.setActivo = function () {
        // niega la condicion de activo true va a false y false va a true
        this.activo = !this.activo;
    };
    return Motocicleta;
}());
exports.Motocicleta = Motocicleta;
