import { describe, expect, test } from "vitest";
import { Rectangulo } from "../src/Rectangulo";

describe("Rectangulo", () => {
    test("se puede crear un rectangulo", () => {
        const rectangulo = new Rectangulo(5, 3);
        expect(rectangulo).not.toBeNull();
    });

    test("el area de un rectangulo es correcto", () => {
        const rectangulo = new Rectangulo(5, 3);
        expect(rectangulo.calcularArea()).toBe(15);
    });

    test("el perimetro de un rectangulo es correcto", () => {
        const rectangulo = new Rectangulo(5, 3);
        expect(rectangulo.calcularPerimetro()).toBe(16);
    });
});