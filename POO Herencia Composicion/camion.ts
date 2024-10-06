import { Vehiculo } from "./vehiculo"

export class Camion extends Vehiculo {

    private patente: string;
    private titular: string = "";
    private activo: boolean;
    private radicado: string;


    public constructor(patente: string, titular: string, radicado: string, marca: string, modelo: string, anio: number, nroChasis: string, nroMotor: string) {
        super(marca, modelo, anio, nroChasis, nroMotor);

        this.patente = patente;
        this.titular = titular;
        this.radicado = radicado;
        this.activo = true;

    }

    public getPatente(): string {
        return this.patente;
    }

    public getMarca(): string {
        return this.marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public getAnio(): number {
        return this.anio;
    }

    public getTitular(): string {
        return this.titular;
    }

    public getActivo(): boolean {
        return this.activo;
    }

    public getRadicado(): string {
        return this.radicado;
    }

    public setActivo(): void {
        // niega la condicion de activo true va a false y false va a true
        this.activo = !this.activo;
    }


    public setTitular(titular: string): void {
        this.titular = titular;
    }
}