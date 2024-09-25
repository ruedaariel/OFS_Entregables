"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var Camion = /** @class */ (function () {
    function Camion(patente, marca, modelo, anio, titular) {
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
    Camion.prototype.getPatente = function () {
        return this.patente;
    };
    Camion.prototype.setPatente = function (value) {
        this.patente = value;
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
    return Camion;
}());
exports.Camion = Camion;
