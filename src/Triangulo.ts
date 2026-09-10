import { Figuras } from "./Figuras";

export class Triangulo extends Figuras {
  private _base: number;
  private _altura: number;
  private _lado1: number;
  private _lado2: number;
  private _lado3: number;

  constructor(base: number, altura: number, lado1: number, lado2: number, lado3: number) {
    super("Triangulo");
    this._base = base;
    this._altura = altura;
    this._lado1 = lado1;
    this._lado2 = lado2;
    this._lado3 = lado3;
  }

  calcularArea(): number {                       //area del triángulo (base × altura) / 2
    return (this._base * this._altura) / 2;
  }

  calcularPerimetro(): number {                       //perimetro del triángulo suma de los tres lados
    return this._lado1 + this._lado2 + this._lado3;
  }
}