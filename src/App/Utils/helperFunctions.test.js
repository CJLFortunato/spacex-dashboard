import { 

getLaunchesByYear,
getSuccessRate,
getCrewRate,
getLaunchesByRocket,
colorGenerator

} from "./helperFunctions";

describe("getLaunchesByYear function does its job", () => {

    const testData = [
        { date_utc: "2015-05-14" },
        { date_utc: "2015-12-05" },
        { date_utc: "2016-07-28" },
        { date_utc: "2017-03-17" }
    ];

    const expected = {
        "2015": 2,
        "2016": 1,
        "2017": 1
    };

    const result = getLaunchesByYear(testData);

    it("doesn't return an empty object", () => {

        expect(result).not.toEqual({});

    });

    it("return the expected values", () => {

        expect(result).toEqual(expected);

    });

});

describe("getSuccessRate function does its job", () => {

    const testData = [
        { success: false },
        { success: true },
        { success: false },
        { success: true },
    ];

    const expected = {
        successes: 2,
        failures: 2
    };

    const result = getSuccessRate(testData);

    it("actually increments the counter object", () => {

      expect(result).not.toHaveProperty('successes', 0);
      expect(result).not.toHaveProperty('failures', 0);
    });

    it("return the expected values", () => {

        expect(result).toEqual(expected);

    });
});

describe("getCrewRate function does its job", () => {

    const testData = [
        { crew: [] },
        { crew: [1, 2] },
        { crew: [] },
        { crew: [3, 4, 5] },
    ];

    const expected = {
        manned: 2,
        unmanned: 2
    };

    const result = getCrewRate(testData);

    it("actually increments the counter object", () => {

      expect(result).not.toHaveProperty('manned', 0);
      expect(result).not.toHaveProperty('unmanned', 0);
    });

    it("return the expected values", () => {

        expect(result).toEqual(expected);

    });
});

describe("getLaunchesByRocket function does its job", () => {

    const testData = [
        { rocket: {name: 'Falcon 1'} },
        { rocket: {name: 'Falcon 9'} },
        { rocket: {name: 'Falcon 9'} },
        { rocket: {name: 'Falcon Heavy'} }
    ];

    const expected = {
        "Falcon 1": 1,
        "Falcon 9": 2,
        "Falcon Heavy": 1
    };

    const result = getLaunchesByRocket(testData);

    it("doesn't return an empty object", () => {

        expect(result).not.toEqual({});

    });

    it("return the expected values", () => {

        expect(result).toEqual(expected);

    });

});

describe(" the color generator function", () => {

    it("returns a valid hexadecimal code", () => {

        const result = colorGenerator("test");

        expect(result).toMatch(/^#(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$/);
    });
});