"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Automovil = void 0;
var Automovil = /** @class */ (function () {
    function Automovil(patente, marca, modelo, anio) {
        //const formatoPatente = /[A-Z]{2}[0-9]{3}[A-Z]{2}/;
        //const anioActual = new Date().getFullYear();
        this.titular = "";
        this.historico = [];
        this.activo = false;
        //if(!formatoPatente.test(patente) || anio < 1800 || anio > anioActual) { return false};
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    Automovil.prototype.getPatente = function () {
        return this.patente;
    };
    Automovil.prototype.setPatente = function (value) {
        this.patente = value;
    };
    Automovil.prototype.getMarca = function () {
        return this.marca;
    };
    Automovil.prototype.setMarca = function (value) {
        this.marca = value;
    };
    Automovil.prototype.getModelo = function () {
        return this.modelo;
    };
    Automovil.prototype.setModelo = function (value) {
        this.modelo = value;
    };
    Automovil.prototype.getAnio = function () {
        return this.anio;
    };
    Automovil.prototype.setAnio = function (value) {
        this.anio = value;
    };
    Automovil.prototype.getTitular = function () {
        return this.titular;
    };
    Automovil.prototype.setTitular = function (value) {
        this.titular = value;
    };
    Automovil.prototype.getHistorico = function () {
        return this.historico;
    };
    Automovil.prototype.setHistorico = function (value) {
        this.historico = value;
    };
    return Automovil;
}());
exports.Automovil = Automovil;
