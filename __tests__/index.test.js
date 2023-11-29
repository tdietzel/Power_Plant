import {createPlant} from "../src/plant.js"

describe("createPlant", () => {
    // test #1
    test("create a plant object with a name property and value equal to plantName", () => {
        const rose = createPlant("rose")
        expect(rose).toEqual({name:"rose"});
    });
});