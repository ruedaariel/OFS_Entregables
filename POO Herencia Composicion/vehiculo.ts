
export class Vehiculo {

     
    protected marca: string;
    protected modelo: string;
    protected anio: number;
    protected nroChasis: string;
    protected nroMotor: string;
    protected historico: object []

    public constructor (marca:string, modelo:string, anio:number, nroChasis:string, nroMotor:string){

        
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.nroChasis = nroChasis
        this.nroMotor = nroMotor;
        this.historico = [];


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
    
    public getNroChasis(): string {
        return this.nroChasis;
    }
    
    public getNroMotor(): string {
        return this.nroMotor;
    }

    public getHistorico(): Object {
        return this.historico;
    }


    public setNroMotor(nroMotor:string): void{

        this.nroMotor = nroMotor;

    }    

    public setHistorico (titularActual: string): void {

        let transferidoHoy = new Date;
        let fechaTransferencia = transferidoHoy.getUTCDate().toString()+"/"+transferidoHoy.getUTCMonth().toString()+"/"+transferidoHoy.getUTCFullYear().toString()

        this.historico.push({estado:"transferido",titular:titularActual,fecha:fechaTransferencia});
        
    }


}