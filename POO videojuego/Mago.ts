import { Personaje } from "./Personaje";

export class Mago extends Personaje {

    
    protected poder: number;
    protected agilidad: number;

    public constructor (nombre:string){

    super (nombre);

    this.nivelAtaque = 1;
    this.nivelProteccion = 1;

    this.poder = 1 * this.nivelAtaque; // maximo valor 1
    this.agilidad = 1;

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
        if (nivelAtaque > 2) {    this.nivel += 1;
            this.nivelAtaque = 1;
        }
        else {this.nivelAtaque = nivelAtaque;}
    }

    public setNivelProteccion (proteccion:number) {

        // si nivel de protección es menor a 0.01 murio y resto una vida y restablezco el nivel
        if (proteccion < 0.01) {    this.vida -= 1;
                                    if (this.vida <=0) { this.vida = 0;}
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



    public atacar (nivelDefensa:number): number {

        // atacar se define como calculo entre nivel de ataque de atacante y el nivel defensa del atacado pasado por parámetro
        let resultadoLucha: number = 0;
        let ataque = this.nivelAtaque*this.poder; // pondera nivelAtaque con poder
        let promedioAtaqueDefensa: number = (ataque + nivelDefensa) / 2;

        // un nro aleatorio entre ataque y defensa        
        resultadoLucha = this.randomLucha (ataque, nivelDefensa);
        
        // si resultadolucha es menor promedio entre ataque y defensa gana atacante si es mayor gana defensor
        if (resultadoLucha < promedioAtaqueDefensa) { return 0;}
            else {return 1;}
        

    }

    public defender (nivelAtaque:number): number {

        // atacar se define como calculo entre nivel de defensa de atacado y el nivel de ataque del atacante pasado por parámetro
        let resultadoLucha: number = 0;
        let defensa = this.nivelProteccion*this.agilidad; // pondera nivelDefensa con agilidad
        let promedioAtaqueDefensa: number = ( defensa + nivelAtaque) / 2;

        // un nro aleatorio entre ataque y defensa        
        resultadoLucha = this.randomLucha (defensa, nivelAtaque);
        
        // si resultalucha es menor promedio entre defensa y ataque gana defensor si es mayor gana atacante
        if (resultadoLucha < promedioAtaqueDefensa) { return 1;}
            else {return 0;}
    }

    private randomLucha (min:number, max:number) {
        return min + Math.random() * (max - min);
      }
    
}