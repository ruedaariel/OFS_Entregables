
import { Mago } from "./Mago"
import { Arquero } from "./Arquero"  
import { Luchador } from "./Luchador"  
import { SuperSuper } from "./SuperSuper";

import "colors";
import { cyan } from "colors";

let legolas: Arquero = new Arquero ("legolas");
let merlin: Mago = new Mago ("merlin");
let nippur: Luchador = new Luchador ("nippur");

// la idea es que si un personaje acumula un determinado valor de vida pasa a una instacia superior en su tipo
//merlin = new SuperSuper("merlin"); // evoluciona a SuperSuper que extiende de mago

//mermo un poco el nivel de protección para inicar
merlin.setNivelProteccion(.9);
//console.log (merlin.getNivelProteccion());
let pelea: number = 0

console.log (" Datos de Merlin antes de la lucha".red);
muestraDatosPersonaje(merlin);
console.log("");
console.log (" Datos de Legolas antes de la lucha".red);
muestraDatosPersonaje(legolas);


for (let i = 0; i< 1000; i++){

 // ataque a merlin pasando el nivel de defensa de merlin   
 pelea = legolas.atacar(merlin.getNivelProteccion());

// Pelea = 0 gana Legolas ----- Pelea = 1 Gana Merlin 
if (pelea === 0) { legolas.setNivelAtaque(legolas.getNivelAtaque() * 1.02);
                    merlin.setNivelProteccion(merlin.getNivelProteccion()*.96);
                    //console.log("Gano Legolas");
}
else   { legolas.setNivelProteccion(legolas.getNivelProteccion()*.96);
    merlin.setNivelAtaque(legolas.getNivelAtaque()*1.02);
    //console.log("Gano Merlin");
    }
}

console.log (" Estan Luchando");
console.log ("")


console.log (" Datos de Merlin luego de la lucha".yellow);
muestraDatosPersonaje(merlin);
console.log("");
console.log (" Datos de Legolas luego de la lucha".yellow);
muestraDatosPersonaje(legolas);


//***************************************************************************************************
function muestraDatosPersonaje(personaje: any): void {
    // devuelve listado de autos dados de baja


    let vive: string = ""

    if (personaje.getVida() === 0) { vive = igualoCadena(" Murio", 20, " ").bgRed;}
        else { vive = igualoCadena(personaje.getVida().toString(), 20, " ").cyan}

    //console.clear();
    console.log(igualoCadena("┌", 32, "─") + "┬" + igualoCadena("─", 27, "─") + "┬" + igualoCadena("─", 27, "─") + "┐");

    console.log("│ Nivel: " + igualoCadena(personaje.getNivel().toString(), 23, " ").cyan +
        "│ Vida: " + `${vive}`.cyan +
        "│ Nivel Ataque: " + igualoCadena(personaje.getNivelAtaque().toFixed(3).toString(), 12, " ").cyan + "│");
    console.log("│ Nivel Proteccion: " + igualoCadena(personaje.getNivelProteccion().toFixed(3).toString(), 12, " ").cyan +
        "│ Poder: " + igualoCadena(personaje.getPoder().toFixed(3).toString(), 19, " ").cyan +
        "│ Agilidad: " + igualoCadena(personaje.getAgilidad().toFixed(3).toString(), 16, " ").cyan + "│");

        console.log(igualoCadena("└", 32, "─") + "┴" + igualoCadena("─", 27, "─") + "┴" + igualoCadena("─", 27, "─") + "┘");

}

function igualoCadena(cadena: string, largo: number, caracter: string): string {

    let cadenaNormalizada = cadena.padEnd(largo, caracter);

    return cadenaNormalizada;

}
