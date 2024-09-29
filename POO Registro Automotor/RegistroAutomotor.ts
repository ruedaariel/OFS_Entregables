import { Automovil } from "./Automovil";
import { Motocicleta } from "./Motocicleta";
import { Camion } from "./Camion";

import "colors";

export class RAutomotor {

    private numero: string;
    private ciudad: string;
    private autos: Automovil[];
    private motos: Motocicleta[];
    private camiones: Camion[];


    public constructor(numero: string, ciudad: string) {


        this.numero = numero;
        this.ciudad = ciudad;
        this.autos = [];
        this.motos = [];
        this.camiones = [];
    }


    public getNro(): string {
        return this.numero;
    }

    public getCiudad(): string {
        return this.ciudad;
    }

    // devuelve una copia del arreglo de todos los autos del registro
    public getAutos(activo: boolean): Automovil[] {

        return this.autos.filter(auto => (auto.getActivo() == activo));

    }

    public getAuto(patente: string): Automovil[] {

        return this.autos.filter(auto => (auto.getPatente() === patente));

    }


    public getHistoricoAuto (patente: string): Object {

        let historico = this.getAuto(patente);

        return historico[0].getHistorico();

    }



    // --------------------------------------------------------------------

    public getTransfiereAuto(patente: string, titularActual: string, titularFuturo: string): boolean {

        let autoATransferir = this.getAuto(patente);

        // verifico que el auto exista y este activo. si no lo esta retorna false
        if (!autoATransferir[0].getActivo() || autoATransferir.length == 0) { return false; }
        else {

            autoATransferir[0].setHistorico(titularActual, titularFuturo);      // transfiero datos al historico del auto
            return true;
        }

    }

    // --------------------------------------------------------------------

    // alta de un vehiculo

    public setAltaAuto(patente: string, marca: string, modelo: string, anio: number, titular: string): boolean {

        // verifico que el auto a dar alta no exista en la lista de autos gestionados
        // si existe retorno falso para control
        // si no existe lo agrego y retorno true para control

        const formatoPatente = /[A-Z]{2}[0-9]{3}[A-Z]{2}/; // uso una expresion regular para validad la patente AA999AA
        const anioActual = new Date().getFullYear();

        if (!formatoPatente.test(patente) || anio < 1800 || anio > anioActual) {
            
            return false;
        }
        // creo el auto
        let altaAuto = new Automovil(patente, marca, modelo, anio, titular);

        // verifico si no existe en la base de autos
        if (this.buscaAuto(altaAuto.getPatente())) { return false; }

        else { this.autos.push(altaAuto); return true; }
    }

    // --------------------------------------------------------------------
    public setBajaAuto(patenteBajaAuto: string): boolean {

        // verifico que el auto a dar baja exista en la lista de autos gestionados
        // si existe retorno true con la baja hecha para control
        // si no existe retorno false para control

        if (!this.buscaAuto(patenteBajaAuto)) { return false; }
        else { this.getAuto(patenteBajaAuto)[0].setActivo(); return true; }
    }


    //private buscaAuto (autoABuscar : Automovil) : boolean{
    private buscaAuto(patente: string): boolean {

        let estaElAuto: boolean = false;

        this.autos.forEach(auto => {

            if (auto.getPatente() === patente) { estaElAuto = true; }

        });
        return estaElAuto;
    }
}

