import {createPlant, changeState} from "../src/plant.js"

describe("createPlant", () => {
    // test #1
    test("create a plant object with a name property and value equal to plantName", () => {
        const rose = createPlant("rose")
        expect(rose).toEqual({name:"rose"});
    });
});

describe("changeState", () => {
    // test #1
    test("add water property to rose with a value of 5", () => {
    const rose = createPlant("rose")
    const waterPlant = changeState("water")(5)
    const wateredRose = waterPlant(rose);
    expect(wateredRose).toEqual({name:"rose", water:5});
    });
});