import { Figuras } from "./Figuras";

export class Rectangulo extends Figuras {
  private _base: number;
  private _altura: number;

  constructor(base: number, altura: number) {
    super("Rectangulo");               //le paso el nombre a Figura
    this._base = base;                 //guardo la base
    this._altura = altura;             //guardo la altura
  }

  calcularArea(): number {                        //área del rectángulo base × altura
    return this._base * this._altura;
  }

  calcularPerimetro(): number {                 //perímetro del rectángulo 2 × (base + altura)
    return 2 * (this._base + this._altura);
  }
}