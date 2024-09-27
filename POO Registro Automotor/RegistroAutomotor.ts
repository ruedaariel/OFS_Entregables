import { Automovil } from "./Automovil";
import { Motocicleta } from "./Motocicleta";
import { Camion } from "./Camion";

import "colors";

export class RAutomotor {

    private numero : string;
    private ciudad : string;
    private autos : Automovil[];
    private motos : Motocicleta[];
    private camiones : Camion[];
    

    public constructor (numero:string, ciudad:string){

        
        this.numero = numero;
        this.ciudad = ciudad;
        this.autos = [];
        this.motos = [];
        this.camiones = [];
    }


public  getNro(): string {
    return this.numero;
}
public getCiudad ():  string {
    return this.ciudad;
}

// devuelve una copia del arreglo de todos los autos del registro
public getAutos (activo:boolean): Automovil[]{

    return this.autos.filter(auto => (auto.getActivo() == activo));

}

public getAuto (patente: string): Automovil []{

    return this.autos.filter(auto => (auto.getPatente() === patente ));

}

public getTransfiereAuto(patente: string,titularActual: string,titularFuturo: string): void {

       let autoATransferir = this.getAuto(patente);
       
      autoATransferir[0].setHistorico(titularActual,titularFuturo);      // transfiero datos al historico del auto

}


// alta de un vehiculo

public setAltaAuto (altaAuto : Automovil): boolean{

// verifico que el auto a dar alta no exista en la lista de autos gestionados
// si existe retorno falso para control
// si no existe lo agrego y retorno true para control
    if (this.buscaAuto(altaAuto)) { return false;}
    else {this.autos.push(altaAuto); return true;}
}

public setBajaAuto (bajaAuto : Automovil): boolean{

    // verifico que el auto a dar baja exista en la lista de autos gestionados
    // si existe retorno true con la baja hecha para control
    // si no existe retorno false para control
        if (!this.buscaAuto(bajaAuto)) { return false;}
        else {bajaAuto.setActivo(); return true;}
    }


private buscaAuto (autoABuscar : Automovil) : boolean{

    if ( this.autos.indexOf(autoABuscar) == -1) { return false;}

    return true;
}





}

