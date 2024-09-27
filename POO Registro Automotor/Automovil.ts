
export class Automovil {

     
    private patente: string;
    private marca: string;
    private modelo: string;
    private anio: number;
    private titular: string = "";
    private historico: Object[] = [];
    private activo: boolean ;



    public constructor (patente:string, marca:string, modelo:string, anio:number, titular:string){

        
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.titular = titular
        this.activo = true;

    }

    public getPatente(): string {
        return this.patente;
    }
    public setPatente(value: string) {
        this.patente = value;
    }


    public setHistorico (titularActual: string, titularFuturo: string): void {

        let transferidoHoy = new Date;
        let fechaTransferencia = transferidoHoy.getUTCDate().toString()+"/"+transferidoHoy.getUTCMonth().toString()+"/"+transferidoHoy.getUTCFullYear().toString()

        this.historico.push({estado:"transferido",titular:titularActual,fecha:fechaTransferencia});
        this.titular = titularFuturo;



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
    
    public getHistorico(): Object {
        return this.historico;
    }

    public getActivo(): boolean {
        return this.activo;
    }

    public setActivo(): void {
        // niega la condicion de activo true va a false y false va a true
        this.activo = !this.activo;
    }

    


}