import {createPlant, changeState, storeState} from "../src/plant.js"

describe("createPlant", () => {
    // test #1
    test("create a plant object with a name property and value equal to plantName", () => {
        const rose = createPlant("rose")
        expect(rose).toEqual({name:"rose"})
    });
});

describe("changeState", () => {
    // test #1
    test("add water property to rose with a value of 5", () => {
        const rose = createPlant("rose")
        const waterPlant = changeState("water")(5)
        const wateredRose = waterPlant(rose)
        expect(wateredRose).toEqual({name:"rose", water:5})
    });
});

describe("storeState", () => {
    // test #1
    test("return stored state according to the change added", () => {
        const stateControl = storeState();
        const addSeed = changeState("seed")(1);
        const newState = stateControl(addSeed);
        expect(newState).toEqual({seed:1});
    });
});