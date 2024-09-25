import { Automovil } from "./Automovil";
import { Motocicleta } from "./Motocicleta";
import { Camion } from "./Camion";

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

     this.autos.forEach(auto => {
        
        // si dejo esta linea da error la ejecución
        //if (auto.getActivo()) { console.log(auto)}
        console.log(auto);
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

private buscaAuto (autoABuscar : Automovil) : boolean{

    if ( this.autos.indexOf(autoABuscar) == -1) { return false;}

    return true;
}




}

