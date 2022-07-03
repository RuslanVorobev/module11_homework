import { getPercents } from "./funcs.js";

describe("test getPercents", () => {
    it("get 0 Percents from 123 equals to 0", () => {
        const result = getPercents(0, 123);
        expect(result).toBe(0);
    });
    it("get 50 Percents from 444 equals to 222", () => {
        const result = getPercents(50, 444);
        expect(result).toBe(222);
    });
    it("get -50 Percents from 444 is NaN", () => {
        const result = getPercents(-50, 444);
        expect(result).toBe(NaN);
    });
    it("get 50 Percents from -444 equals to -222", () => {
        const result = getPercents(50, -444);
        expect(result).toBe(-222);
    });
    it("get 200 Percents from 444 equals to 888", () => {
        const result = getPercents(200, 444);
        expect(result).toBe(888);
    });
});
