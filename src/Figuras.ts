import { IDibujable } from "./IDibujable";  

export abstract class Figuras 
    implements IDibujable {
        private _nombre: string;

        constructor(nombre: string) {             // se ejecuta al crear un objeto, si o si le da un nombre a la figura
            this._nombre = nombre;
        }
        
        get nombre(): string {
            return this._nombre;
        }

        abstract calcularArea(): number;             //métodos abstractos, cada subclase lo implementará a su manera
        abstract calcularPerimetro(): number;

        dibujar(): string {                                  //lo tienen todas por igual
            return "Dibujando la figura:" + this._nombre;
        }
     }