import adjectives from "./adjectives";
import animals from "./animals";
import * as animalImages from "./animalImages";

const animalSize = animals.length;
const adjectiveSize = adjectives.length;

/**
 * @typedef options
 * @property {string} prefix
 */
/**
 * @typedef info
 * @property {string} name
 * @property {string} image
 * @property {string} animal
 */

const anonymous = () => {
  /**
   * @param {options} options
   * @returns {info}
   */
  function generate(options = {}) {
    const { prefix } = options;
    const adjective = adjectives[Math.floor(Math.random() * adjectiveSize)];
    const animal = animals[Math.floor(Math.random() * animalSize)];
    const image = animalImages[animal];
    const name = `${adjective} ${animal}`;

    return {
      name: prefix ? `${prefix} ${name}` : name,
      image,
      animal,
    };
  }

  /**
   * @param {string} animal
   * @returns {string}
   */
  function getImage(animal) {
    const image = animalImages[animal];
    return image;
  }

  return {
    generate,
    getImage,
  };
};

export default anonymous();
