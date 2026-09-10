import { describe, expect, test } from "vitest";
import { Circulo } from "../src/Circulo";

describe("Circulo", () => {
    test("se puede crear un circulo", () => {
        const circulo = new Circulo(5);
        expect(circulo).not.toBeNull();
    });

    test("el area de un circulo es correcto", () => {
        const circulo = new Circulo(2);
        expect(circulo.calcularArea()).toBeCloseTo(12.57, 1);  //espero que sea aproximadamente 12.57, con 1 decimal de precisión
    });

    test("el perimetro de un circulo es correcto", () => {
        const circulo = new Circulo(2);
        expect(circulo.calcularPerimetro()).toBeCloseTo(12.57, 1);  //espero que sea aproximadamente 12.57, con 1 decimal de precisión
    });
});