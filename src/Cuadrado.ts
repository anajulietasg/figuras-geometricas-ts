import { Figuras } from "./Figuras";

export class Cuadrado extends Figuras {
    private _lado: number;

    constructor(lado:number) {
        super("Cuadrado");         //le paso el nombre a la clase Figura
        this._lado = lado;         //guardo el lado, propio del cuadrado
    }

    calcularArea(): number {
        return this._lado * this._lado;         //area del cuadrado
    }

    calcularPerimetro(): number {
        return this._lado * 4;                  //perimetro del cuadrado
    }
}
