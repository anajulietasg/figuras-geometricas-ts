import { describe, expect, test } from "vitest";
import { Lienzo } from "../src/Lienzo";
import { Cuadrado } from "../src/Cuadrado";
import { Rectangulo } from "../src/Rectangulo";

describe("Lienzo", () => {
  test("un lienzo nuevo arranca sin figuras", () => {
    const lienzo = new Lienzo();
    expect(lienzo.cantidad()).toBe(0);
  });

  test("se puede agregar una figura al lienzo", () => {
    const lienzo = new Lienzo();
    lienzo.agregar(new Cuadrado(5));
    expect(lienzo.cantidad()).toBe(1);
  });

  test("el lienzo cuenta bien varias figuras", () => {
    const lienzo = new Lienzo();
    lienzo.agregar(new Cuadrado(5));
    lienzo.agregar(new Rectangulo(4, 6));
    expect(lienzo.cantidad()).toBe(2);
  });

  test("el área total es la suma de las áreas de las figuras", () => {
    const lienzo = new Lienzo();
    lienzo.agregar(new Cuadrado(5));      //área 25
    lienzo.agregar(new Rectangulo(4, 6)); //área 24
    expect(lienzo.areaTotal()).toBe(49);  //25 + 24 = 49
  });
});