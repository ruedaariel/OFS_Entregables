import { Personaje } from "./Personaje";

export class Arquero extends Personaje {

    private flechas: number;
    private agilidad: number;

    public constructor(nombre: string) {

        super(nombre);

        this.nivelAtaque = 1;
        this.nivelProteccion = 1;

        this.flechas = 1 * this.nivelAtaque; // maximo valor 1
        this.agilidad = 1;

    }

    // setters
    public setNivel(nivel: number) {

        this.nivel = nivel;
    }

    public setVida(vida: number) {

        this.vida = vida;
    }

    public setNivelAtaque(ataque: number) {

        // si nivel de ataque es mayor a 3 sumo uno al nivel
        if (ataque > 2) {
            this.nivel += 1;
            this.nivelAtaque = 1;
        }
        else {this.nivelAtaque = ataque;}
    }

    public setNivelProteccion(proteccion: number) {

        // si nivel de protección es menor a 0.01 murio y resto una vida y restablezco el nivel
        if (proteccion < 0.01) {
            this.vida -= 1;
            if (this.vida <= 0) { this.vida = 0;}
            this.nivelProteccion = 1;
        }
        else {this.nivelProteccion = proteccion;}
    }

    public SetAgilidad(agilidad: number): void {

        this.agilidad = agilidad;
    }

    // getters
    public getNivel(): number {

        return this.nivel;
    }

    public getVida(): number {

        return this.vida;
    }

    public getPoder(): number {

        return this.flechas;
    }

    public getNivelAtaque(): number {

        return this.nivelAtaque;
    }

    public getNivelProteccion(): number {

        return this.nivelProteccion;
    }

    public getAgilidad(): number {

        return this.agilidad;
    }



    public atacar(nivelDefensa: number): number {

        // atacar se define como calculo entre nivel de ataque de mago y la defensa del atacado pasado por parámetro
        let resultadoLucha: number = 0;
        let ataque = this.nivelAtaque * this.flechas; // pondera nivelAtaque con poder
        let promedioAtaqueDefensa: number = (ataque + nivelDefensa) / 2;

        // un nro aleatorio entre ataque y defensa        
        resultadoLucha = this.randomLucha(ataque, nivelDefensa);

        // si resultalucha es menor promedio entre ataque y defensa gana atacante si es mayor gana defensor
        if (resultadoLucha < promedioAtaqueDefensa) { return 0; }
        else { return 1; }


    }

    public defender(nivelAtaque: number): number {

        // atacar se define como calculo entre nivel de ataque de mago y la defensa del atacado pasado por parámetro
        let resultadoLucha: number = 0;
        let defensa = this.nivelProteccion * this.agilidad; // pondera nivelDefensa con agilidad
        let promedioAtaqueDefensa: number = (defensa + nivelAtaque) / 2;

        // un nro aleatorio entre ataque y defensa        
        resultadoLucha = this.randomLucha(defensa, nivelAtaque);

        // si resultalucha es menor promedio entre defensa y ataque gana defensor si es mayor gana atacante
        if (resultadoLucha < promedioAtaqueDefensa) { return 1; }
        else { return 0; }
    }

    private randomLucha(min: number, max: number) {
        return min + Math.random() * (max - min);
    }

}