import {createPlant, changeState, storeState, assignState, checkDead} from "../src/plant.js"

describe("createPlant", () => {
    // test #1
    test("create a plant object with a name prop and value equal to plantName", () => {
        const rose = createPlant("rose")
        expect(rose).toEqual({name:"rose"})
    });
});

describe("changeState", () => {
    // test #1
    test("add or update a prop &|| value to state", () => {
        const rose = createPlant("rose")
        const waterPlant = changeState("water")(5)
        const wateredRose = waterPlant(rose)
        expect(wateredRose).toEqual({name:"rose", water:5})
    });
});

describe("storeState", () => {
    // test #1
    test("return stored state according to the change added", () => {
        const stateControl = storeState()
        const addSeed = changeState("seed")(1)
        const newState = stateControl(addSeed)
        expect(newState).toEqual({seed:1})
    });
});

describe("assignState", () => {
    // test #1
    test("add a prop to state and assign its prop to a value", () => {
        const iris = createPlant("iris")
        expect(iris).toEqual({name:"iris"})
        const makeRed = assignState("color")("red")
        makeRed(iris)
        expect(iris).toEqual({name:"iris",color:"red"})
    });
});

describe("checkDead", () => {
    // test #1
    test("return false if plant isnt dead", () => {
        const rose = createPlant("rose");
        const activateFlower = changeState("water")(5);
        const activeFlower = activateFlower(rose);
        const newRose = checkDead(activeFlower);
        expect(newRose).toEqual({name: "rose",water:5,dead:false})
    });
});