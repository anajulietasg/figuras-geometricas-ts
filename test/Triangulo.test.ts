import { describe, expect, test } from "vitest";
import { Triangulo } from "../src/Triangulo";

describe ("Triangulo", () => {
    test("se puede crear un triangulo", () => {
        const triangulo = new Triangulo(5, 3, 4, 5, 6);
        expect(triangulo).not.toBeNull();
    });

    test("el area de un triangulo es correcto", () => {
        const triangulo = new Triangulo(5, 3, 4, 5, 6);
        expect(triangulo.calcularArea()).toBe(7.5);
    });

    test("el perimetro de un triangulo es correcto", () => {
        const triangulo = new Triangulo(5, 3, 4, 5, 6);
        expect(triangulo.calcularPerimetro()).toBe(15);
    });
});