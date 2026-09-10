import { describe, expect, test } from "vitest";
import { Cuadrado } from "../src/Cuadrado";

describe("Cuadrado", () => {
    test("se puede crear un cuadrado", () => {
        const cuadrado = new Cuadrado(5);
        expect(cuadrado).not.toBeNull();
    });

    test("el area de un cuadrado es correcto", () => {
        const cuadrado = new Cuadrado(5);
        expect(cuadrado.calcularArea()).toBe(25);
    });

    test("el perimetro de un cuadrado es correcto", () => {
        const cuadrado = new Cuadrado(5);
        expect(cuadrado.calcularPerimetro()).toBe(20);
    });
});
