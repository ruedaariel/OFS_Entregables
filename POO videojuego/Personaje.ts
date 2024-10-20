export abstract class Personaje {

    protected nombre: string;
    protected nivel: number;
    protected vida: number;
    protected nivelAtaque: number;
    protected nivelProteccion: number;

    constructor (nombre: string){

        this.nombre = nombre;
        this.nivel = 1;
        this.vida = 5;
        this.nivelAtaque = 1;
        this.nivelProteccion = 1;

    }

    abstract atacar (nivelDefensa:number): number;
    abstract defender (nivelAtaque:number): number;
    
}