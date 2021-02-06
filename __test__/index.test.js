import anonymous from "../dist/anonymous.min";
import animals from "../src/animals";

describe("anonymous", () => {
  it("should exist all animal images", () => {
    animals.forEach((animal) => {
      const animalImage = anonymous.getImage(animal);
      expect(typeof animalImage).toBe("string");
    });
  });

  it("should exist sampling of animal random", () => {
    for (let i = 0; i < 20; i++) {
      const { name, image, animal } = anonymous.generate();
      expect(animals.indexOf(animal)).not.toBe(-1);
      expect(typeof name).toBe("string");
      expect(typeof image).toBe("string");
    }
  });

  it("should have prefix when prefix is assigned", () => {
    const prefix = "Anonymous";
    const { name, image, animal } = anonymous.generate({ prefix });
    expect(animals.indexOf(animal)).not.toBe(-1);
    expect(name.slice(0, prefix.length)).toBe(prefix);
    expect(typeof name).toBe("string");
    expect(typeof image).toBe("string");
  });
});
