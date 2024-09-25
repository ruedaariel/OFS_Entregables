export class Motocicleta {

    private patente: string;
    private marca: string;
    private modelo: string;
    private anio: number;
    private titular: string = "";
    private historico: string[] = [];
    private activo: boolean = false;


    public constructor (patente:string, marca:string, modelo:string, anio:number){

        
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.activo = true;

    }

    public getPatente(): string {
        return this.patente;
    }
    public setPatente(value: string) {
        this.patente = value;
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
    
    public getHistorico(): string[] {
        return this.historico;
    }
}