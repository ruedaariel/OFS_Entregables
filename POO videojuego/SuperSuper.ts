import { Mago } from "./Mago";


export class SuperSuper extends Mago {

    
    private escudo: number

    public constructor (nombre:string){

    super (nombre);

    this.nivelAtaque = 1;
    this.nivelProteccion = 1;

    this.poder = 1 * this.nivelAtaque; // maximo valor 1
    this.agilidad = 1;
    this.escudo = 10 // es una evolucion con un poder más

    }

    // setters
    public setNivel (nivel:number) {

        this.nivel = nivel;
    }

    public setVida (vida:number) {

        this.vida = vida;
    }

    public setNivelAtaque (nivelAtaque:number) {

        // si nivel de ataque es mayor a 3 sumo uno al nivel
        if (nivelAtaque > 3) {    this.nivel += 1;
            this.nivelAtaque = 1;
        }
        else {this.nivelAtaque = nivelAtaque;}
    }

    public setNivelProteccion (proteccion:number) {

        // si nivel de protección es menor a 0.01 murio y resto una vida y restablezco el nivel
        if (proteccion < 0.01) {    this.vida -= 1;
                                    this.nivelProteccion = 1;
        }
        else {this.nivelProteccion = proteccion;}
    }

    public SetAgilidad (agilidad:number):void {

        this.agilidad = agilidad;
    }

    // getters
    public getNivel ():number {

        return this.nivel;
    }
    public getPoder ():number {

        return this.poder;
    }

    public getVida ():number {

        return this.vida;
    }

    public getNivelAtaque ():number {

        return this.nivelAtaque;
    }

    public getNivelProteccion ():number {

        return this.nivelProteccion;
    }

    public getAgilidad ():number {

        return this.agilidad;
    }



    
}

