import { Automovil } from "./Automovil";
import { Motocicleta } from "./motocicleta";
import { Camion } from "./camion";


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

    // alta de un vehiculo

    public altaVehiculo (tipo:number,patente:string, titular:string, radicado:string, marca:string, modelo:string, anio:number, nroChasis:string, nroMotor:string): boolean {

        // en funcion del tipo de vehículo se direcciona al alta de cada uno
        // 0 = auto ------  1 = motocicleta ------- 2 = camion
        let retorno = false;

        switch (tipo) {
            case 0:
              retorno = this.setAltaAuto(patente, titular, radicado, marca, modelo, anio, nroChasis, nroMotor);
              break;
            case 1:
              retorno = this.setAltaMoto(patente, titular, radicado, marca, modelo, anio, nroChasis, nroMotor);
              break;
            case 2:
              retorno = this.setAltaCamion(patente, titular, radicado, marca, modelo, anio, nroChasis, nroMotor);
               break; 
            
          }

          return retorno;
    }

    // ----Baja de un Vehiculo -----------------------------------------------------
    public setBajaVehiculo(tipo: number, patenteBaja: string): boolean {
  
    // verifico que el auto a dar baja exista en la lista de autos gestionados
    // si existe retorno true con la baja hecha para control
    // si no existe retorno false para control

        // en funcion del tipo de vehículo se direcciona al alta de cada uno
        // 0 = auto ------  1 = motocicleta ------- 2 = camion
        let retorno = false;

        switch (tipo) {
            case 0: // baja de auto
                if (!this.buscaAuto(patenteBaja)) { retorno = false; }
                else { this.getAuto(patenteBaja)[0].setActivo(); retorno = true; }
              break;
            case 1: // baja de moto
                if (!this.buscaMoto(patenteBaja)) { retorno = false; }
                else { this.getMoto(patenteBaja)[0].setActivo(); retorno = true; }
                break; 
            case 2: // baja de camion
                if (!this.buscaCamion(patenteBaja)) { retorno = false; }
                else { this.getCamion(patenteBaja)[0].setActivo(); retorno = true; }
                break;     
            
          }

          return retorno;
    }

    // transferencia generica de un vehículo 
    // en funcion del tipo de vehículo se direcciona a la transferencia especifica
    // 0 = auto ------  1 = motocicleta ------- 2 = camion
    public getTransfiereVehiculo(tipo: number, patente: string, titularActual: string, titularFuturo: string): boolean {

        let retorno = false;

        switch (tipo) {
            case 0: // baja de auto
                let autoATransferir = this.getAuto(patente);

                //if (autoATransferir.length == 0 ) { retorno = false; break;}
                // verifico que el auto exista y este activo. si no lo esta retorna false
                if (autoATransferir.length == 0 || !autoATransferir[0].getActivo()) { retorno = false; }
                else {
                    autoATransferir[0].setHistorico(titularActual);
                    autoATransferir[0].setTitular(titularFuturo);     // transfiero datos al historico del auto
                    retorno = true;
                }
                break;
                
            case 1: // baja de auto
                let motoATransferir = this.getMoto(patente);
                // verifico que el auto exista y este activo. si no lo esta retorna false
                if (motoATransferir.length == 0 || !motoATransferir[0].getActivo() ) { retorno = false; }
                else {
                    motoATransferir[0].setHistorico(titularActual);
                    motoATransferir[0].setTitular(titularFuturo);     // transfiero datos al historico del auto
                    retorno = true;
                }
                break;
            case 2: // baja de auto
                let camionATransferir = this.getCamion(patente);
                // verifico que el auto exista y este activo. si no lo esta retorna false
                if (camionATransferir.length == 0 || !camionATransferir[0].getActivo() ) { retorno = false; }
                else {
                    camionATransferir[0].setHistorico(titularActual);
                    camionATransferir[0].setTitular(titularFuturo);     // transfiero datos al historico del auto
                    retorno = true;
                }
                break;
            
          }
       return retorno;

    }

    // --------------------------------
    // modificadores y seteadores autos
    // --------------------------------

    // devuelve una copia del arreglo de todos los autos del registro
    public getAutos(activo: boolean): Automovil[] {

        return this.autos.filter(auto => (auto.getActivo() == activo));

    }
        
    public getAuto(patente: string): Automovil[] {

        return this.autos.filter(auto => (auto.getPatente() === patente));

    }
    
    
    private setAltaAuto(patente:string, titular:string, radicado:string, marca:string, modelo:string, anio:number, nroChasis:string, nroMotor:string): boolean {

        // verifico que el auto a dar alta no exista en la lista de autos gestionados
        // si existe retorno falso para control
        // si no existe lo agrego y retorno true para control

        const formatoPatente = /[A-Z]{2}[0-9]{3}[A-Z]{2}/; // uso una expresion regular para validad la patente AA999AA
        const anioActual = new Date().getFullYear();

        if (!formatoPatente.test(patente) || anio < 1800 || anio > anioActual) {
            
            return false;
        }
        // creo el auto
        let altaAuto = new Automovil(patente, titular, radicado, marca, modelo, anio, nroChasis, nroMotor);

        // verifico si no existe en la base de autos
        if (this.buscaAuto(altaAuto.getPatente())) { return false; }

        else { this.autos.push(altaAuto); return true; }
    }
    
    private buscaAuto(patente: string): boolean {

            let estaElAuto: boolean = false;
    
            this.autos.forEach(auto => {
    
                if (auto.getPatente() === patente) { estaElAuto = true; }
    
            });
            return estaElAuto;
        }
    
    
    
    // --------------------------------
    // modificadores y seteadores Motos
    // --------------------------------
        
    // devuelve una copia del arreglo de todos los autos del registro
    public getMotos(activo: boolean): Motocicleta[] {

    return this.motos.filter(moto => (moto.getActivo() == activo));

    }

    public getMoto(patente: string): Motocicleta[] {

        return this.motos.filter(moto => (moto.getPatente() === patente));

    }

    private setAltaMoto(patente:string, titular:string, radicado:string, marca:string, modelo:string, anio:number, nroChasis:string, nroMotor:string): boolean {

        // verifico que el auto a dar alta no exista en la lista de autos gestionados
        // si existe retorno falso para control
        // si no existe lo agrego y retorno true para control

        const formatoPatente = /[A-Z]{1}[0-9]{3}[A-Z]{3}/; // uso una expresion regular para validad la patente AA999AA
        const anioActual = new Date().getFullYear();

        if (!formatoPatente.test(patente) || anio < 1800 || anio > anioActual) {
            
            return false;
        }
        // creo el auto
        let altaMoto = new Motocicleta (patente, titular, radicado, marca, modelo, anio, nroChasis, nroMotor);

        // verifico si no existe en la base de autos
        if (this.buscaMoto(altaMoto.getPatente())) { return false; }

        else { this.motos.push(altaMoto); return true; }
    }

    //private buscaAuto (autoABuscar : Automovil) : boolean{
    private buscaMoto(patente: string): boolean {

        let estaLaMoto: boolean = false;

        this.motos.forEach(moto => {

            if (moto.getPatente() === patente) { estaLaMoto = true; }

        });
        return estaLaMoto;
    }



    // --------------------------------
    // modificadores y seteadores Camiones
    // --------------------------------
        
    // devuelve una copia del arreglo de todos los camiones del registro
    public getCamiones(activo: boolean): Camion[] {

        return this.camiones.filter(camion => (camion.getActivo() == activo));
    
        }
    
        public getCamion(patente: string): Camion[] {
    
            return this.camiones.filter(camion => (camion.getPatente() === patente));
    
        }
    
        private setAltaCamion(patente:string, titular:string, radicado:string, marca:string, modelo:string, anio:number, nroChasis:string, nroMotor:string): boolean {
    
            // verifico que el auto a dar alta no exista en la lista de autos gestionados
            // si existe retorno falso para control
            // si no existe lo agrego y retorno true para control
    
            const formatoPatente = /[A-Z]{2}[0-9]{3}[A-Z]{2}/; // uso una expresion regular para validad la patente AA999AA
            const anioActual = new Date().getFullYear();
    
            if (!formatoPatente.test(patente) || anio < 1800 || anio > anioActual) {
                
                return false;
            }
            // creo el auto
            let AltaCamion = new Camion (patente, titular, radicado, marca, modelo, anio, nroChasis, nroMotor);
    
            // verifico si no existe en la base de autos
            if (this.buscaCamion(AltaCamion.getPatente())) { return false; }
    
            else { this.camiones.push(AltaCamion); return true; }
        }
    
        //private busca camion (camionABuscar : Automovil) : boolean{
        private buscaCamion(patente: string): boolean {
    
            let estaElCamion: boolean = false;
    
            this.camiones.forEach(camion => {
    
                if (camion.getPatente() === patente) { estaElCamion = true; }
    
            });
            return estaElCamion;
        }

    }