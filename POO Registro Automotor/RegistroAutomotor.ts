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

// muestra el listado de los autos activos preguntado por el getActivo
public getListadoAutos(): void {

    // devuelve listado de autos activos
     this.autos.forEach(auto => {
                
        if (auto.getActivo()) { 
            
            console.log("| " + this.igualoCadena(auto.getPatente(),11) +
                        "| " + this.igualoCadena(auto.getMarca(),13) +
                        "| " + this.igualoCadena(auto.getModelo(),13) +
                        "| " + this.igualoCadena(auto.getAnio().toString(),7) + "|");
        }
            //console.log(auto.getPatente())}
        
     });

}

// muestra el listado de los autos preguntado por el getActivo
public getListadoAutosBaja(): void {

    // devuelve listado de autos dados de baja
     this.autos.forEach(auto => {
                
        if (!auto.getActivo()) { 
            
            console.log("| " + this.igualoCadena(auto.getPatente(),11) +
                        "| " + this.igualoCadena(auto.getMarca(),13) +
                        "| " + this.igualoCadena(auto.getModelo(),13) +
                        "| " + this.igualoCadena(auto.getAnio().toString(),7) + "|");
                    }
        
     });

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

private igualoCadena (cadena: string, largo:number) : string {

    let largoCadena = cadena.length;

    let cadenaNormalizada = cadena.padEnd(largo, " ");
    
    return cadenaNormalizada;

}



}

