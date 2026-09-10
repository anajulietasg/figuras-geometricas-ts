import { describe, expect, test } from "vitest";
import { Cuadrado } from "../src/Cuadrado";

describe("Rectangulo", () => {
    test("se puede crear un rectangulo", () => {
        const rectangulo = new Cuadrado(5);
        expect(rectangulo).not.toBeNull();
    });

    test("el area de un rectangulo es correcto", () => {
        const rectangulo = new Cuadrado(5);
        expect(rectangulo.calcularArea()).toBe(25);
    });

    test("el perimetro de un rectangulo es correcto", () => {
        const rectangulo = new Cuadrado(5);
        expect(rectangulo.calcularPerimetro()).toBe(20);
    });
});