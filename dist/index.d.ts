declare namespace _default {
    export { generate };
    export { getImage };
}
export default _default;
export type options = {
    prefix: string;
};
export type info = {
    name: string;
    image: string;
    animal: string;
};
/**
 * @param {options} options
 * @returns {info}
 */
declare function generate(options?: options): info;
/**
 * @param {string} animal
 * @returns {string}
 */
declare function getImage(animal: string): string;
