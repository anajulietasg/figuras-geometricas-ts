import { Figuras } from "./Figuras";

export class Lienzo {
  private _figuras: Figuras[] = [];     // lista de figuras

  agregar(figura: Figuras): void {   //agrega una figura a la lista
    this._figuras.push(figura);
  }

  areaTotal(): number {                       //calcula el área total de todas las figuras
    let total = 0;
    for (let i = 0; i < this._figuras.length; i++) {
        total = total + this._figuras[i].calcularArea();
    }
    return total;
  }

  cantidad(): number {                            //devuelve la cantidad de figuras del lienzo
    return this._figuras.length;
  }
}