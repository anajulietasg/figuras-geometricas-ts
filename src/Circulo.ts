import { Figuras } from "./Figuras"; 

export class Circulo extends Figuras {
    private _radio: number;

    constructor(radio:number) {
        super("Circulo");         //le paso el nombre a la clase Figura
        this._radio = radio;         //guardo el radio, propio del circulo
    }
    calcularArea(): number {
        return Math.PI * this._radio * this._radio;         //area del circulo π × radio × radio
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this._radio;                  //perimetro del circulo 2 × π × radio
    }
}