"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motocicleta = void 0;
var Motocicleta = /** @class */ (function () {
    function Motocicleta(patente, marca, modelo, anio, titular) {
        this.titular = "";
        this.historico = [];
        this.activo = false;
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
    return Motocicleta;
}());
exports.Motocicleta = Motocicleta;
